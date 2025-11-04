import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Header() {
  const [, setLocation] = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground font-bold text-xl">
              R
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-foreground">RankCascade</h1>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-6" data-testid="nav-main">
          <a href="#features" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors" data-testid="link-features">
            Features
          </a>
          <a href="#benefits" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors" data-testid="link-benefits">
            Benefits
          </a>
          <a href="#testimonials" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors" data-testid="link-testimonials">
            Testimonials
          </a>
          <a href="#faq" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors" data-testid="link-faq">
            FAQ
          </a>
        </nav>
        
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button variant="ghost" size="sm" onClick={() => setLocation("/login")} data-testid="button-login">
            Login
          </Button>
          <Button size="sm" onClick={() => setLocation("/login")} data-testid="button-try-free">
            Try for Free
          </Button>
        </div>
      </div>
    </header>
  );
}
