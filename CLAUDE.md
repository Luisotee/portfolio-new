# Portfolio Website

Personal portfolio for Luis Otavio - Full Stack Developer & AI Engineer.

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **UI**: shadcn/ui + Tailwind CSS v4
- **Animations**: Framer Motion
- **Theming**: next-themes (dark/light mode)
- **Package Manager**: pnpm

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with ThemeProvider
│   ├── page.tsx            # Main page (composes all sections)
│   └── globals.css         # Tailwind + custom gradient utilities
├── components/
│   ├── layout/             # Header, Footer
│   ├── sections/           # Hero, About, Experience, Projects, Volunteer, Contact
│   ├── shared/             # Reusable components (SectionHeading)
│   └── ui/                 # shadcn components
├── data/                   # Content data files (experience.ts, projects.ts, volunteer.ts)
└── lib/utils.ts            # Utility functions (cn helper)
```

## Commands

```bash
pnpm dev      # Start dev server (Turbopack)
pnpm build    # Production build
pnpm lint     # ESLint
```

## Content Updates

All portfolio content lives in `src/data/`:

- `experience.ts` - Work history
- `projects.ts` - Featured projects
- `volunteer.ts` - Social impact work

## Styling Conventions

- Use `gradient-text` class for gradient text effects
- Use `gradient-bg` / `gradient-bg-accent` for gradient backgrounds
- shadcn components are in `src/components/ui/`
- Add new shadcn components with: `pnpm dlx shadcn@latest add [component]`
