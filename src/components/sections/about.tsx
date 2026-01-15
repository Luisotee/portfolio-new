"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/shared/section-heading"
import { Badge } from "@/components/ui/badge"
import { GraduationCap } from "lucide-react"

const techStack = {
  "Frontend": [
    "React",
    "React Native",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "shadcn/ui",
  ],
  "Backend": [
    "Node.js",
    "Express",
    "Fastify",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "Supabase",
  ],
  "AI & ML": [
    "LangChain",
    "Pydantic AI",
    "CrewAI",
    "Smolagents",
    "Mem0",
    "Prompt Engineering",
  ],
  "Tools": [
    "Git",
    "Docker",
    "AWS",
    "Prisma",
    "Drizzle",
    "Linux",
  ],
}

const education = [
  {
    degree: "BS in Computer Engineering",
    school: "Sorocaba University of Engineering",
    location: "Sorocaba, Brazil",
    period: "2019 - 2023",
  },
  {
    degree: "BS in System Development",
    school: "Pontifical Catholic University of Paraná",
    location: "Londrina, Brazil",
    period: "2024 - Present",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="About Me"
          subtitle="A passionate developer who loves building things that live on the internet"
        />

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m a Full Stack Developer and AI Engineer based in Germany, originally
              from Brazil. With a degree in Computer Engineering and ongoing studies
              in System Development, I specialize in building scalable web applications
              and integrating AI to solve real-world problems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I build everything from{" "}
              <span className="text-foreground font-medium">responsive frontends</span> to{" "}
              <span className="text-foreground font-medium">robust backend systems</span>,
              with a focus on delivering polished user experiences. My recent work spans
              enterprise platforms, custom CRMs, and AI-powered applications, from LLM
              integrations to autonomous agents.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m an active open source contributor, with projects like the WhatsApp
              AI Assistant (125+ stars) and contributions to LangChain.js. I hold
              Brazilian & Italian citizenship and speak Portuguese, English (C2),
              Spanish, and am learning German.
            </p>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {Object.entries(techStack).map(([category, technologies]) => (
              <motion.div key={category} variants={itemVariants}>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="px-3 py-1 text-sm hover:bg-primary/10 transition-colors cursor-default"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Education */}
            <motion.div variants={itemVariants}>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                Education
              </h3>
              <div className="space-y-3">
                {education.map((edu) => (
                  <div key={edu.degree} className="text-sm">
                    <p className="font-medium">{edu.degree}</p>
                    <p className="text-muted-foreground">{edu.school}</p>
                    <p className="text-muted-foreground text-xs">{edu.period}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
