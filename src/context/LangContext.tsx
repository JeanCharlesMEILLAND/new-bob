'use client'
import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Lang = 'fr' | 'en'
type Ctx = { lang: Lang; setLang: (l: Lang) => void }

const LangContext = createContext<Ctx | undefined>(undefined)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('fr')

  // Hydratation: lit la langue mémorisée si présente
  useEffect(() => {
    const saved = typeof window !== 'undefined' ? (localStorage.getItem('lang') as Lang | null) : null
    if (saved === 'fr' || saved === 'en') setLang(saved)
  }, [])

  // Mémorise la langue
  useEffect(() => {
    if (typeof window !== 'undefined') localStorage.setItem('lang', lang)
  }, [lang])

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}
