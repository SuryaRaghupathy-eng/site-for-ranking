import analyticsImage from "@assets/generated_images/Analytics_graphs_ranking_improvements_3ae476b4.png";
import competitorImage from "@assets/generated_images/Competitor_comparison_analysis_table_aa88628e.png";
import reportImage from "@assets/generated_images/White-label_SEO_report_preview_ecdf7811.png";
import dashboardImage from "@assets/generated_images/Rank_tracking_dashboard_interface_f128de12.png";

const benefits = [
  {
    title: "Your source of truth for local rankings",
    description: "Knowing exactly where your local business ranks online doesn't have to be complex. Cover every angle with accurate rankings for local search, maps, organic, and mobile results.",
    image: dashboardImage,
    imageAlt: "Comprehensive ranking dashboard",
    reverse: false,
  },
  {
    title: "Make smarter decisions, faster",
    description: "Spot and seize opportunities to claim more local search traffic. Get the data you need to prioritize the keywords that matter and fuel the right optimizations.",
    image: analyticsImage,
    imageAlt: "Analytics and decision making",
    reverse: true,
  },
  {
    title: "Get the competitive edge",
    description: "Local search is competitive, so you need to know your rivals inside and out. Check their ranking performance to see where you can overtake and pull ahead.",
    image: competitorImage,
    imageAlt: "Competitive analysis",
    reverse: false,
  },
  {
    title: "Clear, comprehensive, and convenient reporting",
    description: "Say goodbye to the end-of-month scramble, with automated reports that land directly in your inbox at a time that suits you.",
    image: reportImage,
    imageAlt: "Automated reporting",
    reverse: true,
  },
];

export default function BenefitSection() {
  return (
    <section className="py-20" id="benefits">
      <div className="container pl-8 md:pl-12 lg:pl-16 space-y-24">
        {benefits.map((benefit, index) => (
          <div 
            key={index} 
            className={`grid lg:grid-cols-2 gap-12 items-center ${benefit.reverse ? 'lg:grid-flow-dense' : ''}`}
            data-testid={`section-benefit-${index}`}
          >
            <div className={`space-y-6 ${benefit.reverse ? 'lg:col-start-2' : ''}`}>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight" data-testid={`text-benefit-title-${index}`}>
                {benefit.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed" data-testid={`text-benefit-desc-${index}`}>
                {benefit.description}
              </p>
            </div>
            
            <div className={benefit.reverse ? 'lg:col-start-1 lg:row-start-1' : ''}>
              <div className="relative rounded-lg overflow-hidden shadow-lg border">
                <img 
                  src={benefit.image} 
                  alt={benefit.imageAlt} 
                  className="w-full h-auto"
                  data-testid={`img-benefit-${index}`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}