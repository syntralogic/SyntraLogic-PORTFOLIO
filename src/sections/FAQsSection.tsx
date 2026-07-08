import { motion } from "motion/react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/data";

export function FAQsSection() {
  return (
    <SectionWrapper id="faqs" background="default">
      <SectionHeading
        eyebrow="FAQs"
        title="Frequently Asked Questions"
        description="Everything you need to know about working with SyntraLogic."
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mx-auto"
      >
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-xl border border-border bg-card/40 px-6 data-[state=open]:border-accent/30 transition-colors"
            >
              <AccordionTrigger className="text-left text-base md:text-lg font-medium hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-pretty pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </SectionWrapper>
  );
}
