'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Container from './ui/Container'
import { clsx } from 'clsx'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-50 transition-all',
        scrolled ? 'bg-black/50 backdrop-blur ring-1 ring-white/10' : 'bg-transparent'
      )}
    >
      <Container className={clsx('flex items-center justify-between', scrolled ? 'py-3' : 'py-4')}>
        {/* Logo + texte */}
        <Link href="/" aria-label="Accueil" className="flex items-center gap-3">
          <Image
            src="/bob1.png"
            alt="Logo BOB"
            width={48} // ↑ plus grand
            height={48}
            className="rounded-lg ring-1 ring-white/10"
            priority
          />
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-bold text-white tracking-wide">BOB</span>
            <span className="text-[11px] uppercase tracking-[1.5px] text-white/70">Borrow and Back</span>
          </div>
        </Link>

        {/* Nav desktop */}
        <nav
          aria-label="Navigation principale"
          className="hidden md:flex items-center gap-7 text-sm text-white/80"
        >
          <a href="#features" className="hover:text-white">Fonctionnalités</a>
          <a href="#how" className="hover:text-white">Comment ça marche</a>
          <a href="#events" className="hover:text-white">Événements</a>
          <a href="#privacy" className="hover:text-white">Confidentialité</a>
          <a
            href="#download"
            className="rounded-xl2 bg-white text-ink px-4 py-2 font-semibold ring-1 ring-white/20 hover:bg-white/90 transition"
          >
            Télécharger
          </a>
        </nav>

        {/* Menu mobile */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-xl2 px-3 py-2 ring-1 ring-white/10 bg-white/5 text-white/90"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-white/90" />
            <span className="block h-0.5 w-5 bg-white/90" />
            <span className="block h-0.5 w-5 bg-white/90" />
          </div>
        </button>
      </Container>

      {/* Menu mobile déroulant */}
      <div
        className={clsx(
          'md:hidden overflow-hidden transition-[max-height] duration-300 ease-out',
          open ? 'max-h-96' : 'max-h-0'
        )}
      >
        <div className="container-px pb-4 pt-1">
          <nav className="flex flex-col gap-2 text-sm text-white/90">
            <a href="#features" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 hover:bg-white/5">
              Fonctionnalités
            </a>
            <a href="#how" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 hover:bg-white/5">
              Comment ça marche
            </a>
            <a href="#events" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 hover:bg-white/5">
              Événements
            </a>
            <a href="#privacy" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 hover:bg-white/5">
              Confidentialité
            </a>
            <a
              href="#download"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex items-center justify-center rounded-xl2 bg-white text-ink px-4 py-2 font-semibold ring-1 ring-white/20 hover:bg-white/90 transition"
            >
              Télécharger
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
