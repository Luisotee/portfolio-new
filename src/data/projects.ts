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
    description: "Production-ready multi-client AI agent with persistent memory, RAG-powered knowledge base, multi-language speech processing, and comprehensive finance management.",
    longDescription:
      "A production-ready personal AI assistant with multi-client architecture, featuring persistent memory, RAG-powered knowledge base with PDF uploads, and multi-language speech processing across 5 languages. Currently integrated with WhatsApp, with extensible design for additional messaging platforms. Includes a comprehensive real-time finance dashboard with transaction tracking, multi-currency support, and analytics visualizations. Built with a modern full-stack architecture combining Python FastAPI backend, Next.js frontend, and PostgreSQL with pgvector for semantic search.",
    demoUrl: "https://finance.luisotee.com/",
    technologies: ["Python", "FastAPI", "TypeScript", "Next.js", "PostgreSQL", "pgvector", "Gemini", "Groq Whisper", "Docker", "Redis", "Baileys", "Tailwind CSS", "Recharts"],
    features: [
      "Persistent conversation history with semantic search through past conversations",
      "Context-aware responses using configurable message windows",
      "RAG knowledge base with PDF uploads and auto-generated citations",
      "Vector similarity search with 3072-dimensional embeddings",
      "Real-time finance dashboard with transaction tracking and analytics",
      "Multi-currency support with automatic conversion and live exchange rates",
      "Spending analytics with trends, category breakdowns, and cash flow analysis",
      "Multi-language speech processing (STT/TTS) in 5 languages",
      "Multi-client architecture with WhatsApp integration (group chat, media, voice)",
      "Automated notification processing for financial alerts and updates",
    ],
    category: "ai",
    githubUrl: "https://github.com/Luisotee/ai-personal-assistant",
  },
  {
    id: "ai-boilerplate",
    title: "AI Agent Boilerplate",
    description: "Production-ready multi-client boilerplate for building conversational AI agents with memory, RAG knowledge base, and multi-language speech processing.",
    longDescription:
      "A comprehensive, production-ready boilerplate framework for building sophisticated multi-client AI agents. Features modular architecture with dependency injection, persistent conversation memory with semantic search, RAG-powered knowledge base with PDF processing, and multi-language speech capabilities. Designed with extensibility for multiple messaging platforms and used as the foundation for production applications. Includes complete API documentation, background job processing with Redis Streams, and graceful service degradation.",
    technologies: ["Python", "FastAPI", "TypeScript", "Fastify", "Baileys", "PostgreSQL", "pgvector", "Gemini", "Groq Whisper", "Docker", "Redis", "Pydantic AI"],
    features: [
      "Multi-client architecture designed for extensibility across messaging platforms",
      "Production-ready design with dependency injection and modular components",
      "Persistent conversation memory with PostgreSQL and semantic search",
      "RAG knowledge base with PDF uploads, semantic chunking, and auto-citations",
      "Multi-language speech processing (STT/TTS) in 5 languages",
      "WhatsApp client implementation with group chat, media, and voice support",
      "Server-Sent Events for real-time streaming responses",
      "Background job processing with Redis Streams consumer groups",
      "Comprehensive API with OpenAPI docs and admin tools (Adminer)",
      "MIT licensed and designed for extensibility",
    ],
    category: "ai",
    githubUrl: "https://github.com/Luisotee/ai-boilerplate",
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
    description: "Audio-first AI platform for environmental defenders with offline capability and flexible plugin architecture.",
    longDescription:
      "Platform for creating audio-first AI assistants that work offline, built at Awana Digital for Digital Democracy. Features a flexible plugin architecture enabling environmental defenders and indigenous communities in remote areas to access AI tools without internet connectivity.",
    technologies: ["Python", "LangChain", "Smolagents", "Mem0", "Offline AI"],
    features: [
      "Audio-first design for accessibility in diverse communities",
      "Offline-capable AI assistants for areas with limited connectivity",
      "Flexible plugin architecture for extensibility",
      "Multi-language support for indigenous communities",
    ],
    category: "ai",
    githubUrl: "https://github.com/digidem/earth-defenders-assistant",
    stars: 13,
    isSocialImpact: true,
  },
  {
    id: "terra-krya-whatsapp",
    title: "Terra Krya WhatsApp Integration",
    description: "Amazon Challenge winner: WhatsApp chatbot integrating environmental defense tools for Amazon communities.",
    longDescription:
      "WhatsApp chatbot built on Turn.io that unified environmental defense tools for Amazon communities. Integrated CoMapeo (territory monitoring), Caminho do Fogo (fire alerts), and Inteligência Econômica into a single conversational interface. Won 3rd place in the Amazon Challenge, securing R$100,000 in funding.",
    technologies: ["Python", "Turn.io", "WhatsApp API", "AI/LLMs", "CoMapeo", "Caminho do Fogo"],
    features: [
      "Won 3rd place in Amazon Challenge, securing R$100,000 in funding",
      "Integrated CoMapeo for territory monitoring and mapping",
      "Connected Caminho do Fogo for fire prevention alerts",
      "Unified Inteligência Econômica for economic intelligence",
      "Built on Turn.io for scalable WhatsApp delivery",
    ],
    category: "ai",
    isSocialImpact: true,
  },
  {
    id: "mulheres-rurais",
    title: "Mulheres Rurais de Sergipe",
    description: "Platform empowering rural women artisans with voice-enabled product registration using STT/TTS chatbot.",
    longDescription:
      "Digital platform for the Rural Women Workers Movement of Sergipe, Brazil, connecting rural women producers with consumers. Features a voice-enabled chatbot using Typebot with speech-to-text and text-to-speech technology, making it accessible for women with limited digital literacy to register and sell their artisanal products.",
    technologies: ["Next.js", "TypeScript", "Node.js", "Prisma", "SQLite", "Typebot", "Docker"],
    features: [
      "Voice-enabled chatbot with STT/TTS for accessible product registration",
      "Direct marketplace connecting rural producers to consumers",
      "Showcases artisanal products from women in rural Sergipe",
      "Open source with 400+ commits and community contributions",
    ],
    category: "web",
    demoUrl: "https://mulheresrurais.com.br/",
    githubUrl: "https://github.com/catuaba07/do-quintal-a-cozinha",
    isSocialImpact: true,
  },
]

export const projectCategories = [
  { value: "all", label: "All Projects" },
  { value: "ai", label: "AI/ML" },
  { value: "web", label: "Web Apps" },
  { value: "other", label: "Other" },
] as const
