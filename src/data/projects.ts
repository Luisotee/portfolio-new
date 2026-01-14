export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image?: string
  demoUrl?: string
  githubUrl?: string
  technologies: string[]
  features: string[]
  category: "web" | "ai" | "mobile" | "other"
  stars?: number
}

export const projects: Project[] = [
  {
    id: "whatsapp-assistant",
    title: "WhatsApp AI Assistant",
    description: "Open-source WhatsApp chatbot leveraging LLMs for context-aware conversations with 125+ stars.",
    longDescription:
      "A powerful WhatsApp chatbot that integrates with multiple LLM providers including OpenAI, Anthropic, and others. Features context-aware conversations, image generation capabilities, and easy deployment with Docker.",
    technologies: ["TypeScript", "Node.js", "LangChain", "Docker", "Prisma", "WhatsApp API"],
    features: [
      "Multi-LLM support (GPT-4, Claude, Bing AI)",
      "Context-aware conversations with memory",
      "Digital art generation capabilities",
      "Easy Docker deployment",
      "Prisma database integration",
    ],
    category: "ai",
    githubUrl: "https://github.com/WAppAI/assistant",
    stars: 125,
  },
  {
    id: "earth-defenders",
    title: "Earth Defenders Assistant",
    description: "Audio-first AI assistants for environmental conservation that work offline.",
    longDescription:
      "Platform for creating audio-first AI assistants designed to help environmental defenders and indigenous communities. Built to work offline in remote areas with limited connectivity, featuring voice interactions and local processing.",
    technologies: ["Python", "LangChain", "Smolagents", "Mem0", "Audio Processing"],
    features: [
      "Offline-capable AI processing",
      "Audio-first interaction design",
      "Multi-language support",
      "Low-resource device optimization",
    ],
    category: "ai",
    githubUrl: "https://github.com/Luisotee/earth-defenders-assistant",
    stars: 13,
  },
  {
    id: "langchainjs-contribution",
    title: "LangChain.js Google Routes",
    description: "Open source contribution: Added Google Routes tool to the LangChain.js framework.",
    longDescription:
      "Contributed the Google Routes tool to the official LangChain.js repository, enabling developers to integrate Google Maps routing capabilities into their LLM-powered applications. This tool allows AI agents to calculate routes, distances, and travel times.",
    technologies: ["TypeScript", "LangChain.js", "Google Maps API", "Open Source"],
    features: [
      "Google Routes API integration",
      "Route calculation and optimization",
      "Travel time estimation",
      "Multi-waypoint support",
    ],
    category: "ai",
    githubUrl: "https://github.com/langchain-ai/langchainjs/pull/5329",
  },
  {
    id: "help-facul",
    title: "HelpFacul",
    description: "University platform connecting students with private tutors for peer-to-peer learning.",
    longDescription:
      "A web platform developed as a university project that enables students to promote themselves as private tutors. Features include tutor profiles, subject filtering, scheduling, and a review system to help students find the right help.",
    technologies: ["TypeScript", "React", "Next.js", "PostgreSQL", "Tailwind CSS"],
    features: [
      "Tutor profile creation and management",
      "Subject and skill filtering",
      "Student-tutor matching",
      "Review and rating system",
    ],
    category: "web",
    githubUrl: "https://github.com/Luisotee/HelpFacul",
  },
]

export const projectCategories = [
  { value: "all", label: "All Projects" },
  { value: "ai", label: "AI/ML" },
  { value: "web", label: "Web Apps" },
  { value: "other", label: "Other" },
] as const
