# RankCascade - Local and Organic Rank Tracking Platform

## Overview

RankCascade is a professional SaaS platform designed for tracking local and organic search engine rankings. The application targets SEO agencies, digital marketing professionals, and businesses managing multiple locations or clients. It provides comprehensive rank tracking capabilities with white-label reporting, competitor analysis, and automated insights.

The platform features a marketing landing page to attract users, a rank tracking tool for instant checks, and a full authentication system with email verification. The application is built as a modern full-stack web application with a React frontend and Express backend, using PostgreSQL for data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript and Vite as the build tool

**UI Component System**: The application uses shadcn/ui components built on Radix UI primitives. This provides a comprehensive set of accessible, customizable components following the "new-york" style variant. Components are styled using Tailwind CSS with a custom design system.

**Design System**: Dark-first analytics dashboard aesthetic optimized for data professionals. The color palette features dark slate backgrounds (#0F172A, #1E293B) with white cards for maximum contrast, vibrant cyan accents (#06B6D4) for primary CTAs, and coral/orange (#F97316) for secondary actions. The design reduces eye strain during extended dashboard usage and appeals to enterprise SEO agencies.

**Routing**: Uses Wouter for lightweight client-side routing. The application has multiple routes including landing page (/), tool page (/tool), authentication pages (/login, /signup, /verify-email), and a protected dashboard (/dashboard).

**State Management**: TanStack Query (React Query) for server state management, with local React state for UI concerns. Form state is managed using React Hook Form with Zod validation.

**Theme System**: Custom theme provider supporting light/dark modes with theme toggle component. The application defaults to dark mode and persists user preference in localStorage.

### Backend Architecture

**Framework**: Express.js with TypeScript running on Node.js

**Session Management**: Express-session middleware for cookie-based sessions. Session secrets are randomized if not provided via environment variables. Sessions persist for 7 days with secure, httpOnly cookies in production.

**Authentication Flow**: 
- User signup creates account with bcrypt-hashed passwords
- Email verification system using unique tokens
- Login validates credentials and establishes session
- Protected routes check for session.userId
- Email verification required before full access

**API Structure**: RESTful API endpoints under /api namespace:
- POST /api/auth/signup - Create new user account
- POST /api/auth/login - Authenticate user
- POST /api/auth/logout - Destroy session
- POST /api/auth/verify - Verify email token
- GET /api/auth/me - Get current user info

**Development vs Production**: 
- Development uses Vite middleware for HMR
- Production serves static built files from dist/public
- Vite setup includes custom error overlays and Replit-specific plugins

### Data Storage

**ORM**: Drizzle ORM for type-safe database interactions

**Database Schema**: PostgreSQL with three main tables:
- **users**: Stores user accounts (id, email, password, firstName, lastName, isVerified, verificationToken, verifiedAt)
- **rankTrackingRequests**: Stores rank check submissions (id, rankingType, keyword, brandName, branch, location, locationCode)
- **contactSubmissions**: Stores contact form data (id, name, email, contactNumber)

**Migration Strategy**: Uses Drizzle Kit for schema migrations. The drizzle.config.ts defines PostgreSQL dialect with migrations folder structure.

**Development Storage**: In-memory storage implementation (MemStorage class) for development/testing, allowing the app to run without a database during initial development.

**Connection**: Uses @neondatabase/serverless for PostgreSQL connections, configured via DATABASE_URL environment variable.

### External Dependencies

**Email Service**: Resend API for transactional emails
- Used for email verification during signup
- Gracefully degrades if RESEND_API_KEY not configured
- Sends branded verification emails with clickable links
- In development, logs verification tokens to console if email unavailable

**Database Provider**: Designed for Neon PostgreSQL (serverless Postgres)
- Connection pooling via @neondatabase/serverless
- Schema managed through Drizzle ORM migrations
- Requires DATABASE_URL environment variable

**UI Component Libraries**: 
- Radix UI primitives for accessible components
- Lucide React for iconography
- Tailwind CSS for styling
- shadcn/ui design system

**Form Validation**: 
- React Hook Form for form state management
- Zod for schema validation
- @hookform/resolvers for integration

**Build Tools**:
- Vite for frontend bundling and development server
- esbuild for backend compilation
- TypeScript compiler for type checking

**Location Data**: Predefined list of 14 countries for rank tracking (US, UK, CA, AU, DE, FR, ES, IT, NL, BR, MX, IN, JP, SG) with country codes for API integration.

**Replit Integration**: Optional Replit-specific plugins for development experience (@replit/vite-plugin-cartographer, @replit/vite-plugin-dev-banner, @replit/vite-plugin-runtime-error-modal) enabled only in Replit environment.