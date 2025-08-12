// components/sections/Hero.tsx
import Image from 'next/image'
import Container from '@/components/ui/Container'
import {FeaturesCard} from "@/components/FeaturesCard";

export default function Hero() {
  return (
      <section className="relative pt-28 pb-4"> {/* ↓ avant pt-48, donc badge + haut */}

        {/* Hero background image - absolute positioned on right, vertically centered */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-5 block">
          <Image
              src="/circle.png"
              alt=""
              width={1800}
              height={1800}
              className="h-screen scale-150 w-auto object-contain"
          />
        </div>

        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_70%_at_center,white_20%,transparent_70%)]"></div>

        {/* Fonds décoratifs */}
        <div className="absolute inset-0 -z-10 bg-hero-radial bg-no-repeat opacity-70" />
        <div className="absolute inset-0 -z-20 bg-grid opacity-[0.25] [mask-image:radial-gradient(circle at center,black,transparent_70%)]" />

        <Container className="text-center space-y-10 relative z-10">
          {/* Badge conformité */}
          <div className="-mt-6 inline-flex items-center gap-2 rounded-full border border-accent px-4 py-2 text-sm text-accent">
            Usage privé entre proches • Aucune transaction financière • Pas de mise en relation publique
          </div>

          {/* Titre principal */}
          <h1 className="mt-22 text-5xl tracking-tight sm:text-6xl leading-tight text-accent">
            <span className="bg-gradient-to-tr from-[#00C9F7] to-[#166AF6] bg-clip-text text-transparent font-extrabold">Bober</span>, c&#39;est partager, aider, organiser…
          </h1>

          {/* Sous-titre */}
          <p className="mx-auto max-w-3xl text-lg text-accent leading-relaxed">
            Gérez vos échanges d&#39;<strong className="text-accent">objets</strong>, de{' '}
            <strong className="text-accent">services</strong> et vos{' '}
            <strong className="text-accent">événements</strong>  — en toute simplicité et confidentialité,
            uniquement avec vos contacts.
          </p>

          {/* Légende rapprochée */}
          <p className="text-base text-accent -mt-2">Disponible sur iOS et Android</p>

          {/* Badges stores */}
          <div id="download" className="flex flex-wrap items-center justify-center gap-5 pt-4">
            <a
                href="https://apps.apple.com/app/idXXXXXXXXX"
                aria-label="Télécharger BOB sur l'App Store"
                className="inline-flex"
                target="_blank" rel="noopener noreferrer"
            >
              <Image src="/app-badges/appstore.svg" alt="Disponible sur l'App Store" width={180} height={54} priority />
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

          <div className='flex justify-center items-center mt-10'>
            <div className={"flex flex-col flex-1 gap-8 justify-center"}>
              <FeaturesCard className={"ml-5"} icon={"/icons/Entre proches.svg"} title={"Entre proches uniquement"} description={"Fonctionne avec les contacts de votre téléphone. Pas d’annuaire public, pas d’inconnus."} />
              <FeaturesCard className={"mr-5"} icon={"/icons/Frame 1597880141.svg"} title={"Messagerie intégrée"} description={"Discutez en tête-à-tête pour vos échanges ou utilisez le chat d’événement pour coordonner un groupe."} />
              <FeaturesCard className={"ml-5"} icon={"/icons/Frame 1597880138.svg"} title={"Échanges d’objets & services"} description={"Proposez ou demandez en privé : un geste, une confirmation… et l’échange est suivi automatiquement."} />
            </div>
            <Image src="/central.png" alt="Aperçu de l'événement"  width={400} height={400} className="flex-1" />
            <div className={"flex flex-col flex-1 gap-8 justify-center"}>
              <FeaturesCard className={"mr-5"} icon={"/icons/Frame 1597880140.svg"} title={"Rappels & agenda"} description={"Rappels automatiques des deux côtés et ajout à l’agenda pour éviter les oublis."} />
              <FeaturesCard className={"ml-5"} icon={"/icons/Frame 1597880139.svg"} title={"Événements privés"} description={"Invitez un petit groupe. Liste mixte (objets, consommables, services) et positionnement en 1 clic."} />
              <FeaturesCard className={"m-5"} icon={"/icons/Frame 1597880142.svg"} title={"Confidentialité intégrée"} description={"Aucune transaction financière. Aucune mise en relation publique. Historique personnel."} />
            </div>
          </div>

        </Container>
      </section>
  )
}
