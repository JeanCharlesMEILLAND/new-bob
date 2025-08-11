// components/sections/Hero.tsx
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'

export default function Hero() {
  return (
    <section className="relative section pt-36">
      <div className="absolute inset-0 -z-10 bg-hero-radial bg-no-repeat opacity-70" />
      <div className="absolute inset-0 -z-20 bg-grid opacity-[0.25] [mask-image:radial-gradient(circle at center,black,transparent_70%)]" />
      <Container className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
          Échanges privés entre proches — objets & services
        </div>
        <h1 className="mt-6 text-5xl font-extrabold tracking-tight sm:text-6xl">
          BOBER&nbsp;: <span className="gradient-text">proposer</span> ou <span className="gradient-text">demander</span> en privé.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
          Gérez vos prêts d’<strong className="text-white">objets</strong>, vos <strong className="text-white">coups de main</strong> et vos <strong className="text-white">événements</strong> en cercle rapproché.
          Invitations ciblées, messagerie intégrée, rappels automatiques, historique clair.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href="#waitlist" variant="primary" size="lg">Essayer BOB</Button>
          <Button href="#features" variant="ghost" size="lg" className="underline-offset-4">Voir comment ça marche</Button>
        </div>
      </Container>
    </section>
  )
}
