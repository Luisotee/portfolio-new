"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  X,
  Star,
  Heart,
  Brain,
  Globe,
  Smartphone,
  FolderCode,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projects, projectCategories, type Project } from "@/data/projects";

const categoryIcons = {
  ai: Brain,
  web: Globe,
  mobile: Smartphone,
  other: FolderCode,
};

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const CategoryIcon = categoryIcons[project.category];
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <Card
        className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/20 h-full"
        onClick={onClick}
      >
        {/* Preview Area */}
        <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <CategoryIcon className="w-12 h-12 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={false}
          >
            <span className="text-white font-medium">View Details</span>
          </motion.div>
        </div>

        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <div className="flex items-center gap-2">
              {project.isSocialImpact && (
                <Badge variant="secondary" className="bg-orange-500/10 text-orange-600 border-orange-500/20">
                  <Heart className="w-3 h-3 mr-1 fill-current" />
                  Impact
                </Badge>
              )}
              {project.stars && (
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  {project.stars}
                </span>
              )}
            </div>
          </div>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="secondary" className="text-xs">
                +{project.technologies.length - 4}
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const CategoryIcon = categoryIcons[project.category];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-background rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 hover:bg-muted transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category Preview */}
        <div className="relative h-64 md:h-80 bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
              <CategoryIcon className="w-10 h-10 text-white" />
            </div>
            <p className="text-muted-foreground">
              {project.category === "ai" && "AI / Machine Learning"}
              {project.category === "web" && "Web Application"}
              {project.category === "mobile" && "Mobile Application"}
              {project.category === "other" && "Software Project"}
            </p>
            {project.isSocialImpact && (
              <Badge variant="secondary" className="mt-3 bg-orange-500/10 text-orange-600 border-orange-500/20">
                <Heart className="w-3 h-3 mr-1 fill-current" />
                Social Impact Project
              </Badge>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h2>
          <p className="text-muted-foreground mb-6">{project.longDescription}</p>

          {/* Features */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Key Features
            </h3>
            <ul className="grid md:grid-cols-2 gap-2">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            {project.demoUrl && (
              <Button
                asChild
                className="gradient-bg hover:opacity-90 text-white border-0"
              >
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button asChild variant="outline">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  View Source
                </a>
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Projects"
          subtitle="A selection of my recent work and personal projects"
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {projectCategories.map((category) => (
            <Button
              key={category.value}
              variant={activeCategory === category.value ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category.value)}
              className={
                activeCategory === category.value ? "gradient-bg text-white border-0" : ""
              }
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
