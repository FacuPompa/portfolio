import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { ThemeContext, type Theme } from './theme-context'

const getInitialTheme = (): Theme => {
  try {
    const savedTheme = localStorage.getItem('portfolio-editorial-theme')
    if (savedTheme === 'dark' || savedTheme === 'light') return savedTheme
  } catch {
    // The theme still works when storage is unavailable.
  }
  return 'dark'
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('portfolio-editorial-theme', theme)
    } catch {
      // Keep the selected theme for this session even if storage is blocked.
    }
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#181818' : '#ffffff')
  }, [theme])

  const value = useMemo(
    () => ({ theme, toggleTheme: () => setTheme((current) => (current === 'dark' ? 'light' : 'dark')) }),
    [theme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
