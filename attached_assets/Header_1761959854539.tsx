import { Button } from "@/components/ui/button";
import logoImage from "@assets/Screenshot_2025-10-29_171702-removebg-preview (1)_1761738505316.png";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container pl-8 md:pl-12 lg:pl-16 flex h-16 items-center justify-between">
        <div className="flex items-center">
          <img src={logoImage} alt="RankCascade" className="h-10" data-testid="img-logo" />
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
          <Button variant="ghost" size="sm" data-testid="button-login">
            Login
          </Button>
          <Button size="sm" data-testid="button-try-free">
            Try for Free
          </Button>
        </div>
      </div>
    </header>
  );
}