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
    document.title = translations[language].seo.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', translations[language].seo.description)
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
