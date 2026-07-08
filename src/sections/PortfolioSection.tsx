import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";

export function PortfolioSection() {
  return (
    <SectionWrapper id="portfolio" background="muted">
      <SectionHeading
        eyebrow="Our Work"
        title="Projects That Define Quality"
        description="A selection of realistic solutions we have engineered across industries and platforms."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            whileHover={{ y: -6 }}
            className="group flex flex-col rounded-2xl overflow-hidden bg-card border border-border hover:border-accent/30 transition-all hover:shadow-hover"
          >
            <div className="relative aspect-video overflow-hidden bg-muted">
              <img
                src={project.image}
                alt={`${project.name} project preview`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent" />
              <Badge className="absolute top-4 left-4 bg-accent/90 text-primary-foreground hover:bg-accent">
                {project.category}
              </Badge>
            </div>

            <div className="flex flex-col flex-1 p-6">
              <h3 className="text-xl font-bold text-foreground mb-2">
                {project.name}
              </h3>
              <p className="text-sm text-muted-foreground text-pretty mb-4 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-muted text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-auto">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 border-border hover:border-accent hover:text-accent"
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
                  className="flex-1 border-border hover:border-accent hover:text-accent"
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
    </SectionWrapper>
  );
}
