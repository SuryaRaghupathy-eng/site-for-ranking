import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertUserSchema } from "@shared/schema";
import bcrypt from "bcryptjs";
import { randomUUID } from "crypto";
import { sendVerificationEmail } from "./lib/email";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/auth/signup", async (req, res) => {
    try {
      const result = insertUserSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({ error: "Invalid input", details: result.error.flatten() });
      }

      const { email, password, firstName, lastName } = result.data;

      const existingUser = await storage.getUserByEmail(email);
      if (existingUser) {
        return res.status(400).json({ error: "Email already registered" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const verificationToken = randomUUID();

      const user = await storage.createUser(
        {
          email,
          password: hashedPassword,
          firstName,
          lastName,
        },
        verificationToken
      );

      const emailSent = await sendVerificationEmail({
        to: email,
        firstName,
        verificationToken,
      });

      if (!emailSent) {
        return res.status(500).json({ 
          error: "User created but failed to send verification email. Please contact support." 
        });
      }

      return res.status(201).json({ 
        message: "Account created successfully. Please check your email to verify your account.",
        email: user.email 
      });
    } catch (error) {
      console.error("Signup error:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  });

  app.post("/api/auth/verify", async (req, res) => {
    try {
      const { token } = req.body;

      if (!token) {
        return res.status(400).json({ error: "Verification token is required" });
      }

      const user = await storage.verifyUser(token);

      if (!user) {
        return res.status(400).json({ error: "Invalid or expired verification token" });
      }

      req.session.userId = user.id;

      return res.status(200).json({ 
        message: "Email verified successfully",
        user: {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
        }
      });
    } catch (error) {
      console.error("Verification error:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  });

  app.post("/api/auth/login", async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
      }

      const user = await storage.getUserByEmail(email);

      if (!user) {
        return res.status(401).json({ error: "Invalid email or password" });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ error: "Invalid email or password" });
      }

      if (!user.isVerified) {
        return res.status(403).json({ 
          error: "Please verify your email before logging in. Check your inbox for the verification link." 
        });
      }

      req.session.userId = user.id;

      return res.status(200).json({ 
        message: "Login successful",
        user: {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
        }
      });
    } catch (error) {
      console.error("Login error:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  });

  app.post("/api/auth/logout", async (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ error: "Failed to logout" });
      }
      res.clearCookie("connect.sid");
      return res.status(200).json({ message: "Logged out successfully" });
    });
  });

  app.get("/api/auth/me", async (req, res) => {
    try {
      if (!req.session.userId) {
        return res.status(401).json({ error: "Not authenticated" });
      }

      const user = await storage.getUser(req.session.userId);

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      return res.status(200).json({
        user: {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          isVerified: user.isVerified,
        }
      });
    } catch (error) {
      console.error("Get user error:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
