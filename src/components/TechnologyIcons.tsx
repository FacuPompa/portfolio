import { Database, Layers3, Network, Webhook, Workflow } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { motion } from 'motion/react'
import type { IconType } from 'react-icons'
import {
  SiC,
  SiArchlinux,
  SiCss,
  SiDocker,
  SiDotnet,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNetlify,
  SiNotion,
  SiObsidian,
  SiOpencode,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si'
import { TbBrandCSharp } from "react-icons/tb";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaJava } from 'react-icons/fa'
import { AiOutlineOpenAI } from 'react-icons/ai'

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
  'C#': TbBrandCSharp,
  '.NET': SiDotnet,
  Python: SiPython,
  C: SiC,
  Git: SiGit,
  GitHub: SiGithub,
  PostgreSQL: SiPostgresql,
  Docker: SiDocker,
  Vercel: SiVercel,
  Netlify: SiNetlify,
  Notion: SiNotion,
  Obsidian: SiObsidian,
  'Arch Linux': SiArchlinux,
  Codex: AiOutlineOpenAI,
  OpenCode: SiOpencode,
  'REST APIs': Webhook,
  'REST API': Webhook,
  POO: Network,
  OOP: Network,
  Streams: Workflow,
  'Context API': Layers3,
}

function getTechnologyTone(technology: string) {
  if (['React', 'TypeScript', 'REST APIs', 'Context API'].includes(technology)) return 'cyan'
  if (['Java', 'Java 21', 'Spring Boot', 'C#', '.NET', 'C', 'POO', 'OOP', 'Streams'].includes(technology)) return 'orange'
  if (['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'].includes(technology)) return 'violet'
  if (['PostgreSQL', 'Docker', 'Git', 'GitHub', 'Vercel', 'Netlify', 'Notion', 'Obsidian', 'Arch Linux'].includes(technology)) return 'blue'
  if (['Codex', 'OpenCode', 'Python'].includes(technology)) return 'mint'
  return 'neutral'
}

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.035 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 },
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
    <motion.ul
      className={`technology-list technology-list--${variant}`}
      aria-label={label}
      variants={listVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {items.map((item) => {
        const Icon = technologyIcons[item] ?? Database
        return (
          <motion.li
            className={`technology-item technology-item--${getTechnologyTone(item)}`}
            variants={itemVariants}
            whileHover={{ y: -2 }}
            key={item}
          >
            <span className="technology-glyph" aria-hidden="true"><Icon size={17} /></span>
            <span className="technology-name">{item}</span>
          </motion.li>
        )
      })}
    </motion.ul>
  )
}
