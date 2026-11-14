import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { services } from "@/lib/data";
import { ChevronDown } from "lucide-react";

export function ServicesSection() {
  const [expanded, setExpanded] = useState<string | null>("web");

  return (
    <section 
      id="services" 
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "var(--sl-bg)" }}
    >
      {/* Gold grid overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgb(var(--sl-gold-rgb) / 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgb(var(--sl-gold-rgb) / 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* Gold glow accent */}
      <div 
        className="absolute top-0 left-0 w-1/2 h-1/2 pointer-events-none opacity-10"
        style={{
          background: "radial-gradient(ellipse, rgb(var(--sl-gold-rgb) / 0.15) 0%, transparent 70%)",
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
              style={{ color: "var(--sl-gold-text)" }}
            >
              What We Build
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4"
            style={{ color: "var(--sl-fg)" }}
          >
            End-to-End Software Development Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-base md:text-lg max-w-2xl mx-auto"
            style={{ color: "var(--sl-muted)" }}
          >
            From concept to deployment, we deliver full-stack solutions tailored to your business needs.
          </motion.p>
        </div>

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
                    ? "border-[color:var(--sl-gold)] shadow-lg"
                    : "border-[rgb(var(--sl-gold-rgb)/0.1)] hover:border-[rgb(var(--sl-gold-rgb)/0.3)]"
                }`}
                style={{
                  background: isOpen 
                    ? "linear-gradient(135deg, rgb(var(--sl-gold-rgb) / 0.08), rgb(var(--sl-gold-rgb) / 0.02))"
                    : "rgb(var(--sl-tint) / 0.02)",
                  boxShadow: isOpen ? "0 0 40px rgb(var(--sl-gold-rgb) / 0.05)" : "none",
                }}
              >
                <button
                  onClick={() => setExpanded(isOpen ? null : service.id)}
                  className="w-full flex items-center justify-between p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--sl-gold)] rounded-2xl"
                  aria-expanded={isOpen}
                  aria-controls={`service-${service.id}`}
                >
                  <div className="flex items-center gap-4">
                    <div 
                      className={`p-3 rounded-xl transition-all duration-300 ${
                        isOpen 
                          ? "bg-[color:var(--sl-gold)] text-[color:var(--sl-on-gold)]" 
                          : "bg-[rgb(var(--sl-gold-rgb)/0.1)] text-[color:var(--sl-gold-text)]"
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold" style={{ color: "var(--sl-fg)" }}>
                      {service.title}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    style={{ color: isOpen ? "var(--sl-gold-text)" : "var(--sl-muted)" }}
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
                        <div className="pt-2 border-t" style={{ borderColor: "rgb(var(--sl-gold-rgb) / 0.1)" }}>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                            {service.items.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2 text-sm"
                                style={{ color: "var(--sl-muted)" }}
                              >
                                <span 
                                  className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0"
                                  style={{ backgroundColor: "var(--sl-gold)" }}
                                />
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
      </div>
    </section>
  );
}