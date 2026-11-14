import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { projects, upcomingProjects, type PortfolioProject } from "@/lib/data";
import { useScrollTo } from "@/hooks/useScrollTo";

export function PortfolioSection() {
  const scrollTo = useScrollTo();
  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState<PortfolioProject | null>(null);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    [],
  );
  const filteredProjects = useMemo(
    () =>
      activeCategory === "All"
        ? projects
        : projects.filter((p) => p.category === activeCategory),
    [activeCategory],
  );

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

        {/* Category filter */}
        <div
          className="flex flex-wrap justify-center gap-2 mb-12"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category)}
                className="px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                style={{
                  backgroundColor: isActive ? "#D4AF37" : "transparent",
                  color: isActive ? "#0B0B0B" : "#E2E8F0",
                  borderColor: isActive ? "#D4AF37" : "rgba(212, 175, 55, 0.25)",
                }}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: Math.min(index, 5) * 0.06, ease: "easeOut" }}
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
              <div
                className="relative aspect-video overflow-hidden cursor-pointer"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}
                onClick={() => setSelected(project)}
              >
                <img
                  src={project.image}
                  alt={`${project.name} project preview`}
                  loading="lazy"
                  decoding="async"
                  width={1000}
                  height={560}
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

                <button
                  type="button"
                  onClick={() => setSelected(project)}
                  className="mb-3 inline-flex items-center gap-1 text-sm font-semibold self-start transition-colors focus-visible:outline-none focus-visible:underline"
                  style={{ color: "#D4AF37" }}
                  aria-label={`View details of ${project.name}`}
                >
                  View Details
                  <ArrowRight className="h-4 w-4" />
                </button>

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
          </AnimatePresence>
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

      {/* Project details modal */}
      <Dialog open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent
          className="max-w-2xl max-h-[90vh] overflow-y-auto p-0 gap-0 border"
          style={{ backgroundColor: "#0B0B0B", borderColor: "rgba(212, 175, 55, 0.3)" }}
        >
          {selected && (
            <>
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={selected.image}
                  alt={`${selected.name} project preview`}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, #0B0B0B 0%, transparent 60%)" }}
                />
              </div>
              <div className="p-6 md:p-8 -mt-10 relative">
                <Badge style={{ backgroundColor: "#D4AF37", color: "#0B0B0B", fontWeight: 600 }}>
                  {selected.category}
                </Badge>
                <DialogHeader className="mt-4 mb-4">
                  <DialogTitle className="text-2xl md:text-3xl font-extrabold" style={{ color: "#FFFFFF" }}>
                    {selected.name}
                  </DialogTitle>
                  <DialogDescription className="text-base text-pretty" style={{ color: "#E2E8F0" }}>
                    {selected.description}
                  </DialogDescription>
                </DialogHeader>

                <h4 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "#D4AF37" }}>
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2 mb-8">
                  {selected.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-md"
                      style={{ backgroundColor: "rgba(212, 175, 55, 0.08)", color: "#D4AF37" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    className="flex-1 font-semibold"
                    style={{ backgroundColor: "#D4AF37", color: "#0B0B0B" }}
                  >
                    <a href={selected.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1"
                    style={{
                      borderColor: "rgba(212, 175, 55, 0.3)",
                      color: "#E2E8F0",
                      backgroundColor: "transparent",
                    }}
                  >
                    <a href={selected.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}