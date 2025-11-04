import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is a Local Rank Tracker?",
    answer: "It's exactly what it sounds like! A rank tracker lets you monitor the rankings of selected keywords in search engine results, based on location, across a period of time. This helps you understand your visibility in local search and make data-driven decisions to improve your rankings.",
  },
  {
    question: "How do I track local rankings?",
    answer: "Tracking local rankings is as simple as setting up a Local Rank Tracker report in RankCascade. Local Rank Tracker allows you to monitor the rankings of keywords based on up-to-date rankings directly from Google Search and Google Maps. You can track rankings for specific locations to see how you perform in different geographic areas.",
  },
  {
    question: "What is local business SEO and why is it important?",
    answer: "Local search engine optimization (SEO) is the process of optimizing your local listing and website so they can rank more effectively in search results with a local intent. It's important because local SEO helps businesses appear in searches when potential customers are looking for products or services in their area, driving more qualified traffic and foot traffic to your business.",
  },
  {
    question: "Can I track my competitors' rankings?",
    answer: "Yes! RankCascade allows you to monitor competitor rankings alongside your own. This competitive intelligence helps you identify opportunities, understand market positioning, and develop strategies to outrank your competition in local search results.",
  },
];

export default function FAQ() {
  return (
    <section className="py-20 bg-muted/30" id="faq">
      <div className="container pl-8 md:pl-12 lg:pl-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold" data-testid="text-faq-title">
              Frequently asked questions
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4" data-testid="accordion-faq">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background border rounded-lg px-6"
                data-testid={`accordion-item-${index}`}
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline" data-testid={`accordion-trigger-${index}`}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed" data-testid={`accordion-content-${index}`}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}