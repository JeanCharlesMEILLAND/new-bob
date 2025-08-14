'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Container from './ui/Container'
import { useEffect, useState } from 'react'

export default function Navbar({ lang = 'fr' }: { lang?: 'fr' | 'en' }) {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Crée une URL en changeant juste la langue et en gardant la page actuelle
  const createLangUrl = (newLang: 'fr' | 'en') => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('lang', newLang)
    return `${pathname}?${params.toString()}`
  }

  // Crée une URL vers la home dans la langue choisie
  const createHomeUrl = (currentLang: 'fr' | 'en') => {
    return `/?lang=${currentLang}`
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed inset-x-0 top-0 block z-50 transition-all"
      style={{ backgroundColor: scrolled ? '#EDF3FF' : 'transparent' }}
    >
      <Container className="flex items-center justify-between py-8">
        {/* Logo → renvoie toujours vers la landing page dans la langue actuelle */}
        <Link href={createHomeUrl(lang)} aria-label={lang === 'fr' ? 'Accueil' : 'Home'}>
          <Image
            src="/Group 1000001197.svg"
            alt="Logo BOB"
            width={62}
            height={62}
            priority
          />
        </Link>

        {/* Sélecteur de langue */}
        <div className="flex items-center gap-3">
          <Link href={createLangUrl('en')} aria-label="English">
            <Image
              src="/flags/en.svg"
              alt="English"
              width={28}
              height={20}
              className="rounded-sm cursor-pointer hover:scale-105 transition-transform"
            />
          </Link>
          <Link href={createLangUrl('fr')} aria-label="Français">
            <Image
              src="/flags/fr.svg"
              alt="Français"
              width={28}
              height={20}
              className="rounded-sm cursor-pointer hover:scale-105 transition-transform"
            />
          </Link>
        </div>
      </Container>
    </header>
  )
}
