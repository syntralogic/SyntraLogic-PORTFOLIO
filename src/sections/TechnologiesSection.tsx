import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechIcon } from "@/components/ui/TechIcon";
import { technologyCategories } from "@/lib/data";
import { ChevronDown } from "lucide-react";

export function TechnologiesSection() {
  const [activeCategory, setActiveCategory] = useState(technologyCategories[0].title);
  const current = technologyCategories.find((c) => c.title === activeCategory) || technologyCategories[0];
  const CategoryIcon = current.icon;

  return (
    <SectionWrapper id="technologies" background="default">
      <SectionHeading
        eyebrow="Tech Stack"
        title="Modern Technologies We Master"
        description="We use proven, production-ready tools and frameworks to build secure, scalable software."
      />

      {/* Category tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {technologyCategories.map((category) => {
          const Icon = category.icon;
          const isActive = category.title === activeCategory;
          return (
            <button
              key={category.title}
              onClick={() => setActiveCategory(category.title)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                isActive
                  ? "bg-accent text-primary-foreground shadow-hover"
                  : "bg-card border border-border text-muted-foreground hover:border-accent/50 hover:text-foreground"
              }`}
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
          className="p-8 rounded-3xl bg-card/40 border border-border backdrop-blur-sm"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-accent/10 text-accent">
              <CategoryIcon className="h-6 w-6" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground">
              {current.title}
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {current.items.map((tech) => (
              <motion.div
                key={tech}
                whileHover={{ y: -4, scale: 1.02 }}
                className="flex flex-col items-center gap-3 p-4 rounded-xl bg-muted/50 border border-border hover:border-accent/30 transition-colors"
              >
                <TechIcon name={tech} size={36} />
                <span className="text-xs md:text-sm font-medium text-center text-muted-foreground line-clamp-2">
                  {tech}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  );
}
