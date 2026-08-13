import { useEffect } from 'react'
import { ArrowDown, ArrowRight, ArrowUp, Check, Download, ExternalLink, Github, Globe2, Languages, Mail, MapPin } from 'lucide-react'
import { ContactForm } from './components/ContactForm'
import { Header } from './components/Header'
import { LearningTimeline } from './components/LearningTimeline'
import { ProjectVisual } from './components/ProjectVisual'
import { SectionHeading } from './components/SectionHeading'
import { SocialRail } from './components/SocialRail'
import { Starfield } from './components/Starfield'
import { TechnologyIcons } from './components/TechnologyIcons'
import { useLanguage } from './context/language-context'

function App() {
  const { language, t } = useLanguage()

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const elements = document.querySelectorAll<HTMLElement>('.reveal')
    if (reducedMotion) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -9% 0px', threshold: 0.12 },
    )
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [language])

  return (
    <>
      <a className="skip-link" href="#main-content">{t.accessibility.skip}</a>
      <Starfield />
      <Header />
      <SocialRail />

      <main id="main-content">
        <section id="home" className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-grid">
            <div className="hero-copy reveal is-visible">
              <div className="availability"><span aria-hidden="true" />{t.common.available}</div>
              <p className="hero-eyebrow">{t.hero.eyebrow}</p>
              <h1 id="hero-title">{t.hero.name}</h1>
              <p className="hero-description">{t.hero.description}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  {t.hero.primary}<ArrowDown size={18} aria-hidden="true" />
                </a>
                <a className="button button-secondary" href="#contact">
                  {t.hero.secondary}<ArrowRight size={18} aria-hidden="true" />
                </a>
              </div>
              <div className="hero-links" aria-label={t.accessibility.socialLinks}>
                <a href="https://github.com/FacuPompa" target="_blank" rel="noreferrer">{t.common.github}<ExternalLink size={14} aria-hidden="true" /></a>
                <a href="https://www.linkedin.com/in/facundo-pompa/" target="_blank" rel="noreferrer">{t.common.linkedin}<ExternalLink size={14} aria-hidden="true" /></a>
                <a href="/Facundo-Pompa-CV.pdf" download>{t.common.downloadCv}<Download size={14} aria-hidden="true" /></a>
              </div>
            </div>

            <div className="hero-portrait-wrap reveal is-visible">
              <div className="portrait-frame">
                <img className="portrait-image" src="/profile-facundo.jpg" alt={t.accessibility.portrait} />
                <div className="portrait-grid" aria-hidden="true" />
                <p>{t.hero.portraitNote}</p>
              </div>
              <div className="portrait-meta">
                <span>FP / 26</span>
                <span>{t.hero.status}</span>
              </div>
            </div>
          </div>
          <a className="scroll-cue" href="#about"><span>SCROLL</span><ArrowDown size={16} aria-hidden="true" /></a>
        </section>

        <section id="about" className="content-section section-shell" aria-labelledby="about-title">
          <SectionHeading id="about-title" kicker={t.about.kicker} title={t.about.title} />
          <div className="about-layout">
            <div className="about-copy reveal">
              <p className="about-lead">{t.about.intro}</p>
              <p>{t.about.detail}</p>
              <blockquote>
                <span>{t.about.philosophyLabel}</span>
                <p>{t.about.philosophy}</p>
              </blockquote>
            </div>
            <div className="stack-panel reveal">
              <h3>{t.about.stackTitle}</h3>
              {t.about.stackGroups.map((group) => (
                <div className="stack-group" key={group.label}>
                  <p>{group.label}</p>
                  <TechnologyIcons items={group.items} label={group.label} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="journey" className="content-section section-shell" aria-labelledby="journey-title">
          <SectionHeading id="journey-title" kicker={t.journey.kicker} title={t.journey.title} intro={t.journey.intro} />
          <div className="experience-list">
            {t.journey.items.map((item) => (
              <article className="experience-card reveal" key={`${item.company}-${item.period}`}>
                <header className="experience-header">
                  <div className="experience-identity">
                    <span className="company-mark"><img src={item.logo} alt={item.logoAlt} /></span>
                    <div>
                      <h3>{item.role}</h3>
                      <p>{item.company}</p>
                    </div>
                  </div>
                  <span className="experience-period">{item.period}</span>
                </header>
                <div className="experience-body">
                  <p>{item.description}</p>
                  <section className="experience-highlights" aria-label={`${t.journey.highlightsTitle}: ${item.company}`}>
                    <h4>{t.journey.highlightsTitle}</h4>
                    <ul>
                      {item.highlights.map((highlight) => (
                        <li key={highlight}><Check size={16} aria-hidden="true" />{highlight}</li>
                      ))}
                    </ul>
                  </section>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="content-section section-shell" aria-labelledby="projects-title">
          <SectionHeading id="projects-title" kicker={t.projects.kicker} title={t.projects.title} intro={t.projects.intro} />
          <div className="projects-list">
            {t.projects.items.map((project) => (
              <article className="project-card reveal" key={project.id}>
                <ProjectVisual project={project} />
                <div className="project-copy">
                  <div>
                    <p className="project-type">CASE / {project.id.toUpperCase()}</p>
                    <h3>{project.title}</h3>
                  </div>
                  <p>{project.description}</p>
                  <p className="project-outcome">{project.outcome}</p>
                  <div className="tech-list"><TechnologyIcons items={project.technologies} label={t.about.stackTitle} variant="project" /></div>
                  <div className="project-actions">
                    <a className="project-icon-link" href={project.repository} target="_blank" rel="noreferrer" aria-label={`${t.projects.codeLabel} ${project.title}. ${t.common.external}`} title={`${t.common.github}: ${project.title}`}>
                      <Github size={18} aria-hidden="true" />
                    </a>
                    {'demo' in project && project.demo && (
                      <a className="project-icon-link project-demo" href={project.demo} target="_blank" rel="noreferrer" aria-label={`${t.projects.visitLabel} ${project.title}. ${t.common.external}`} title={`${t.common.demo}: ${project.title}`}>
                        <Globe2 size={18} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="content-section section-shell" aria-labelledby="education-title">
          <SectionHeading id="education-title" kicker={t.education.kicker} title={t.education.title} intro={t.education.intro} />
          <LearningTimeline title={t.education.timelineTitle} items={t.education.timelineItems} />
        </section>

        <section id="contact" className="content-section contact-section section-shell" aria-labelledby="contact-title">
          <SectionHeading id="contact-title" kicker={t.contact.kicker} title={t.contact.title} intro={t.contact.intro} />
          <div className="contact-layout">
            <div className="contact-direct reveal">
              <h3>{t.contact.direct}</h3>
              <a href="mailto:pompafacundo4@gmail.com" className="contact-detail">
                <Mail size={19} aria-hidden="true" />
                <span><small>{t.contact.emailLabel}</small>pompafacundo4@gmail.com</span>
              </a>
              <div className="contact-detail">
                <MapPin size={19} aria-hidden="true" />
                <span><small>{t.contact.locationLabel}</small>{t.contact.location}</span>
              </div>
              <div className="contact-detail">
                <Languages size={19} aria-hidden="true" />
                <span><small>{t.about.languagesTitle}</small>{t.education.languages.map((item) => `${item.language} · ${item.level}`).join(' / ')}</span>
              </div>
              <div className="contact-monogram" aria-hidden="true">FP</div>
            </div>
            <div className="reveal"><ContactForm /></div>
          </div>
        </section>
      </main>

      <footer className="minimal-footer section-shell">
        <p>{t.footer.note}</p>
        <a href="#home" aria-label={t.accessibility.scrollTop}>{t.nav.home}<ArrowUp size={15} aria-hidden="true" /></a>
      </footer>
    </>
  )
}

export default App
