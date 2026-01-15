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
  isSocialImpact?: boolean
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
    id: "ai-personal-assistant",
    title: "AI Personal Assistant",
    description: "AI agent for WhatsApp with RAG knowledge base and automated expense tracking.",
    longDescription:
      "A personal AI assistant that runs on WhatsApp, featuring a RAG-powered knowledge base for contextual responses and automated expense tracking capabilities. Built with a modern stack combining Python backend with Next.js frontend.",
    technologies: ["Python", "FastAPI", "TypeScript", "Next.js", "PostgreSQL", "pgvector"],
    features: [
      "RAG-powered knowledge base",
      "Automated expense tracking",
      "WhatsApp integration",
      "Vector search with pgvector",
      "Full-stack architecture",
    ],
    category: "ai",
    githubUrl: "https://github.com/Luisotee/ai-personal-assistant",
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
    id: "earth-defenders",
    title: "Earth Defenders Assistant",
    description: "AI tools for environmental conservation, supporting indigenous communities with offline-capable assistants.",
    longDescription:
      "Developed AI tools for environmental conservation, creating audio-first AI assistants that work offline to support indigenous communities and environmental defenders in remote areas. Won 3rd place in Amazon Challenge, securing R$ 100,000 in funding.",
    technologies: ["Python", "LangChain", "Smolagents", "Mem0", "Offline AI"],
    features: [
      "Built offline-capable AI assistants for areas with limited connectivity",
      "Won 3rd place in Amazon Challenge, securing R$ 100,000 in funding",
      "Created tools for indigenous communities to document environmental threats",
      "Developed multi-language support for diverse communities",
    ],
    category: "ai",
    githubUrl: "https://github.com/Luisotee/earth-defenders-assistant",
    isSocialImpact: true,
  },
]

export const projectCategories = [
  { value: "all", label: "All Projects" },
  { value: "ai", label: "AI/ML" },
  { value: "web", label: "Web Apps" },
  { value: "other", label: "Other" },
] as const
