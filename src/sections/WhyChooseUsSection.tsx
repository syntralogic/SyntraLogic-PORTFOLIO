import { motion } from "motion/react";
import { reasons } from "@/lib/data";

export function WhyChooseUsSection() {
  return (
    <section 
      id="why-us" 
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

      {/* Gold glow accents */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 pointer-events-none opacity-10"
        style={{
          background: "radial-gradient(ellipse, rgba(212, 175, 55, 0.15) 0%, transparent 70%)",
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
              style={{ color: "#D4AF37" }}
            >
              Why Choose Us
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
            Built for Scale, Security, and Speed
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-base md:text-lg max-w-2xl mx-auto"
            style={{ color: "#E2E8F0" }}
          >
            We bring engineering discipline to every project, ensuring products that perform today and grow tomorrow.
          </motion.p>
        </div>

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
                className="group p-6 rounded-2xl border transition-all duration-300"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.02)",
                  borderColor: "rgba(212, 175, 55, 0.08)",
                  backdropFilter: "blur(4px)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.3)";
                  e.currentTarget.style.boxShadow = "0 8px 40px rgba(212, 175, 55, 0.06)";
                  e.currentTarget.style.backgroundColor = "rgba(212, 175, 55, 0.03)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.08)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.02)";
                }}
              >
                <div 
                  className="p-3 rounded-xl w-fit mb-4 transition-all duration-300"
                  style={{
                    backgroundColor: "rgba(212, 175, 55, 0.08)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#D4AF37";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(212, 175, 55, 0.08)";
                  }}
                >
                  <Icon 
                    className="h-6 w-6 transition-all duration-300"
                    style={{ color: "#D4AF37" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#0B0B0B";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#D4AF37";
                    }}
                  />
                </div>
                <h3 className="text-base font-semibold mb-2" style={{ color: "#FFFFFF" }}>
                  {reason.title}
                </h3>
                <p className="text-sm text-pretty" style={{ color: "#E2E8F0" }}>
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}