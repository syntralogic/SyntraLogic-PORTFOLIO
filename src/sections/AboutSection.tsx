import { motion } from "motion/react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { stats, values } from "@/lib/data";

export function AboutSection() {
  return (
    <section 
      id="about" 
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#0B0B0B" }}
    >
      {/* Gold grid overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(212, 175, 55, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212, 175, 55, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* Gold glow accent */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-1/2 pointer-events-none opacity-10"
        style={{
          background: "radial-gradient(ellipse, rgba(212, 175, 55, 0.15) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Custom Section Heading - No blue */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span 
              className="inline-block text-sm font-medium uppercase tracking-wider mb-4"
              style={{ color: "#D4AF37" }}
            >
              About Us
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4"
            style={{ color: "#FFFFFF" }}
          >
            Engineering Excellence, Delivered Globally
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-base md:text-lg max-w-2xl mx-auto"
            style={{ color: "#E2E8F0" }}
          >
            We are a team of software engineers passionate about turning complex business challenges into elegant, high-performance digital products.
          </motion.p>
        </div>

        {/* Leadership Section - Fixed CEO avatar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium uppercase tracking-wider mb-6" style={{ color: "#D4AF37" }}>
            Leadership
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-6">
            {/* CEO 1 - Fixed avatar colors */}
            <div className="flex items-center gap-4 group cursor-default">
              <div className="relative">
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, rgba(212, 175, 55, 0.25), rgba(212, 175, 55, 0.05))",
                    color: "#D4AF37",
                    border: "2px solid rgba(212, 175, 55, 0.3)",
                    boxShadow: "0 0 30px rgba(212, 175, 55, 0.1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.6)";
                    e.currentTarget.style.boxShadow = "0 0 50px rgba(212, 175, 55, 0.2)";
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.3)";
                    e.currentTarget.style.boxShadow = "0 0 30px rgba(212, 175, 55, 0.1)";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  AH
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2" style={{ borderColor: "#0B0B0B" }} />
              </div>
              <div className="text-left">
                <h3 className="text-base font-semibold" style={{ color: "#FFFFFF" }}>Ali Hassan</h3>
                <p className="text-sm" style={{ color: "#E2E8F0" }}>Co-Founder &amp; CEO</p>
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
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4" style={{ color: "#D4AF37" }}>
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
                  className="p-5 rounded-xl border transition-all duration-300 group"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.02)",
                    borderColor: "rgba(212, 175, 55, 0.1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.3)";
                    e.currentTarget.style.backgroundColor = "rgba(212, 175, 55, 0.05)";
                    e.currentTarget.style.boxShadow = "0 0 40px rgba(212, 175, 55, 0.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.1)";
                    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.02)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div 
                      className="mt-1 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0 transition-colors"
                      style={{
                        backgroundColor: "rgba(212, 175, 55, 0.1)",
                        color: "#D4AF37",
                      }}
                    >
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-1" style={{ color: "#FFFFFF" }}>
                        {item.title}
                      </h4>
                      <p className="text-sm leading-relaxed" style={{ color: "#E2E8F0" }}>
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
            <div 
              className="h-full p-6 rounded-xl border transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, rgba(212, 175, 55, 0.05), rgba(212, 175, 55, 0.01))",
                borderColor: "rgba(212, 175, 55, 0.1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.2)";
                e.currentTarget.style.boxShadow = "0 0 40px rgba(212, 175, 55, 0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <h3 className="text-sm font-medium uppercase tracking-wider mb-4" style={{ color: "#D4AF37" }}>
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
                    className="flex items-start gap-3 text-sm transition-colors duration-300"
                    style={{ color: "#E2E8F0" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#FFFFFF";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#E2E8F0";
                    }}
                  >
                    <span 
                      className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: "#D4AF37" }}
                    />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Stats - Fixed colors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="relative overflow-hidden rounded-2xl border p-8"
          style={{
            background: "linear-gradient(135deg, rgba(212, 175, 55, 0.05), rgba(212, 175, 55, 0.01))",
            borderColor: "rgba(212, 175, 55, 0.1)",
          }}
        >
          <div 
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />
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
                <div 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1"
                  style={{ color: "#D4AF37" }}
                >
                  {stat.value}{stat.suffix}
                </div>
                <p className="text-sm" style={{ color: "#E2E8F0" }}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}