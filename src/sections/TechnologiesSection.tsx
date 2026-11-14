import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TechIcon } from "@/components/ui/TechIcon";
import { technologyCategories } from "@/lib/data";
import { ChevronDown } from "lucide-react";

export function TechnologiesSection() {
  const [activeCategory, setActiveCategory] = useState(technologyCategories[0].title);
  const current = technologyCategories.find((c) => c.title === activeCategory) || technologyCategories[0];
  const CategoryIcon = current.icon;

  return (
    <section 
      id="technologies" 
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
        className="absolute top-1/2 left-0 w-1/2 h-1/2 pointer-events-none opacity-10"
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
              Tech Stack
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
            Modern Technologies We Master
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-base md:text-lg max-w-2xl mx-auto"
            style={{ color: "var(--sl-muted)" }}
          >
            We use proven, production-ready tools and frameworks to build secure, scalable software.
          </motion.p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {technologyCategories.map((category) => {
            const Icon = category.icon;
            const isActive = category.title === activeCategory;
            return (
              <button
                key={category.title}
                onClick={() => setActiveCategory(category.title)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--sl-gold)] ${
                  isActive
                    ? "shadow-lg"
                    : "border text-[color:var(--sl-muted)] hover:text-[color:var(--sl-gold-text)]"
                }`}
                style={{
                  backgroundColor: isActive ? "var(--sl-gold)" : "rgb(var(--sl-tint) / 0.02)",
                  color: isActive ? "var(--sl-on-gold)" : "var(--sl-muted)",
                  borderColor: isActive ? "var(--sl-gold)" : "rgb(var(--sl-gold-rgb) / 0.1)",
                  boxShadow: isActive ? "0 4px 20px rgb(var(--sl-gold-rgb) / 0.2)" : "none",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = "rgb(var(--sl-gold-rgb) / 0.3)";
                    e.currentTarget.style.color = "var(--sl-gold-text)";
                    e.currentTarget.style.backgroundColor = "rgb(var(--sl-gold-rgb) / 0.03)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = "rgb(var(--sl-gold-rgb) / 0.1)";
                    e.currentTarget.style.color = "var(--sl-muted)";
                    e.currentTarget.style.backgroundColor = "rgb(var(--sl-tint) / 0.02)";
                  }
                }}
                aria-pressed={isActive}
              >
                <Icon className="h-4 w-4" />
                {category.title}
              </button>
            );
          })}
        </div>

        {/* Tech grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="p-8 rounded-3xl border backdrop-blur-sm transition-all duration-300"
            style={{
              backgroundColor: "rgb(var(--sl-tint) / 0.02)",
              borderColor: "rgb(var(--sl-gold-rgb) / 0.08)",
            }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div 
                className="p-3 rounded-xl"
                style={{
                  backgroundColor: "rgb(var(--sl-gold-rgb) / 0.08)",
                }}
              >
                <CategoryIcon className="h-6 w-6" style={{ color: "var(--sl-gold-text)" }} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold" style={{ color: "var(--sl-fg)" }}>
                {current.title}
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {current.items.map((tech) => (
                <motion.div
                  key={tech}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300"
                  style={{
                    backgroundColor: "rgb(var(--sl-tint) / 0.02)",
                    borderColor: "rgb(var(--sl-gold-rgb) / 0.06)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgb(var(--sl-gold-rgb) / 0.2)";
                    e.currentTarget.style.backgroundColor = "rgb(var(--sl-gold-rgb) / 0.03)";
                    e.currentTarget.style.boxShadow = "0 4px 20px rgb(var(--sl-gold-rgb) / 0.04)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgb(var(--sl-gold-rgb) / 0.06)";
                    e.currentTarget.style.backgroundColor = "rgb(var(--sl-tint) / 0.02)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <TechIcon name={tech} size={36} />
                  <span 
                    className="text-xs md:text-sm font-medium text-center line-clamp-2"
                    style={{ color: "var(--sl-muted)" }}
                  >
                    {tech}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}