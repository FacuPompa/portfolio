import { Bot, Database, Layers3 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { CSSProperties } from 'react'
import type { IconType } from 'react-icons'
import {
  SiArchlinux,
  SiCss,
  SiDocker,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNotion,
  SiObsidian,
  SiOpencode,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import { BiLogoPostgresql, BiLogoSpringBoot } from 'react-icons/bi'
import { FaJava } from 'react-icons/fa'

type TechnologyIcon = IconType | LucideIcon

const technologyIcons: Record<string, TechnologyIcon> = {
  HTML5: SiHtml5,
  CSS3: SiCss,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  'Tailwind CSS': SiTailwindcss,
  Java: FaJava,
  'Java 21': FaJava,
  'Spring Boot': BiLogoSpringBoot,
  Python: SiPython,
  Git: SiGit,
  GitHub: SiGithub,
  PostgreSQL: BiLogoPostgresql,
  Docker: SiDocker,
  Notion: SiNotion,
  Obsidian: SiObsidian,
  'Arch Linux': SiArchlinux,
  Codex: Bot,
  OpenCode: SiOpencode,
  'Context API': Layers3,
}

const technologyColors: Record<string, string> = {
  HTML5: '#e34f26',
  CSS3: '#1572b6',
  JavaScript: '#f7df1e',
  TypeScript: '#3178c6',
  React: '#61dafb',
  'Tailwind CSS': '#06b6d4',
  Java: '#f89820',
  'Java 21': '#f89820',
  'Spring Boot': '#6db33f',
  Python: '#3776ab',
  Git: '#f05032',
  GitHub: '#f1eee7',
  PostgreSQL: '#4169e1',
  Docker: '#2496ed',
  Notion: '#f1eee7',
  Obsidian: '#a88bfa',
  'Arch Linux': '#1793d1',
  Codex: '#10a37f',
  OpenCode: '#f1eee7',
  'Context API': '#61dafb',
}

export function TechnologyIcons({
  items,
  label,
  variant = 'stack',
}: {
  items: readonly string[]
  label: string
  variant?: 'stack' | 'project'
}) {
  return (
    <ul className={`technology-list technology-list--${variant}`} aria-label={label}>
      {items.map((item) => {
        const Icon = technologyIcons[item] ?? Database
        const color = item === 'GitHub' || item === 'Notion' || item === 'OpenCode'
          ? 'var(--monochrome-icon)'
          : technologyColors[item] ?? '#9bb2c2'
        return (
          <li key={item} style={{ '--technology-color': color } as CSSProperties}>
            <span className="technology-icon" aria-hidden="true">
              <Icon size={variant === 'stack' ? 30 : 17} />
            </span>
            <span className="technology-name">{item}</span>
          </li>
        )
      })}
    </ul>
  )
}
