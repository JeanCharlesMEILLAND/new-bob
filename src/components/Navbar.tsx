'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Container from './ui/Container'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

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
        {/* Logo */}
        <Link href="/" aria-label="Accueil" className="flex items-center gap-3">
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
          <Link href="/?lang=en" aria-label="English">
            <Image
              src="/gb.png"
              alt="English"
              width={28}
              height={20}
              className="rounded-sm cursor-pointer hover:scale-105 transition-transform"
            />
          </Link>
          <Link href="/?lang=fr" aria-label="Français">
            <Image
              src="/fr.webp"
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
