import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Briefcase } from "lucide-react";
import { useScrollTo } from "@/hooks/useScrollTo";

export function HeroSection() {
  const scrollTo = useScrollTo();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-background pt-20"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(189 94% 43% / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(189 94% 43% / 0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-accent/20 blur-xl"
            style={{
              width: 80 + i * 40,
              height: 80 + i * 40,
              left: `${10 + i * 15}%`,
              top: `${15 + i * 12}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-accent mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
              </span>
              Software Engineering Company
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-foreground leading-tight text-balance mb-6"
          >
            Transforming Ideas into{" "}
            <span className="gradient-text">Powerful Software Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty"
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
              className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity group px-8"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("#contact")}
              className="border-border hover:border-accent hover:text-accent px-8"
            >
              <Users className="mr-2 h-4 w-4" />
              Hire Our Team
            </Button>
            <Button
              size="lg"
              variant="ghost"
              onClick={() => scrollTo("#client-hunters")}
              className="text-accent hover:bg-accent/10 px-8"
            >
              <Briefcase className="mr-2 h-4 w-4" />
              Become a Client Hunter
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom code decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none bg-gradient-to-t from-background to-transparent" aria-hidden="true" />
    </section>
  );
}
