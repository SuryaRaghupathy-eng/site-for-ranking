const benefits = [
  {
    title: "Your source of truth for local rankings",
    description: "Knowing exactly where your local business ranks online doesn't have to be complex. Cover every angle with accurate rankings for local search, maps, organic, and mobile results.",
    reverse: false,
  },
  {
    title: "Make smarter decisions, faster",
    description: "Spot and seize opportunities to claim more local search traffic. Get the data you need to prioritize the keywords that matter and fuel the right optimizations.",
    reverse: true,
  },
  {
    title: "Get the competitive edge",
    description: "Local search is competitive, so you need to know your rivals inside and out. Check their ranking performance to see where you can overtake and pull ahead.",
    reverse: false,
  },
  {
    title: "Clear, comprehensive, and convenient reporting",
    description: "Say goodbye to the end-of-month scramble, with automated reports that land directly in your inbox at a time that suits you.",
    reverse: true,
  },
];

export default function BenefitSection() {
  return (
    <section className="py-20" id="benefits">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 space-y-24">
        {benefits.map((benefit, index) => (
          <div 
            key={index} 
            className="relative rounded-lg overflow-hidden shadow-lg border bg-background/50 backdrop-blur-sm p-8 md:p-12 mx-auto max-w-5xl"
            data-testid={`section-benefit-${index}`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-50 dark:from-emerald-950/20 dark:via-cyan-950/20 dark:to-blue-950/20"></div>
            <div className="absolute inset-0 p-6 md:p-12">
              <div className="h-full flex flex-col gap-3 blur-xl opacity-30">
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 bg-foreground/20 rounded"></div>
                  <div className="h-4 w-40 bg-foreground/20 rounded"></div>
                </div>
                <div className="flex-1 bg-card/80 border border-foreground/10 rounded-lg p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="h-3 w-24 bg-foreground/20 rounded"></div>
                    <div className="h-6 w-20 bg-primary/30 rounded-full"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-foreground/10 rounded"></div>
                    <div className="h-2 w-4/5 bg-foreground/10 rounded"></div>
                    <div className="h-2 w-3/5 bg-foreground/10 rounded"></div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <div className="h-16 flex-1 bg-primary/20 rounded"></div>
                    <div className="h-16 flex-1 bg-primary/30 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight" data-testid={`text-benefit-title-${index}`}>
                {benefit.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed" data-testid={`text-benefit-desc-${index}`}>
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
