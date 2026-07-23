import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Briefcase } from "lucide-react";
import { useScrollTo } from "@/hooks/useScrollTo";

export function HeroSection() {
  const scrollTo = useScrollTo();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{ backgroundColor: "#0B0B0B" }}
    >
      {/* Grid background - Gold tinted */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212, 175, 55, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.08) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* Floating particles - Gold glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-xl"
            style={{
              width: 80 + i * 40,
              height: 80 + i * 40,
              left: `${10 + i * 15}%`,
              top: `${15 + i * 12}%`,
              background: `radial-gradient(circle, rgba(212, 175, 55, ${0.15 - i * 0.015}), transparent 70%)`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Subtle gold vignette glow */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: "radial-gradient(ellipse at center, rgba(212, 175, 55, 0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{
                backgroundColor: "rgba(212, 175, 55, 0.1)",
                color: "#D4AF37",
                border: "1px solid rgba(212, 175, 55, 0.2)",
              }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span 
                  className="absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ 
                    backgroundColor: "#D4AF37",
                    animation: "ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite"
                  }}
                />
                <span 
                  className="relative inline-flex rounded-full h-2.5 w-2.5"
                  style={{ backgroundColor: "#D4AF37" }}
                />
              </span>
              Building Digital Excellence
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-3xl md:text-5xl lg:text-7xl font-extrabold leading-tight text-balance mb-6"
          >
            <span style={{ color: "#FFFFFF" }}>Transforming Ideas into</span>
            <br />
            <span style={{ color: "#D4AF37" }}>Powerful Software Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-10 text-pretty"
            style={{ color: "#E2E8F0" }}
          >
            SyntraLogic is a software development company delivering scalable, secure, and modern digital solutions for businesses worldwide. We build software, not just designs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              onClick={() => scrollTo("#clients")}
              className="group px-8 transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
              style={{
                backgroundColor: "#D4AF37",
                color: "#0B0B0B",
                fontWeight: 600,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#C5A030";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#D4AF37";
              }}
            >
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("#contact")}
              className="px-8 transition-all duration-300"
              style={{
                borderColor: "rgba(212, 175, 55, 0.4)",
                color: "#E2E8F0",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#D4AF37";
                e.currentTarget.style.color = "#D4AF37";
                e.currentTarget.style.backgroundColor = "rgba(212, 175, 55, 0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.4)";
                e.currentTarget.style.color = "#E2E8F0";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <Users className="mr-2 h-4 w-4" />
              Hire Our Team
            </Button>
            <Button
              size="lg"
              variant="ghost"
              onClick={() => scrollTo("#client-hunters")}
              className="px-8 transition-all duration-300"
              style={{
                color: "#D4AF37",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(212, 175, 55, 0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <Briefcase className="mr-2 h-4 w-4" />
              Become a Client Hunter
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #0B0B0B, transparent)"
        }}
        aria-hidden="true"
      />
    </section>
  );
}