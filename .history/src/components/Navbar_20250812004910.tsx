'use client'

import Link from 'next/link'
import Container from './ui/Container'
import Logo from './Logo'
import Button from './ui/Button'
import { useState, useEffect } from 'react'
import { clsx } from 'clsx'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-50 transition-all',
        scrolled
          ? 'bg-black/50 backdrop-blur ring-1 ring-white/10'
          : 'bg-transparent'
      )}
    >
      <Container className="flex items-center justify-between py-4">
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="Accueil Bob App"
        >
          <Logo />
          <span className="sr-only">Bob App</span>
        </Link>

        <nav
          aria-label="Navigation principale"
          className="hidden md:flex items-center gap-6 text-sm text-white/80"
        >
          <a href="#features" className="hover:text-white">Fonctionnalités</a>
          <a href="#how" className="hover:text-white">Comment ça marche</a>
          <a href="#pricing" className="hover:text-white">Tarifs</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </nav>

        <div className="flex items-center gap-3">
          <Button href="#waitlist" className="hidden md:inline-flex">
            Rejoindre la liste d’attente
          </Button>
        </div>
      </Container>
    </header>
  )
}
