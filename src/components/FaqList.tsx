import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <Accordion type="single" collapsible className="mt-12 border-t border-border">
      {items.map((item, i) => (
        <AccordionItem key={item.q} value={`faq-${i}`} className="border-b border-border">
          <AccordionTrigger className="py-6 text-left font-display text-base font-bold uppercase tracking-tight text-foreground hover:text-gold hover:no-underline md:text-lg">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground md:text-base">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
