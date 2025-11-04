import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useLocation } from "wouter";

export default function CTASection() {
  const [, setLocation] = useLocation();

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold" data-testid="text-cta-title">
            Check your local ranking performance today!
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Check className="h-5 w-5 text-primary" />
              <span>Plans start from just $39 per month</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Check className="h-5 w-5 text-primary" />
              <span>Fast, accurate, and easy to use</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Check className="h-5 w-5 text-primary" />
              <span>Reports and audits do all the hard work for you</span>
            </div>
          </div>
          
          <Button size="lg" className="text-base" onClick={() => setLocation("/tool")} data-testid="button-cta-primary">
            Try for Free
          </Button>
        </div>
      </div>
    </section>
  );
}
