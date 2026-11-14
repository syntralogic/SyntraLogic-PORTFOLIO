import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/data";

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              Testimonials
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
            What Our Clients Say
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.figure
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="flex flex-col rounded-2xl p-6 border"
              style={{
                backgroundColor: "rgb(var(--sl-tint) / 0.02)",
                borderColor: "rgb(var(--sl-gold-rgb) / 0.12)",
              }}
            >
              <Quote className="h-8 w-8 mb-4" style={{ color: "var(--sl-gold-text)" }} aria-hidden="true" />
              <div className="flex gap-1 mb-4" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4" fill="var(--sl-gold)" style={{ color: "var(--sl-gold-text)" }} />
                ))}
              </div>
              <blockquote className="text-sm text-pretty flex-1 mb-6" style={{ color: "var(--sl-muted)" }}>
                {t.quote}
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full font-bold"
                  style={{ backgroundColor: "rgb(var(--sl-gold-rgb) / 0.12)", color: "var(--sl-gold-text)" }}
                  aria-hidden="true"
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold" style={{ color: "var(--sl-fg)" }}>
                    {t.name}
                  </div>
                  <div className="text-xs" style={{ color: "var(--sl-muted)" }}>
                    {t.role} · {t.project}
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
