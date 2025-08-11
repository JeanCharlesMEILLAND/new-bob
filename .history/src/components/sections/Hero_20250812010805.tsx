import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'

export default function Hero() {
  return (
    <section className="relative section pt-36">
      <div className="absolute inset-0 -z-10 bg-hero-radial bg-no-repeat opacity-70" />
      <div className="absolute inset-0 -z-20 bg-grid opacity-[0.25] [mask-image:radial-gradient(circle at center,black,transparent_70%)]" />
      <Container className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
          Nouvelle version — Septembre 2025
        </div>
        <h1 className="mt-6 text-5xl font-extrabold tracking-tight sm:text-6xl">
          Faites circuler les <span className="gradient-text">objets</span>, pas l’argent.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
          Bob App permet à vos communautés (voisinage, assos, équipes) de{' '}
          <strong className="text-white">partager et emprunter</strong> en toute simplicité,
          avec rappels intelligents et historique.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href="#waitlist" ariaLabel="Rejoindre la liste d’attente" variant="primary" size="lg">
            Rejoindre la liste d’attente
          </Button>
          <Button href="#features" variant="ghost" size="lg" className="underline-offset-4">
            Voir les fonctionnalités
          </Button>
        </div>

        <div
          aria-hidden="true"
          className="mx-auto mt-14 max-w-5xl rounded-2xl border border-white/10 bg-white/5 p-2 shadow-glow"
        >
          <div className="aspect-[16/9] w-full rounded-xl2 bg-black/40 ring-1 ring-white/10 flex items-center justify-center text-white/60">
            <span className="text-sm">Aperçu de l’app (remplacez par une capture)</span>
          </div>
        </div>
      </Container>
    </section>
  )
}
