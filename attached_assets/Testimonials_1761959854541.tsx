import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import testimonial1 from "@assets/generated_images/Female_SEO_professional_headshot_247774fb.png";
import testimonial2 from "@assets/generated_images/Male_marketing_professional_headshot_39870f0b.png";
import testimonial3 from "@assets/generated_images/Female_agency_founder_headshot_e1e3960e.png";
import testimonial4 from "@assets/generated_images/Male_SEO_specialist_headshot_d13ab2c8.png";
import testimonial5 from "@assets/generated_images/Female_digital_strategist_headshot_3a1132f1.png";
import testimonial6 from "@assets/generated_images/Male_business_owner_headshot_d6950007.png";

const testimonials = [
  {
    quote: "RankCascade's rankings reports and roll-up reports have been huge time-savers for our team. We can see at a glance which of our clients are ranking well and which ones need more attention.",
    author: "Sarah Johnson",
    role: "SEO Manager, Digital Growth Agency",
    image: testimonial1,
  },
  {
    quote: "RankCascade is one of the best internet marketing tools out there. We have been using the Local Rank Tracker for about a year now. It is fast, accurate, and produces excellent reports.",
    author: "Michael Chen",
    role: "Director of Marketing, TechStart Inc",
    image: testimonial2,
  },
  {
    quote: "Local Rank Tracker was instrumental in showing my clients how their local listings were performing. By having strong tools that are easy to use, we have been able to increase our productivity substantially.",
    author: "Jennifer Martinez",
    role: "Founder, Catalyst Digital",
    image: testimonial3,
  },
  {
    quote: "Reports are not always easy for clients to follow or understand. RankCascade's Local Rank Tracker has made the mundane and difficult job of reporting to clients so much easier and effortless.",
    author: "David Thompson",
    role: "SEO Specialist, Organic Solutions",
    image: testimonial4,
  },
  {
    quote: "Besides the fact that it's the best tool on the market for tracking local search terms, I also like the fact that it gives our agency the ability to be totally transparent with our clients.",
    author: "Emily Rodriguez",
    role: "Digital Strategy Lead, Bright Future",
    image: testimonial5,
  },
  {
    quote: "The Local Rank Tracker tool is the most concise I've found and it covers all search engines, maps and mobile. It makes explaining ranking and reporting weekly a breeze.",
    author: "Robert Anderson",
    role: "Owner, Local Business Solutions",
    image: testimonial6,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20" id="testimonials">
      <div className="container pl-8 md:pl-12 lg:pl-16">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold" data-testid="text-testimonials-title">
            Don't just take our word for it...
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-card-border" data-testid={`card-testimonial-${index}`}>
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1" data-testid={`stars-${index}`}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed" data-testid={`text-quote-${index}`}>
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                    data-testid={`img-avatar-${index}`}
                  />
                  <div>
                    <p className="font-semibold text-sm" data-testid={`text-author-${index}`}>
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground" data-testid={`text-role-${index}`}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}