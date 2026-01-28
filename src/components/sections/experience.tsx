"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronDown, MapPin, Calendar, Building2 } from "lucide-react"
import { SectionHeading } from "@/components/shared/section-heading"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { experiences, type Experience } from "@/data/experience"

function ExperienceCard({ experience, index }: { experience: Experience; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-primary/20"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <CardContent className="p-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div className="flex items-start gap-4">
              {/* Company Icon */}
              {experience.logo ? (
                <div className="w-12 h-12 rounded-lg bg-white border border-border flex-shrink-0 overflow-hidden relative">
                  <Image
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    fill
                    className={experience.logo.endsWith(".svg") ? "object-contain p-1.5" : "object-cover"}
                  />
                </div>
              ) : (
                <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
              )}

              <div>
                <h3 className="text-xl font-semibold">{experience.role}</h3>
                <p className="text-lg text-primary font-medium">{experience.company}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {experience.period}
              </span>
              <span className="hidden sm:inline">|</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {experience.location}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground mb-4">{experience.description}</p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {experience.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Expand Button */}
          <div className="flex items-center justify-center">
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
            </motion.div>
          </div>

          {/* Expanded Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 mt-4 border-t border-border">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey and the companies I've worked with"
        />

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.id} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
