"use client"

import { motion } from "framer-motion"
import { Heart, ExternalLink } from "lucide-react"
import { SectionHeading } from "@/components/shared/section-heading"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { volunteerWork, type VolunteerWork } from "@/data/volunteer"

function VolunteerCard({ work, index }: { work: VolunteerWork; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/20 overflow-hidden">
        {/* Gradient accent bar */}
        <div className="h-1 gradient-bg-accent" />

        <CardContent className="p-6">
          {/* Header */}
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-lg gradient-bg-accent flex items-center justify-center flex-shrink-0">
              <Heart className="w-6 h-6 text-white" />
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-semibold">{work.organization}</h3>
              <p className="text-primary font-medium">{work.role}</p>
              <Badge variant="secondary" className="mt-2">
                {work.period}
              </Badge>
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground mb-6">{work.description}</p>

          {/* Impact */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Impact & Contributions
            </h4>
            <ul className="space-y-2">
              {work.impact.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Link */}
          {work.link && (
            <Button asChild variant="outline" size="sm">
              <a href={work.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Learn More
              </a>
            </Button>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function Volunteer() {
  return (
    <section id="volunteer" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Social Impact"
          subtitle="Using technology to make a positive difference in communities and the environment"
        />

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {volunteerWork.map((work, index) => (
            <VolunteerCard key={work.id} work={work} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Interested in collaborating on community projects?
          </p>
          <Button asChild variant="outline">
            <a href="#contact">Get in Touch</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
