import { useEffect, useState } from "react";
import { useLocation, Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, Loader2, Mail } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";

export default function VerifyEmail() {
  const params = new URLSearchParams(window.location.search);
  const email = params.get('email');
  const token = params.get('token');
  const [, setLocation] = useLocation();
  const [status, setStatus] = useState<"waiting" | "loading" | "success" | "error">(
    token ? "loading" : "waiting"
  );
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!token) {
      return;
    }

    const verifyEmail = async () => {
      try {
        const response = await apiRequest("/api/auth/verify", {
          method: "POST",
          body: JSON.stringify({ token }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Verification failed");
        }

        setStatus("success");
        setMessage(data.message || "Email verified successfully!");
        
        setTimeout(() => {
          setLocation("/dashboard");
        }, 2000);
      } catch (error) {
        setStatus("error");
        setMessage(error instanceof Error ? error.message : "An error occurred during verification");
      }
    };

    verifyEmail();
  }, [token, setLocation]);

  const handleResendEmail = () => {
    console.log("Resend email to:", email);
  };

  if (status === "waiting" && !token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <div className="w-full max-w-2xl space-y-8">
          <div className="flex flex-col items-center space-y-6">
            <Link href="/" data-testid="link-home">
              <div className="flex items-center gap-3 cursor-pointer">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary text-primary-foreground font-bold text-2xl">
                  R
                </div>
                <h1 className="text-2xl font-bold text-foreground">RankCascade</h1>
              </div>
            </Link>
            
            <div className="text-center space-y-4 max-w-xl">
              <Mail className="w-16 h-16 mx-auto text-primary" />
              <h2 className="text-3xl font-bold text-foreground" data-testid="text-verify-title">
                Please verify your email account
              </h2>
              <p className="text-muted-foreground text-base" data-testid="text-verify-message">
                We've sent a confirmation email to{" "}
                <span className="font-semibold text-foreground" data-testid="text-user-email">
                  {email || 'your email'}
                </span>
                . Click the link in the email to verify your account.
              </p>
            </div>
          </div>

          <div className="text-center text-sm text-muted-foreground space-y-2">
            <p>
              It may take a few minutes for the email to arrive. Double-check your spam folder.
            </p>
            <p>
              Still didn't get it?{" "}
              <button
                onClick={handleResendEmail}
                className="text-primary hover:underline cursor-pointer"
                data-testid="button-resend-email"
              >
                Resend email
              </button>{" "}
              or{" "}
              <Link href="/login" data-testid="link-logout">
                <span className="text-primary hover:underline cursor-pointer">
                  Log out
                </span>
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md" data-testid="card-verify-email">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary text-primary-foreground font-bold text-2xl">
              R
            </div>
            <h1 className="text-2xl font-bold text-foreground">RankCascade</h1>
          </div>
          <CardTitle className="text-2xl">
            Email Verification
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col items-center text-center space-y-4">
            {status === "loading" && (
              <>
                <Loader2 className="w-16 h-16 text-primary animate-spin" data-testid="icon-loading" />
                <div>
                  <p className="text-lg font-semibold text-foreground">Verifying your email...</p>
                  <p className="text-sm text-muted-foreground mt-2">Please wait a moment</p>
                </div>
              </>
            )}

            {status === "success" && (
              <>
                <CheckCircle2 className="w-16 h-16 text-green-600 dark:text-green-400" data-testid="icon-success" />
                <div>
                  <p className="text-lg font-semibold text-green-600 dark:text-green-400" data-testid="text-success-message">
                    {message}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Redirecting to dashboard...
                  </p>
                </div>
              </>
            )}

            {status === "error" && (
              <>
                <XCircle className="w-16 h-16 text-destructive" data-testid="icon-error" />
                <div>
                  <p className="text-lg font-semibold text-destructive" data-testid="text-error-message">
                    Verification Failed
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">{message}</p>
                </div>
                <Button
                  onClick={() => setLocation("/signup")}
                  className="mt-4"
                  data-testid="button-back-to-signup"
                >
                  Back to Sign Up
                </Button>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
