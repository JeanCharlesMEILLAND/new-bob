'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Container from './ui/Container'
import { clsx } from 'clsx'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const MENU_ID = 'mobile-nav'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Ferme au resize et gère le scroll lock quand le menu est ouvert
  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [open])

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-50 transition-all',
        scrolled ? 'bg-black/50 backdrop-blur ' : 'bg-transparent'
      )}
    >
      <Container className={clsx('flex items-center justify-between', scrolled ? 'py-3' : 'py-4')}>
        {/* Logo + texte */}
        <Link href="/" aria-label="Accueil" className="flex items-center gap-3">
          <Image
            src="/bob1.png"
            alt="Logo BOB"
            width={62}
            height={62}
            className=""
            priority
          />
        <div className="flex flex-col leading-tight">
            <span className="text-lg font-bold text-white tracking-wide">Borrow and Back</span>
          </div>
        </Link>

        {/* Nav desktop */}
        <nav aria-label="Navigation principale" className="hidden md:flex items-center gap-7 text-sm text-white/80">
          <a href="#features" className="hover:text-white">Fonctionnalités</a>
          <a href="#how" className="hover:text-white">Comment ça marche</a>
          <a href="#events" className="hover:text-white">Événements</a>
          <a href="#privacy" className="hover:text-white">Confidentialité</a>
        </nav>

        {/* Bouton menu mobile */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-xl2 px-3 py-2 ring-1 ring-white/10 bg-white/5 text-white/90"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-controls={MENU_ID}
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-white/90" />
            <span className="block h-0.5 w-5 bg-white/90" />
            <span className="block h-0.5 w-5 bg-white/90" />
          </div>
        </button>
      </Container>

      {/* Overlay + panneau mobile */}
      {/* Overlay sombre flouté pour lisibilité, sous la barre (z-40) */}
      <div
        className={clsx(
          'md:hidden fixed inset-0 z-40 transition-opacity',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      </div>

      {/* Panneau du menu (sous la navbar), fond opaque pour lecture */}
      <div
        id={MENU_ID}
        className={clsx(
          'md:hidden fixed inset-x-0 top-0 z-50 pt-20', // pt-20 pour laisser la navbar visible
          open ? 'pointer-events-auto' : 'pointer-events-none'
        )}
      >
        <div
          className={clsx(
            'mx-4 rounded-2xl bg-neutral-900/95 ring-1 ring-white/10 shadow-lg transition-[max-height] duration-300 ease-out overflow-hidden',
            open ? 'max-h-96' : 'max-h-0'
          )}
        >
          <nav aria-label="Navigation mobile" className="flex flex-col gap-1 p-2 text-sm text-white/90">
            <a href="#features" onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 hover:bg-white/5">
              Fonctionnalités
            </a>
            <a href="#how" onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 hover:bg-white/5">
              Comment ça marche
            </a>
            <a href="#events" onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 hover:bg-white/5">
              Événements
            </a>
            <a href="#privacy" onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 hover:bg-white/5">
              Confidentialité
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
