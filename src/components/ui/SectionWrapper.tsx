import { motion } from "motion/react";
import type { ReactNode } from "react";

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
  background?: "default" | "gradient" | "muted";
}

export function SectionWrapper({
  id,
  children,
  className = "",
  background = "default",
}: SectionWrapperProps) {
  const backgroundClass = {
    default: "bg-background",
    gradient: "bg-gradient-background",
    muted: "bg-secondary/30",
  }[background];

  return (
    <section
      id={id}
      className={`relative py-20 md:py-28 overflow-hidden ${backgroundClass} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      </motion.div>
    </section>
  );
}
