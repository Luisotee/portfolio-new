import { Github, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  {
    href: "https://github.com/Luisotee",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/luisotee",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "mailto:luisotaviomgrcont@gmail.com",
    icon: Mail,
    label: "Email",
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} Luis Otavio. Built with Next.js & shadcn/ui.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
