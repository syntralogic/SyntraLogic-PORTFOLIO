import { motion } from "motion/react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { reasons } from "@/lib/data";

export function WhyChooseUsSection() {
  return (
    <SectionWrapper id="why-us" background="gradient">
      <SectionHeading
        eyebrow="Why Choose Us"
        title="Built for Scale, Security, and Speed"
        description="We bring engineering discipline to every project, ensuring products that perform today and grow tomorrow."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          return (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="group p-6 rounded-2xl bg-card/40 border border-border backdrop-blur-sm transition-shadow hover:shadow-hover hover:border-accent/30"
            >
              <div className="p-3 rounded-xl bg-muted w-fit mb-4 group-hover:bg-accent group-hover:text-primary-foreground transition-colors">
                <Icon className="h-6 w-6 text-accent group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground text-pretty">
                {reason.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
