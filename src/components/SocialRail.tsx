import { Download, Github, Linkedin, Mail } from 'lucide-react'
import { useLanguage } from '../context/language-context'

const links = [
  { key: 'github', href: 'https://github.com/FacuPompa', icon: Github },
  { key: 'linkedin', href: 'https://www.linkedin.com/in/facundo-pompa/', icon: Linkedin },
  { key: 'email', href: 'mailto:pompafacundo4@gmail.com', icon: Mail },
] as const

export function SocialRail() {
  const { t } = useLanguage()
  const labels = { github: t.common.github, linkedin: t.common.linkedin, email: t.common.email }

  return (
    <aside className="social-rail" aria-label={t.accessibility.socialLinks}>
      {links.map(({ key, href, icon: Icon }) => (
        <a
          key={key}
          href={href}
          target={key === 'email' ? undefined : '_blank'}
          rel={key === 'email' ? undefined : 'noreferrer'}
          aria-label={`${labels[key]}${key === 'email' ? '' : `. ${t.common.external}`}`}
          title={labels[key]}
        >
          <Icon size={18} aria-hidden="true" />
        </a>
      ))}
      <span className="rail-divider" aria-hidden="true" />
      <a href="/Facundo-Pompa-CV.pdf" download title={t.common.downloadCv} aria-label={t.common.downloadCv}>
        <Download size={18} aria-hidden="true" />
      </a>
    </aside>
  )
}
