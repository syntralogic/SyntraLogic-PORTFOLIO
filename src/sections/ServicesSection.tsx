import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/data";
import { ChevronDown } from "lucide-react";

export function ServicesSection() {
  const [expanded, setExpanded] = useState<string | null>("web");

  return (
    <SectionWrapper id="services" background="default">
      <SectionHeading
        eyebrow="What We Build"
        title="End-to-End Software Development Services"
        description="From concept to deployment, we deliver full-stack solutions tailored to your business needs."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {services.map((service, index) => {
          const isOpen = expanded === service.id;
          const Icon = service.icon;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className={`rounded-2xl border transition-all duration-300 ${
                isOpen
                  ? "border-accent bg-gradient-card shadow-card"
                  : "border-border bg-card/40 hover:border-accent/50"
              }`}
            >
              <button
                onClick={() => setExpanded(isOpen ? null : service.id)}
                className="w-full flex items-center justify-between p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-2xl"
                aria-expanded={isOpen}
                aria-controls={`service-${service.id}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${isOpen ? "bg-accent text-primary-foreground" : "bg-muted text-accent"}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                </div>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`service-${service.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="pt-2 border-t border-border">
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                          {service.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
