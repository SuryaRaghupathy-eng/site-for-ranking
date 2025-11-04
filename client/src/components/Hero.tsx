import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { useLocation } from "wouter";

export default function Hero() {
  const [, setLocation] = useLocation();

  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20"></div>
      <div className="absolute inset-0 p-8 md:p-16 lg:p-24">
        <div className="h-full flex flex-col gap-4 blur-xl opacity-40">
          <div className="flex items-center justify-between">
            <div className="h-8 w-32 bg-foreground/20 rounded"></div>
            <div className="flex gap-2">
              <div className="h-8 w-8 bg-foreground/15 rounded-full"></div>
              <div className="h-8 w-8 bg-foreground/15 rounded-full"></div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 flex-1">
            <div className="bg-card/80 border border-foreground/10 rounded-lg p-4 space-y-2">
              <div className="h-4 w-24 bg-foreground/20 rounded"></div>
              <div className="h-8 w-16 bg-primary/30 rounded"></div>
            </div>
            <div className="bg-card/80 border border-foreground/10 rounded-lg p-4 space-y-2">
              <div className="h-4 w-24 bg-foreground/20 rounded"></div>
              <div className="h-8 w-16 bg-primary/30 rounded"></div>
            </div>
            <div className="bg-card/80 border border-foreground/10 rounded-lg p-4 space-y-2">
              <div className="h-4 w-24 bg-foreground/20 rounded"></div>
              <div className="h-8 w-16 bg-primary/30 rounded"></div>
            </div>
          </div>
          <div className="h-32 bg-card/80 border border-foreground/10 rounded-lg p-4 flex items-end gap-2">
            <div className="w-1/6 bg-primary/40 rounded-t" style={{ height: '40%' }}></div>
            <div className="w-1/6 bg-primary/40 rounded-t" style={{ height: '70%' }}></div>
            <div className="w-1/6 bg-primary/40 rounded-t" style={{ height: '50%' }}></div>
            <div className="w-1/6 bg-primary/40 rounded-t" style={{ height: '90%' }}></div>
            <div className="w-1/6 bg-primary/40 rounded-t" style={{ height: '60%' }}></div>
            <div className="w-1/6 bg-primary/40 rounded-t" style={{ height: '80%' }}></div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight" data-testid="text-hero-title">
              Level up your local rank tracking
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto" data-testid="text-hero-subtitle">
              Track your local and organic rankings with precision. Get comprehensive insights, competitor analysis, and automated reporting to dominate local search.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base" onClick={() => setLocation("/tool")} data-testid="button-get-started">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-base" data-testid="button-view-demo">
              View Sample Report
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground" data-testid="text-trust-indicator">
            <Check className="h-4 w-4 text-primary" />
            <span>No credit card required</span>
          </div>
        </div>
      </div>
    </section>
  );
}
