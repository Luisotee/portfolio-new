"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin, MapPin, ArrowUpRight } from "lucide-react"
import { SectionHeading } from "@/components/shared/section-heading"
import { Card, CardContent } from "@/components/ui/card"

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "luisotaviomgrcont@gmail.com",
    href: "mailto:luisotaviomgrcont@gmail.com",
    description: "Send me an email for work inquiries",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Luisotee",
    href: "https://github.com/Luisotee",
    description: "Check out my open source projects",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/luisotee",
    href: "https://linkedin.com/in/luisotee",
    description: "Connect with me professionally",
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

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Get in Touch"
          subtitle="Have a project in mind or just want to chat? I'd love to hear from you."
        />

        <div className="max-w-4xl mx-auto">
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 text-muted-foreground mb-12"
          >
            <MapPin className="w-5 h-5" />
            <span>Germany - Open to Remote Work Worldwide</span>
          </motion.div>

          {/* Contact Links */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {contactLinks.map((link) => (
              <motion.div key={link.label} variants={itemVariants}>
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                >
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/20 group cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <link.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="font-semibold mb-1 relative inline-flex items-center justify-center">
                        {link.label}
                        <ArrowUpRight className="w-4 h-4 absolute -right-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      <p className="text-sm text-primary mb-2">{link.value}</p>
                      <p className="text-sm text-muted-foreground">{link.description}</p>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
