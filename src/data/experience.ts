export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  logo?: string;
}

export const experiences: Experience[] = [
  {
    id: "akdo-ai",
    company: "Akdo.ai",
    role: "Full-Stack Developer",
    period: "July 2025 - January 2026",
    location: "Germany",
    logo: "/akdo_logo.svg",
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
    role: "Full-stack Developer & Automation Lead",
    period: "November 2024 - July 2025",
    location: "Italy",
    logo: "/underdogs_logo.svg",
    description:
      "Led IT infrastructure and built full-stack web platform, automating 20+ business workflows saving 40+ hours/week.",
    achievements: [
      "Led IT infrastructure and built full-stack web platform with Next.js, React, and Tailwind CSS",
      "Automated 20+ business workflows using Zapier, n8n, and Make, saving 40+ hours/week of manual work across teams",
      "Designed and shipped custom CRM from scratch, eliminating dependency on third-party automation tools",
      "Built AI-powered company chatbot handling 100+ daily queries, achieving company-wide adoption for internal knowledge sharing",
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Supabase", "Chatbots", "AI/LLMs", "Zapier", "Make", "n8n"],
  },
  {
    id: "awana-digital",
    company: "Awana Digital",
    role: "AI Engineer",
    period: "April 2024 - November 2024",
    location: "USA",
    logo: "/Awana-Digital-logo.avif",
    description:
      "Engineered autonomous AI agents for environmental conservation, enabling conversational interfaces for environmental data access.",
    achievements: [
      "Engineered autonomous AI agents using LangChain, Smolagents, and Mem0, enabling conversational interfaces for environmental data access",
      "Led Amazon Challenge implementation with Terra Krya, securing 3rd place and R$ 100,000 in funding",
    ],
    technologies: ["Python", "LangChain", "Smolagents", "Mem0", "AI/LLMs"],
  },
  {
    id: "freelancer",
    company: "Freelancer",
    role: "Full-Stack Developer",
    period: "December 2023 - March 2024",
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
  {
    id: "huawei",
    company: "Huawei",
    role: "Intern",
    period: "January 2023 - November 2023",
    location: "Sorocaba, São Paulo, Brazil",
    logo: "/Huawei_Standard_logo.svg",
    description:
      "Contributed to telecommunications infrastructure and developed automation tools for Claro's network operations.",
    achievements: [
      "Contributed to the implementation of Claro's 5G network and the maintenance of the 4G, 3G, and 2G networks",
      "Developed an API using Python and React to perform web scraping on the Claro portal, optimizing various processes",
      "Created a VBA tool to convert multiple xlsx files to PDF, saving approximately 1 hour per day for each team member",
    ],
    technologies: ["Python", "React", "VBA", "Telecommunications", "APIs"],
  },
  {
    id: "lp-tech",
    company: "LP Tech",
    role: "Founder",
    period: "June 2020 - January 2023",
    location: "Brazil",
    description:
      "Founded and managed LP Informática, an online store specializing in used computers with technical support services.",
    achievements: [
      "Created and managed LP Informática, an online store specializing in selling used laptops and desktops with hardware and software technical support",
      "Gained valuable experience in digital marketing, customer relationship management, and business fundamentals",
    ],
    technologies: ["E-commerce", "Digital Marketing", "Hardware Support", "Customer Relations"],
  },
];
