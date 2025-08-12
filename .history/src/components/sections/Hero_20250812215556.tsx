// components/sections/Hero.tsx
import Image from "next/image";
import Container from "@/components/ui/Container";
import Features from "@/components/sections/Features";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-4">
      {" "}
      {/* ↓ avant pt-48, donc badge + haut */}
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
        <div
  className="
    -mt-6 inline-flex items-center gap-2 rounded-full border border-accent
    px-2 sm:px-4 py-1 sm:py-2
    text-[10px] sm:text-sm
    text-accent/70 sm:text-accent
    whitespace-nowrap
  "
>
  Usage privé entre proches • Aucune transaction financière • Pas de mise en relation publique
</div>

        {/* Titre principal */}
        <h1 className="mt-22 text-5xl tracking-tight sm:text-6xl leading-tight text-accent">
          <span className="bg-gradient-to-tr from-[#00C9F7] to-[#166AF6] bg-clip-text text-transparent font-extrabold">
            Bober
          </span>
          , c&#39;est partager, aider, organiser…
        </h1>

        {/* Sous-titre */}
        <p className="mx-auto max-w-3xl text-lg text-accent leading-relaxed">
          Gérez vos échanges d&#39;
          <strong className="text-accent">objets</strong>, de{" "}
          <strong className="text-accent">services</strong> et vos{" "}
          <strong className="text-accent">événements</strong> — en toute
          simplicité et confidentialité, uniquement avec vos contacts.
        </p>

        {/* Légende rapprochée */}
        <p className="text-base text-accent text- -mt-2">
          Disponible sur iOS et Android
        </p>

        {/* Badges stores */}
        <div
          id="download"
          className="flex flex-wrap items-center justify-center gap-5 pt-4"
        >
          <a
            href="https://apps.apple.com/app/idXXXXXXXXX"
            aria-label="Télécharger BOB sur l'App Store"
            className="inline-flex"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/app-badges/appstore.svg"
              alt="Disponible sur l'App Store"
              width={180}
              height={54}
              priority
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.bobapp"
            aria-label="Télécharger BOB sur Google Play"
            className="inline-flex"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/app-badges/playstore.svg"
              alt="Disponible sur Google Play"
              width={190}
              height={54}
              priority
            />
          </a>
        </div>
      </Container>
    </section>
  );
}
