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

      {/* Leadership Section - Improved */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <p className="text-sm font-medium text-accent uppercase tracking-wider mb-6">
          Leadership
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-6">
          {/* CEO 1 */}
          <div className="flex items-center gap-4 group cursor-default">
            <div className="relative">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center text-xl font-bold text-foreground ring-2 ring-accent/20 group-hover:ring-accent/40 transition-all duration-300">
                AH
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-background" />
            </div>
            <div className="text-left">
              <h3 className="text-base font-semibold text-foreground">Ali Hassan</h3>
              <p className="text-sm text-muted-foreground">Co-Founder &amp; CEO</p>
            </div>
          </div>

          <div className="hidden md:block w-px h-10 bg-border" />

          {/* CEO 2 */}
          <div className="flex items-center gap-4 group cursor-default">
            <div className="relative">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center text-xl font-bold text-foreground ring-2 ring-accent/20 group-hover:ring-accent/40 transition-all duration-300">
                AA
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-background" />
            </div>
            <div className="text-left">
              <h3 className="text-base font-semibold text-foreground">Arooj Ashfaq</h3>
              <p className="text-sm text-muted-foreground">Co-Founder &amp; CEO</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content - Improved Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-20">
        {/* Values - Takes 3 columns on large screens */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="lg:col-span-3 space-y-4"
        >
          <h3 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
            Our Values
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * (index + 1) }}
                className="p-5 rounded-xl bg-card/50 border border-border hover:border-accent/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent text-sm font-bold flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why SyntraLogic - Takes 2 columns on large screens */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="lg:col-span-2"
        >
          <div className="h-full p-6 rounded-xl bg-gradient-to-br from-accent/5 to-primary/5 border border-border/50 hover:border-accent/20 transition-all duration-300">
            <h3 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
              Why SyntraLogic?
            </h3>
            <ul className="space-y-3">
              {[
                "Focused exclusively on software engineering and product development.",
                "Proven track record across SaaS, enterprise systems, and mobile apps.",
                "End-to-end delivery from architecture to deployment and support.",
                "Transparent process with professional communication at every stage.",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * (index + 3) }}
                  className="flex items-start gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Stats - Improved */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-card/50 to-card/30 border border-border/50 p-8"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * (index + 1) }}
              className="text-center"
            >
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}