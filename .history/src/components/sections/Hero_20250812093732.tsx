// components/sections/Hero.tsx
import Image from 'next/image'
import Container from '@/components/ui/Container'

export default function Hero() {
  return (
    <section className="relative section pt-36">
      {/* fonds décoratifs */}
      <div className="absolute inset-0 -z-10 bg-hero-radial bg-no-repeat opacity-70" />
      <div className="absolute inset-0 -z-20 bg-grid opacity-[0.25] [mask-image:radial-gradient(circle at center,black,transparent_70%)]" />

      <Container className="text-center">
        {/* badge conformité / positionnement */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
          Usage privé entre proches • Aucune transaction financière • Pas de mise en relation publique
        </div>

        {/* Titre principal */}
        <h1 className="mt-6 text-5xl font-extrabold tracking-tight sm:text-6xl">
          Bober — Partager, aider, organiser… <br className="hidden sm:block" /> uniquement avec vos proches
        </h1>

        {/* Sous-titre */}
        <p className="mx-auto mt-6 max-w-3xl text-lg text-white/80">
          Gérez vos échanges d’<strong className="text-white">objets</strong>, de{' '}
          <strong className="text-white">services</strong> et vos{' '}
          <strong className="text-white">événements</strong> avec vos proches — en toute simplicité et confidentialité,
          uniquement avec vos contacts.
        </p>

        {/* Mini “pills” de fonctions clés */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm text-white/80">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Objets — proposer / demander</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Services — coup de main ciblé</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
            Événements — liste mixte & positionnement en 1 clic
          </span>
        </div>

        {/* Badges stores */}
        <div id="download" className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://apps.apple.com/app/idXXXXXXXXX"
            aria-label="Télécharger BOB sur l’App Store"
            className="inline-flex"
          >
            <Image src="/app-badges/appstore.svg" alt="Disponible sur l’App Store" width={160} height={48} priority />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.bobapp"
            aria-label="Télécharger BOB sur Google Play"
            className="inline-flex"
          >
            <Image src="/app-badges/playstore.svg" alt="Disponible sur Google Play" width={170} height={48} priority />
          </a>
        </div>
        <p className="mt-2 text-sm text-white/60">Disponible sur iOS et Android</p>

        {/* Cadre de visuel */}
        <div
          aria-hidden="true"
          className="mx-auto mt-14 max-w-5xl rounded-2xl border border-white/10 bg-white/5 p-2 shadow-glow"
        >
          <div className="aspect-[16/9] w-full rounded-xl2 bg-black/40 ring-1 ring-white/10 flex items-center justify-center text-white/60">
            <span className="text-sm">Aperçu — remplacez par une capture de l’app (écran Événements recommandé)</span>
          </div>
        </div>
      </Container>
    </section>
  )
}
