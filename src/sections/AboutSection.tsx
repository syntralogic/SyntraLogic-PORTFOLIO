import { motion } from "motion/react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { stats, values } from "@/lib/data";

export function AboutSection() {
  return (
    <SectionWrapper id="about" background="muted">
      <SectionHeading
        eyebrow="About Us"
        title="Engineering Excellence, Delivered Globally"
        description="We are a team of software engineers passionate about turning complex business challenges into elegant, high-performance digital products."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          {values.map((item, index) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-card/50 border border-border backdrop-blur-sm"
            >
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-pretty">{item.description}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-3xl blur-2xl" aria-hidden="true" />
          <div className="relative p-8 rounded-3xl bg-gradient-card border border-border">
            <h3 className="text-2xl font-bold mb-4">Why SyntraLogic?</h3>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-accent shrink-0" />
                <span>Focused exclusively on software engineering and product development.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-accent shrink-0" />
                <span>Proven track record across SaaS, enterprise systems, and mobile apps.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-accent shrink-0" />
                <span>End-to-end delivery from architecture to deployment and support.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-accent shrink-0" />
                <span>Transparent process with professional communication at every stage.</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 p-8 rounded-3xl bg-card/40 border border-border backdrop-blur-sm">
        {stats.map((stat) => (
          <AnimatedCounter
            key={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
