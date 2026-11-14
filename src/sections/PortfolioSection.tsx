import { motion } from "motion/react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects, upcomingProjects } from "@/lib/data";
import { useScrollTo } from "@/hooks/useScrollTo";

export function PortfolioSection() {
  const scrollTo = useScrollTo();

  return (
    <section 
      id="portfolio" 
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
        className="absolute bottom-0 right-0 w-1/2 h-1/2 pointer-events-none opacity-10"
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
              Our Work
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
            Projects That Define Quality
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-base md:text-lg max-w-2xl mx-auto"
            style={{ color: "#E2E8F0" }}
          >
            A selection of realistic solutions we have engineered across industries and platforms.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="group flex flex-col rounded-2xl overflow-hidden border transition-all duration-300"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.02)",
                borderColor: "rgba(212, 175, 55, 0.08)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.3)";
                e.currentTarget.style.boxShadow = "0 8px 40px rgba(212, 175, 55, 0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.08)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div className="relative aspect-video overflow-hidden" style={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}>
                <img
                  src={project.image}
                  alt={`${project.name} project preview`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div 
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(11, 11, 11, 0.9) 0%, transparent 50%, transparent 100%)",
                  }}
                />
                <Badge 
                  className="absolute top-4 left-4"
                  style={{
                    backgroundColor: "#D4AF37",
                    color: "#0B0B0B",
                    fontWeight: 600,
                  }}
                >
                  {project.category}
                </Badge>
              </div>

              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-xl font-bold mb-2" style={{ color: "#FFFFFF" }}>
                  {project.name}
                </h3>
                <p className="text-sm text-pretty mb-4 flex-1" style={{ color: "#E2E8F0" }}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-md"
                      style={{
                        backgroundColor: "rgba(212, 175, 55, 0.08)",
                        color: "#D4AF37",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 transition-all duration-300"
                    style={{
                      borderColor: "rgba(212, 175, 55, 0.15)",
                      color: "#E2E8F0",
                      backgroundColor: "transparent",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#D4AF37";
                      e.currentTarget.style.color = "#D4AF37";
                      e.currentTarget.style.backgroundColor = "rgba(212, 175, 55, 0.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.15)";
                      e.currentTarget.style.color = "#E2E8F0";
                      e.currentTarget.style.backgroundColor = "transparent";
                    }}
                    asChild
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View live demo of ${project.name}`}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 transition-all duration-300"
                    style={{
                      borderColor: "rgba(212, 175, 55, 0.15)",
                      color: "#E2E8F0",
                      backgroundColor: "transparent",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#D4AF37";
                      e.currentTarget.style.color = "#D4AF37";
                      e.currentTarget.style.backgroundColor = "rgba(212, 175, 55, 0.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.15)";
                      e.currentTarget.style.color = "#E2E8F0";
                      e.currentTarget.style.backgroundColor = "transparent";
                    }}
                    asChild
                  >
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View source code of ${project.name}`}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Upcoming Projects */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <span
              className="inline-block text-sm font-medium uppercase tracking-wider mb-4"
              style={{ color: "#D4AF37" }}
            >
              What's Next
            </span>
            <h3
              className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3"
              style={{ color: "#FFFFFF" }}
            >
              Upcoming Projects
            </h3>
            <p className="text-base max-w-xl mx-auto" style={{ color: "#E2E8F0" }}>
              A look at what we are building right now.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {upcomingProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  whileHover={{ y: -6 }}
                  className="flex flex-col rounded-2xl p-6 border border-dashed transition-all duration-300"
                  style={{
                    backgroundColor: "rgba(212, 175, 55, 0.03)",
                    borderColor: "rgba(212, 175, 55, 0.3)",
                  }}
                >
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl"
                      style={{ backgroundColor: "rgba(212, 175, 55, 0.1)" }}
                    >
                      <Icon className="h-6 w-6" style={{ color: "#D4AF37" }} />
                    </div>
                    <span
                      className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
                      style={{ backgroundColor: "rgba(212, 175, 55, 0.12)", color: "#D4AF37" }}
                    >
                      <span className="relative flex h-2 w-2">
                        <span
                          className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                          style={{ backgroundColor: "#D4AF37" }}
                        />
                        <span
                          className="relative inline-flex h-2 w-2 rounded-full"
                          style={{ backgroundColor: "#D4AF37" }}
                        />
                      </span>
                      {project.status}
                    </span>
                  </div>

                  <span
                    className="text-xs font-medium uppercase tracking-wider mb-2"
                    style={{ color: "#D4AF37" }}
                  >
                    {project.category}
                  </span>
                  <h4 className="text-xl font-bold mb-2" style={{ color: "#FFFFFF" }}>
                    {project.name}
                  </h4>
                  <p className="text-sm text-pretty mb-4 flex-1" style={{ color: "#E2E8F0" }}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium rounded-md"
                        style={{ backgroundColor: "rgba(212, 175, 55, 0.08)", color: "#D4AF37" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-12 text-center"
          >
            <Button
              size="lg"
              className="font-semibold"
              style={{ backgroundColor: "#D4AF37", color: "#0B0B0B" }}
              onClick={() => scrollTo("#contact")}
            >
              Have a project in mind? Let's talk
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}