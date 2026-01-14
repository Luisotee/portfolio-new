export interface VolunteerWork {
  id: string
  organization: string
  role: string
  period: string
  description: string
  impact: string[]
  link?: string
}

export const volunteerWork: VolunteerWork[] = [
  {
    id: "earth-defenders",
    organization: "Earth Defenders / Terra Krya",
    role: "AI Engineer (Social Impact)",
    period: "2024",
    description:
      "Developed AI tools for environmental conservation, creating audio-first AI assistants that work offline to support indigenous communities and environmental defenders in remote areas.",
    impact: [
      "Built offline-capable AI assistants for areas with limited connectivity",
      "Won 3rd place in Amazon Challenge, securing R$ 100,000 in funding",
      "Created tools for indigenous communities to document environmental threats",
      "Developed multi-language support for diverse communities",
    ],
    link: "https://github.com/Luisotee/earth-defenders-assistant",
  },
]
