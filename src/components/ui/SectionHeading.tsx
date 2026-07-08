import { motion } from "motion/react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`max-w-3xl mb-12 md:mb-16 ${alignClass}`}
    >
      {eyebrow && (
        <span className="inline-block mb-3 text-sm font-semibold tracking-wider uppercase text-accent">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-muted-foreground text-pretty">
          {description}
        </p>
      )}
    </motion.div>
  );
}
