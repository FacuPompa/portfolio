import { useEffect, useState } from 'react'
import { Languages, Menu, Moon, Sun, X } from 'lucide-react'
import { useLanguage } from '../context/language-context'
import { useTheme } from '../context/theme-context'

const sectionIds = ['home', 'about', 'journey', 'projects', 'education', 'contact'] as const

export function Header() {
  const { language, toggleLanguage, t } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    let frame = 0

    const updateActiveSection = () => {
      const headerOffset = 116
      const position = window.scrollY + headerOffset
      let current: (typeof sectionIds)[number] = sectionIds[0]

      sectionIds.forEach((id) => {
        const section = document.getElementById(id)
        if (section && section.offsetTop <= position) current = id
      })

      setActiveSection(current)
      frame = 0
    }

    const onScrollOrResize = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActiveSection)
    }

    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize)
    updateActiveSection()

    return () => {
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.classList.remove('menu-open')
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'journey', label: t.nav.journey },
    { id: 'projects', label: t.nav.projects },
    { id: 'education', label: t.nav.education },
    { id: 'contact', label: t.nav.contact },
  ]

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <a className="brand" href="#home" onClick={closeMenu} aria-label="Facundo Pompa — Home">
        <span className="brand-mark">F</span>
        <span className="brand-name">Facundo Pompa</span>
      </a>

      <nav id="main-navigation" className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label={t.accessibility.mainNav}>
        {navItems.map((item, index) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => {
              setActiveSection(item.id)
              closeMenu()
            }}
            aria-current={activeSection === item.id ? 'page' : undefined}
          >
            <span aria-hidden="true">{String(index).padStart(2, '0')}</span>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <button className="icon-button language-button" type="button" onClick={toggleLanguage} aria-label={t.accessibility.language}>
          <Languages size={17} aria-hidden="true" />
          <span>{language === 'es' ? 'EN' : 'ES'}</span>
        </button>
        <button
          className="icon-button"
          type="button"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? t.accessibility.themeLight : t.accessibility.themeDark}
        >
          {theme === 'dark' ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
        </button>
        <button
          className="icon-button menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          aria-label={menuOpen ? t.accessibility.closeMenu : t.accessibility.openMenu}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>
    </header>
  )
}
