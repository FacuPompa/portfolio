import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { translations, type Language } from '../content'
import { LanguageContext } from './language-context'

const getInitialLanguage = (): Language => {
  const saved = localStorage.getItem('portfolio-language')
  if (saved === 'es' || saved === 'en') return saved
  return navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)

  useEffect(() => {
    localStorage.setItem('portfolio-language', language)
    document.documentElement.lang = language
    const { title, description } = translations[language].seo
    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', language === 'es' ? 'es_AR' : 'en_US')
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title)
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description)
  }, [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage((current) => (current === 'es' ? 'en' : 'es')),
      t: translations[language],
    }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
