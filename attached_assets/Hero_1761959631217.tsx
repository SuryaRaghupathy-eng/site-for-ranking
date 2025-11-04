import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import dashboardImage from "@assets/generated_images/Rank_tracking_dashboard_interface_f128de12.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="container pl-8 md:pl-12 lg:pl-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight" data-testid="text-hero-title">
                Level up your local rank tracking
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl" data-testid="text-hero-subtitle">
                Track your local and organic rankings with precision. Get comprehensive insights, competitor analysis, and automated reporting to dominate local search.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base" data-testid="button-get-started">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-base" data-testid="button-view-demo">
                View Sample Report
              </Button>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground" data-testid="text-trust-indicator">
              <Check className="h-4 w-4 text-primary" />
              <span>No credit card required</span>
            </div>
          </div>
          
          <div className="relative" data-testid="container-hero-image">
            <div className="relative rounded-lg overflow-hidden shadow-2xl border">
              <img 
                src={dashboardImage} 
                alt="RankCascade Dashboard Interface" 
                className="w-full h-auto"
                data-testid="img-dashboard"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}