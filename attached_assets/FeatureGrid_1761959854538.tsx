import { Camera, TrendingUp, FolderTree, MapPin, Layout, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Camera,
    title: "SERP Snapshots",
    description: "Every SERP is automatically snapped and saved so you can show complete confidence in your data.",
  },
  {
    icon: TrendingUp,
    title: "Search Volume Sorting",
    description: "Sort keywords by search volume to see exactly where the biggest opportunities lie.",
  },
  {
    icon: FolderTree,
    title: "Keyword Grouping",
    description: "Group keywords around products, services, and themes to see which need attention.",
  },
  {
    icon: MapPin,
    title: "Location Simulation",
    description: "Simulate a search from anywhere. Perfect for service businesses that cover multiple areas.",
  },
  {
    icon: Layout,
    title: "Custom Dashboards",
    description: "Customize your own dynamic data dashboards that clients can access at any time via URL.",
  },
  {
    icon: Settings,
    title: "Search Engine Flexibility",
    description: "Not interested in Bing? No problem. Simply remove it, or any other search engine, from your reports.",
  },
];

export default function FeatureGrid() {
  return (
    <section className="py-20 bg-muted/30" id="features">
      <div className="container pl-8 md:pl-12 lg:pl-16">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold" data-testid="text-features-title">
            Local rank tracking that ticks all the right boxes
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-card-border hover-elevate" data-testid={`card-feature-${index}`}>
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center" data-testid={`icon-feature-${index}`}>
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold" data-testid={`text-feature-title-${index}`}>
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid={`text-feature-desc-${index}`}>
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}