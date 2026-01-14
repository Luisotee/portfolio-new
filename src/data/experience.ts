export interface Experience {
  id: string
  company: string
  role: string
  period: string
  location: string
  description: string
  achievements: string[]
  technologies: string[]
}

export const experiences: Experience[] = [
  {
    id: "akdo-ai",
    company: "Akdo.ai",
    role: "Full-Stack Developer",
    period: "July 2025 - Present",
    location: "Germany",
    description:
      "Building AI-powered enterprise training platform with automated course creation and content generation.",
    achievements: [
      "Built AI-powered enterprise training platform with automated course creation and content generation",
      "Implemented multi-organization authentication system with Better Auth for secure tenant isolation",
      "Integrated Cloudflare Stream and Images to optimize media delivery and reduce infrastructure costs",
      "Established system-wide logging infrastructure for error tracking and debugging",
    ],
    technologies: ["Next.js", "TypeScript", "Better Auth", "Cloudflare", "AI/LLMs"],
  },
  {
    id: "wave-leads",
    company: "Wave Leads",
    role: "Full-Stack Developer",
    period: "November 2024 - July 2025",
    location: "Italy",
    description:
      "Led IT infrastructure and developed full-stack web platform, building custom CRM solutions to streamline operations.",
    achievements: [
      "Led IT infrastructure and developed full-stack web platform with React, Next.js, and Tailwind CSS",
      "Built custom CRM with Next.js and Supabase to replace Zapier automations and streamline operations",
      "Created company-wide chatbot to improve internal communication",
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Supabase", "Chatbots"],
  },
  {
    id: "awana-digital",
    company: "Awana Digital",
    role: "AI Engineer",
    period: "April 2024 - November 2024",
    location: "USA",
    description:
      "Architected and deployed AI chatbot agents for environmental conservation projects, winning major funding in the Amazon Challenge.",
    achievements: [
      "Architected and deployed AI chatbot agents using LangChain, Smolagents, and Mem0 for Earth Defenders project",
      "Led Amazon Challenge implementation with Terra Krya, securing 3rd place and R$ 100,000 in funding",
    ],
    technologies: ["Python", "LangChain", "Smolagents", "Mem0", "AI Agents"],
  },
  {
    id: "freelancer",
    company: "Freelancer",
    role: "Full-Stack Developer",
    period: "September 2023 - March 2024",
    location: "Brazil, Israel",
    description:
      "Built AI-powered chatbots and automation systems for various clients, including WhatsApp integrations and advisory bots.",
    achievements: [
      "Built WhatsApp Business API webhook for AI chatbot with digital art generation capabilities",
      "Created inventory management and advertisement automation system",
      "Developed advisory chatbot for Israeli startup to guide users in adverse situations",
    ],
    technologies: ["TypeScript", "Node.js", "WhatsApp API", "AI Chatbots", "Automation"],
  },
]
