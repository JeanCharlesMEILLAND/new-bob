import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <Container>
        <h2 className="text-3xl font-bold">Tarifs simples</h2>
        <p className="mt-3 max-w-2xl text-white/80">Démarrez gratuitement. Montez en puissance avec votre collectif.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="card p-6">
            <h3 className="text-xl font-bold">Gratuit</h3>
            <p className="mt-1 text-white/70">Pour tester en petit comité</p>
            <ul className="mt-4 space-y-2 text-white/80">
              <li>• Jusqu’à 20 membres</li>
              <li>• 50 objets</li>
              <li>• Rappels & historique</li>
            </ul>
            <Button href="#waitlist" variant="secondary" size="md" className="mt-6 w-full">
              Démarrer
            </Button>
          </div>

          <div className="card p-6 ring-2 ring-brand-500">
            <h3 className="text-xl font-bold">Communauté</h3>
            <p className="mt-1 text-white/70">Pour une asso ou un quartier</p>
            <ul className="mt-4 space-y-2 text-white/80">
              <li>• Jusqu’à 200 membres</li>
              <li>• Illimité objets</li>
              <li>• Messagerie + “Bobies”</li>
            </ul>
            <Button href="#waitlist" variant="primary" size="md" className="mt-6 w-full">
              Rejoindre
            </Button>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-bold">Entreprise</h3>
            <p className="mt-1 text-white/70">Pour équipes & sites multiples</p>
            <ul className="mt-4 space-y-2 text-white/80">
              <li>• Membres illimités</li>
              <li>• Admin & SSO</li>
              <li>• SLA & support</li>
            </ul>
            <Button href="#waitlist" variant="ghost" size="md" className="mt-6 w-full">
              Contacter
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
