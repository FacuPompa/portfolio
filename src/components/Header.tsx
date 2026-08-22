import { useEffect, useRef, useState } from 'react'
import { Check, FileText, Github, Languages, Linkedin, Mail, Moon, Sun, X } from 'lucide-react'
import { useLanguage } from '../context/language-context'
import { useTheme } from '../context/theme-context'

const EMAIL = 'pompafacundo4@gmail.com'

const headerCopy = {
  es: {
    role: 'Desarrollador web',
    about: 'Sobre mí',
    projects: 'Proyectos',
    technologies: 'Tecnologías',
    education: 'Formación',
    quickNav: 'Navegación rápida',
    preferences: 'Preferencias del sitio',
    lightTheme: 'Activar tema claro',
    darkTheme: 'Activar tema oscuro',
    copyEmail: 'Copiar correo electrónico',
    emailCopied: 'Correo copiado al portapapeles',
    emailCopyFailed: 'No se pudo copiar el correo',
  },
  en: {
    role: 'Web developer',
    about: 'About',
    projects: 'Projects',
    technologies: 'Technologies',
    education: 'Education',
    quickNav: 'Quick navigation',
    preferences: 'Site preferences',
    lightTheme: 'Switch to light theme',
    darkTheme: 'Switch to dark theme',
    copyEmail: 'Copy email address',
    emailCopied: 'Email copied to clipboard',
    emailCopyFailed: 'Could not copy the email address',
  },
} as const

export function Header() {
  const { language, toggleLanguage, t } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const copy = headerCopy[language]
  const sectionNavRef = useRef<HTMLElement>(null)
  const toastTimerRef = useRef<number | null>(null)
  const [showFloatingNav, setShowFloatingNav] = useState(false)
  const [emailToast, setEmailToast] = useState<'success' | 'error' | null>(null)
  const sectionLinks = [
    { href: '#about', label: copy.about },
    { href: '#technologies', label: copy.technologies },
    { href: '#projects', label: copy.projects },
    { href: '#education', label: copy.education },
  ]

  useEffect(() => {
    const navigation = sectionNavRef.current
    if (!navigation) return

    const observer = new IntersectionObserver(([entry]) => {
      setShowFloatingNav(!entry.isIntersecting && entry.boundingClientRect.top < 0)
    })
    observer.observe(navigation)
    return () => observer.disconnect()
  }, [])

  useEffect(() => () => {
    if (toastTimerRef.current !== null) window.clearTimeout(toastTimerRef.current)
  }, [])

  const showEmailToast = (status: 'success' | 'error') => {
    setEmailToast(status)
    if (toastTimerRef.current !== null) window.clearTimeout(toastTimerRef.current)
    toastTimerRef.current = window.setTimeout(() => setEmailToast(null), 2800)
  }

  const copyEmail = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(EMAIL)
      } else {
        const fallback = document.createElement('textarea')
        fallback.value = EMAIL
        fallback.setAttribute('readonly', '')
        fallback.style.position = 'fixed'
        fallback.style.opacity = '0'
        document.body.appendChild(fallback)
        fallback.select()
        const copied = document.execCommand('copy')
        fallback.remove()
        if (!copied) throw new Error('Clipboard unavailable')
      }
      showEmailToast('success')
    } catch {
      showEmailToast('error')
    }
  }

  return (
    <header id="top" className="profile-header">
      <div className="editorial-shell">
        <div className="profile-header-topline">
          <a href="https://github.com/FacuPompa" target="_blank" rel="noreferrer">@FacuPompa</a>
          <div className="profile-header-actions">
            <button
              className="theme-toggle"
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? copy.lightTheme : copy.darkTheme}
              title={theme === 'dark' ? copy.lightTheme : copy.darkTheme}
            >
              {theme === 'dark' ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
            </button>
            <button type="button" onClick={toggleLanguage} aria-label={t.accessibility.language}>
              <Languages size={16} aria-hidden="true" />
              <span>{language === 'es' ? 'EN' : 'ES'}</span>
            </button>
          </div>
        </div>

        <div className="profile-identity">
          <img src="/profile-facundo.webp" alt={t.accessibility.portrait} fetchPriority="high" />
          <div className="profile-copy">
            <h1>Facundo Pompa</h1>
            <p>{copy.role}</p>
            <nav className="profile-links" aria-label={t.accessibility.socialLinks}>
              <a href="https://github.com/FacuPompa" target="_blank" rel="noreferrer" aria-label={t.common.github} title={t.common.github}>
                <Github size={19} aria-hidden="true" />
              </a>
              <a href="https://www.linkedin.com/in/facundo-pompa/" target="_blank" rel="noreferrer" aria-label={t.common.linkedin} title={t.common.linkedin}>
                <Linkedin size={19} aria-hidden="true" />
              </a>
              <a href="/Facundo-Pompa-CV.pdf" download aria-label={t.common.downloadCv} title={t.common.downloadCv}>
                <FileText size={19} aria-hidden="true" />
              </a>
              <button type="button" onClick={copyEmail} aria-label={copy.copyEmail} title={copy.copyEmail}>
                <Mail size={19} aria-hidden="true" />
              </button>
            </nav>
          </div>
        </div>

        <nav ref={sectionNavRef} className="section-navigation" aria-label={t.accessibility.mainNav}>
          {sectionLinks.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}
        </nav>
      </div>

      {showFloatingNav && (
        <div className="floating-toolbar">
          <nav className="floating-section-navigation" aria-label={copy.quickNav}>
            {sectionLinks.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}
          </nav>
          <div className="floating-toolbar-actions" role="group" aria-label={copy.preferences}>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? copy.lightTheme : copy.darkTheme}
              title={theme === 'dark' ? copy.lightTheme : copy.darkTheme}
            >
              {theme === 'dark' ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
            </button>
            <button type="button" onClick={toggleLanguage} aria-label={t.accessibility.language}>
              <Languages size={15} aria-hidden="true" />
              <span>{language === 'es' ? 'EN' : 'ES'}</span>
            </button>
          </div>
        </div>
      )}

      {emailToast && (
        <div className={`email-toast email-toast--${emailToast}`} role="status" aria-live="polite">
          {emailToast === 'success' ? <Check size={18} aria-hidden="true" /> : <X size={18} aria-hidden="true" />}
          <span>{emailToast === 'success' ? copy.emailCopied : copy.emailCopyFailed}</span>
        </div>
      )}
    </header>
  )
}
