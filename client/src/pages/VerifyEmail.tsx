import { Link } from "wouter";

export default function VerifyEmail() {
  const params = new URLSearchParams(window.location.search);
  const email = params.get('email') || 'your email';

  const handleResendEmail = () => {
    console.log("Resend email to:", email);
  };

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
            <h2 className="text-3xl font-bold text-foreground" data-testid="text-verify-title">
              Please verify your email account
            </h2>
            <p className="text-muted-foreground text-base" data-testid="text-verify-message">
              We've sent a confirmation email to{" "}
              <span className="font-semibold text-foreground" data-testid="text-user-email">
                {email}
              </span>
              . Click the link to verify your account ownership and receive your free API key.
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
