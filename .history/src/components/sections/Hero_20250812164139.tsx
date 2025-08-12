// components/sections/Hero.tsx
import Image from 'next/image'
import Container from '@/components/ui/Container'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-4"> {/* ↓ avant pt-48, donc badge + haut */}
      {/* Fonds décoratifs */}
      <div className="absolute inset-0 -z-10 bg-hero-radial bg-no-repeat opacity-70" />
      <div className="absolute inset-0 -z-20 bg-grid opacity-[0.25] [mask-image:radial-gradient(circle at center,black,transparent_70%)]" />

      <Container className="text-center  space-y-10">
        {/* Badge conformité */}
        <div className="-mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
          Usage privé entre proches • Aucune transaction financière • Pas de mise en relation publique
        </div>

        {/* Titre principal */}
        <h1 className="mt-22 text-5xl font-extrabold tracking-tight sm:text-6xl leading-tight">
          <span className="bg-gradient-to-tr from-[#0F55C5] to-[#468BFF] bg-clip-text text-transparent">Bober</span>, c’est partager, aider, organiser…
        </h1>

        {/* Sous-titre */}
        <p className="mx-auto max-w-3xl text-lg text-white/80 leading-relaxed">
          Gérez vos échanges d’<strong className="text-white">objets</strong>, de{' '}
          <strong className="text-white">services</strong> et vos{' '}
          <strong className="text-white">événements</strong>  — en toute simplicité et confidentialité,
          uniquement avec vos contacts.
        </p>

        {/* Badges stores */}
        <div id="download" className="flex flex-wrap items-center justify-center gap-5 pt-4">
          <a
            href="https://apps.apple.com/app/idXXXXXXXXX"
            aria-label="Télécharger BOB sur l’App Store"
            className="inline-flex"
            target="_blank" rel="noopener noreferrer"
          >
            <Image src="/app-badges/appstore.svg" alt="Disponible sur l’App Store" width={180} height={54} priority />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.bobapp"
            aria-label="Télécharger BOB sur Google Play"
            className="inline-flex"
            target="_blank" rel="noopener noreferrer"
          >
            <Image src="/app-badges/playstore.svg" alt="Disponible sur Google Play" width={190} height={54} priority />
          </a>
        </div>

        {/* Légende rapprochée */}
        <p className="text-base text-black/60 -mt-2">Disponible sur iOS et Android</p>


         {/* Visuel placeholder */}
          <div className='flex justify-center mt-10'>

              <Image src="/central.png" alt="Aperçu de l’événement" width={600} height={400} className="" />

          </div>
       

      </Container>
    </section>
  )
}
