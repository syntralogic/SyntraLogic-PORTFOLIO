import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, ArrowRight, FileSearch } from "lucide-react";
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

// Shown in place of the screenshot when a project has no image yet.
function ProjectPlaceholder() {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{
        background:
          "linear-gradient(135deg, rgb(var(--sl-gold-rgb) / 0.14), rgb(var(--sl-gold-rgb) / 0.03))",
      }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgb(var(--sl-gold-rgb) / 0.08) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--sl-gold-rgb) / 0.08) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        className="relative flex h-16 w-16 items-center justify-center rounded-2xl border"
        style={{
          backgroundColor: "rgb(var(--sl-gold-rgb) / 0.12)",
          borderColor: "rgb(var(--sl-gold-rgb) / 0.35)",
        }}
      >
        <FileSearch className="h-8 w-8" style={{ color: "var(--sl-gold-text)" }} />
      </div>
    </div>
  );
}

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
      style={{ backgroundColor: "var(--sl-bg)" }}
    >
      {/* Gold grid overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgb(var(--sl-gold-rgb) / 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgb(var(--sl-gold-rgb) / 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* Gold glow accent */}
      <div 
        className="absolute bottom-0 right-0 w-1/2 h-1/2 pointer-events-none opacity-10"
        style={{
          background: "radial-gradient(ellipse, rgb(var(--sl-gold-rgb) / 0.15) 0%, transparent 70%)",
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
              style={{ color: "var(--sl-gold-text)" }}
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
            style={{ color: "var(--sl-fg)" }}
          >
            Projects That Define Quality
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-base md:text-lg max-w-2xl mx-auto"
            style={{ color: "var(--sl-muted)" }}
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
                className="px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--sl-gold)]"
                style={{
                  backgroundColor: isActive ? "var(--sl-gold)" : "transparent",
                  color: isActive ? "var(--sl-on-gold)" : "var(--sl-muted)",
                  borderColor: isActive ? "var(--sl-gold)" : "rgb(var(--sl-gold-rgb) / 0.25)",
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
                backgroundColor: "rgb(var(--sl-tint) / 0.02)",
                borderColor: "rgb(var(--sl-gold-rgb) / 0.08)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgb(var(--sl-gold-rgb) / 0.3)";
                e.currentTarget.style.boxShadow = "0 8px 40px rgb(var(--sl-gold-rgb) / 0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgb(var(--sl-gold-rgb) / 0.08)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                className="relative aspect-video overflow-hidden cursor-pointer"
                style={{ backgroundColor: "rgb(var(--sl-tint) / 0.03)" }}
                onClick={() => setSelected(project)}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.name} project preview`}
                    loading="lazy"
                    decoding="async"
                    width={1000}
                    height={560}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <ProjectPlaceholder />
                )}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgb(var(--sl-bg-rgb) / 0.9) 0%, transparent 50%, transparent 100%)",
                  }}
                />
                <Badge 
                  className="absolute top-4 left-4"
                  style={{
                    backgroundColor: "var(--sl-gold)",
                    color: "var(--sl-on-gold)",
                    fontWeight: 600,
                  }}
                >
                  {project.category}
                </Badge>
              </div>

              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-xl font-bold mb-2" style={{ color: "var(--sl-fg)" }}>
                  {project.name}
                </h3>
                <p className="text-sm text-pretty mb-4 flex-1" style={{ color: "var(--sl-muted)" }}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-md"
                      style={{
                        backgroundColor: "rgb(var(--sl-gold-rgb) / 0.08)",
                        color: "var(--sl-gold-text)",
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
                  style={{ color: "var(--sl-gold-text)" }}
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
                      borderColor: "rgb(var(--sl-gold-rgb) / 0.15)",
                      color: "var(--sl-muted)",
                      backgroundColor: "transparent",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--sl-gold)";
                      e.currentTarget.style.color = "var(--sl-gold-text)";
                      e.currentTarget.style.backgroundColor = "rgb(var(--sl-gold-rgb) / 0.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgb(var(--sl-gold-rgb) / 0.15)";
                      e.currentTarget.style.color = "var(--sl-muted)";
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
                      borderColor: "rgb(var(--sl-gold-rgb) / 0.15)",
                      color: "var(--sl-muted)",
                      backgroundColor: "transparent",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--sl-gold)";
                      e.currentTarget.style.color = "var(--sl-gold-text)";
                      e.currentTarget.style.backgroundColor = "rgb(var(--sl-gold-rgb) / 0.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgb(var(--sl-gold-rgb) / 0.15)";
                      e.currentTarget.style.color = "var(--sl-muted)";
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
              style={{ color: "var(--sl-gold-text)" }}
            >
              What's Next
            </span>
            <h3
              className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3"
              style={{ color: "var(--sl-fg)" }}
            >
              Upcoming Projects
            </h3>
            <p className="text-base max-w-xl mx-auto" style={{ color: "var(--sl-muted)" }}>
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
                    backgroundColor: "rgb(var(--sl-gold-rgb) / 0.03)",
                    borderColor: "rgb(var(--sl-gold-rgb) / 0.3)",
                  }}
                >
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl"
                      style={{ backgroundColor: "rgb(var(--sl-gold-rgb) / 0.1)" }}
                    >
                      <Icon className="h-6 w-6" style={{ color: "var(--sl-gold-text)" }} />
                    </div>
                    <span
                      className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
                      style={{ backgroundColor: "rgb(var(--sl-gold-rgb) / 0.12)", color: "var(--sl-gold-text)" }}
                    >
                      <span className="relative flex h-2 w-2">
                        <span
                          className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                          style={{ backgroundColor: "var(--sl-gold)" }}
                        />
                        <span
                          className="relative inline-flex h-2 w-2 rounded-full"
                          style={{ backgroundColor: "var(--sl-gold)" }}
                        />
                      </span>
                      {project.status}
                    </span>
                  </div>

                  <span
                    className="text-xs font-medium uppercase tracking-wider mb-2"
                    style={{ color: "var(--sl-gold-text)" }}
                  >
                    {project.category}
                  </span>
                  <h4 className="text-xl font-bold mb-2" style={{ color: "var(--sl-fg)" }}>
                    {project.name}
                  </h4>
                  <p className="text-sm text-pretty mb-4 flex-1" style={{ color: "var(--sl-muted)" }}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium rounded-md"
                        style={{ backgroundColor: "rgb(var(--sl-gold-rgb) / 0.08)", color: "var(--sl-gold-text)" }}
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
              style={{ backgroundColor: "var(--sl-gold)", color: "var(--sl-on-gold)" }}
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
          style={{ backgroundColor: "var(--sl-bg)", borderColor: "rgb(var(--sl-gold-rgb) / 0.3)" }}
        >
          {selected && (
            <>
              <div className="relative aspect-video overflow-hidden">
                {selected.image ? (
                  <img
                    src={selected.image}
                    alt={`${selected.name} project preview`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <ProjectPlaceholder />
                )}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, var(--sl-bg) 0%, transparent 60%)" }}
                />
              </div>
              <div className="p-6 md:p-8 -mt-10 relative">
                <Badge style={{ backgroundColor: "var(--sl-gold)", color: "var(--sl-on-gold)", fontWeight: 600 }}>
                  {selected.category}
                </Badge>
                <DialogHeader className="mt-4 mb-4">
                  <DialogTitle className="text-2xl md:text-3xl font-extrabold" style={{ color: "var(--sl-fg)" }}>
                    {selected.name}
                  </DialogTitle>
                  <DialogDescription className="text-base text-pretty" style={{ color: "var(--sl-muted)" }}>
                    {selected.description}
                  </DialogDescription>
                </DialogHeader>

                <h4 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--sl-gold-text)" }}>
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2 mb-8">
                  {selected.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-md"
                      style={{ backgroundColor: "rgb(var(--sl-gold-rgb) / 0.08)", color: "var(--sl-gold-text)" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    className="flex-1 font-semibold"
                    style={{ backgroundColor: "var(--sl-gold)", color: "var(--sl-on-gold)" }}
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
                      borderColor: "rgb(var(--sl-gold-rgb) / 0.3)",
                      color: "var(--sl-muted)",
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