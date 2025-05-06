import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs: FaqItem[];
  className?: string;
}

const FaqAccordion = ({ faqs, className = "" }: FaqAccordionProps) => {
  return (
    <Accordion type="single" collapsible className={`w-full ${className}`}>
      {faqs.map((faq, index) => (
        <AccordionItem 
          key={index} 
          value={`item-${index}`}
          className="border border-mystic-gold/20 rounded-lg mb-3 overflow-hidden"
        >
          <AccordionTrigger className="px-4 py-3 hover:bg-mystic-gold/5 hover:no-underline text-left font-medium">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="px-4 py-3 text-charcoal/80">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqAccordion;
