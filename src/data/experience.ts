export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "akdo-ai",
    company: "Akdo.ai",
    role: "Full-Stack Developer",
    period: "July 2025 - January 2026",
    location: "Germany",
    description:
      "Architected AI-powered enterprise training platform from scratch with automated course creation and LLM-driven content generation.",
    achievements: [
      "Architected AI-powered enterprise training platform from scratch, integrating automated course creation with LLM-driven content generation",
      "Owned end-to-end implementation of multi-organization authentication system with Better Auth for secure tenant isolation",
      "Designed and shipped peer review system enabling training creators to receive structured feedback and ratings",
      "Implemented multi-ISO compliance using Kertos across codebase and repository configurations",
    ],
    technologies: ["Next.js", "TypeScript", "Better Auth", "AI/LLMs"],
  },
  {
    id: "underdogs",
    company: "Underdogs",
    role: "Full-Stack Developer",
    period: "November 2024 - July 2025",
    location: "Italy",
    description:
      "Led IT infrastructure and developed full-stack web platform, building custom CRM solutions to streamline operations.",
    achievements: [
      "Led IT infrastructure and developed full-stack web platform with React, Next.js, and Tailwind CSS",
      "Designed and shipped custom CRM from scratch, eliminating dependency on third-party automation tools",
      "Built and deployed company-wide chatbot using Zapier, Make, and n8n workflows, becoming the primary tool for internal knowledge sharing",
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Supabase", "Chatbots", "AI/LLMs", "Zapier", "Make", "n8n"],
  },
  {
    id: "awana-digital",
    company: "Awana Digital",
    role: "AI Engineer",
    period: "April 2024 - November 2024",
    location: "USA",
    description:
      "Built and shipped AI chatbot agents for environmental conservation projects, winning major funding in the Amazon Challenge.",
    achievements: [
      "Built and shipped AI chatbot agents using LangChain, Smolagents, and Mem0 for Earth Defenders project",
      "Led Amazon Challenge implementation with Terra Krya, securing 3rd place and R$ 100,000 in funding",
    ],
    technologies: ["Python", "LangChain", "Smolagents", "Mem0", "AI/LLMs"],
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
      "Designed and shipped inventory management and advertisement automation system",
      "Sole developer for Israeli startup's emergency advisory chatbot, delivering production-ready solution for users in crisis situations",
    ],
    technologies: ["TypeScript", "Node.js", "WhatsApp API", "AI/LLMs", "Automation"],
  },
];
