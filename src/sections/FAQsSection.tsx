import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/data";

export function FAQsSection() {
  return (
    <section 
      id="faqs" 
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#0B0B0B" }}
    >
      {/* Gold grid overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(212, 175, 55, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212, 175, 55, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* Gold glow accent */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 pointer-events-none opacity-10"
        style={{
          background: "radial-gradient(ellipse, rgba(212, 175, 55, 0.15) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Custom Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span 
              className="inline-block text-sm font-medium uppercase tracking-wider mb-4"
              style={{ color: "#D4AF37" }}
            >
              FAQs
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4"
            style={{ color: "#FFFFFF" }}
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-base md:text-lg max-w-2xl mx-auto"
            style={{ color: "#E2E8F0" }}
          >
            Everything you need to know about working with SyntraLogic.
          </motion.p>
        </div>

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
                className="rounded-xl border px-6 transition-all duration-300 data-[state=open]:shadow-lg"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.02)",
                  borderColor: "rgba(212, 175, 55, 0.08)",
                }}
                onMouseEnter={(e) => {
                  if (!e.currentTarget.getAttribute('data-state') || e.currentTarget.getAttribute('data-state') !== 'open') {
                    e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.2)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!e.currentTarget.getAttribute('data-state') || e.currentTarget.getAttribute('data-state') !== 'open') {
                    e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.08)";
                  }
                }}
              >
                <AccordionTrigger 
                  className="text-left text-base md:text-lg font-medium hover:no-underline py-5 group"
                  style={{ color: "#FFFFFF" }}
                >
                  <span className="group-hover:text-[#D4AF37] transition-colors duration-300">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent 
                  className="text-pretty pb-5"
                  style={{ color: "#E2E8F0" }}
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}