import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, BarChart3 } from "lucide-react";

export default function AgencySection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container pl-8 md:pl-12 lg:pl-16">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-card-border hover-elevate" data-testid="card-agency">
            <CardContent className="p-8 space-y-6">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center" data-testid="icon-agency">
                <Sparkles className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold" data-testid="text-agency-title">
                Awesome for agencies
              </h3>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-agency-desc">
                Amaze your clients with white-label reports, complete with your agency logo and brand colors. Build trust and showcase results with professional, branded reporting.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-card-border hover-elevate" data-testid="card-scale">
            <CardContent className="p-8 space-y-6">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center" data-testid="icon-scale">
                <BarChart3 className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold" data-testid="text-scale-title">
                Spectacular at scale
              </h3>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-scale-desc">
                Managing multiple locations or clients? Get the ultimate bird's-eye view of local search performance with roll-up reports that aggregate data across all your properties.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}