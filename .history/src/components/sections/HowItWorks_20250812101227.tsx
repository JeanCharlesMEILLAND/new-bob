// components/sections/HowItWorks.tsx
import Container from '@/components/ui/Container'

export default function HowItWorks() {
  return (
    <section id="how" className="section">
      <Container>
        {/* En-tête */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold">Comment ça marche&nbsp;?</h2>
        </div>

        {/* 3 gestes */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {/* 1 */}
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 h-full">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-white/10 ring-1 ring-white/20 flex items-center justify-center text-white/90">1</div>
              <h3 className="text-lg font-semibold">Choisir un proche</h3>
            </div>
            <p className="mt-3 text-white/75">
              BOB fonctionne avec <strong className="text-white">vos contacts</strong>. Pas d’annuaire public.
            </p>
            <ul className="mt-4 space-y-2 text-white/75">
              <li>• Sélectionnez une personne de votre répertoire</li>
              <li>• Restez en tête-à-tête, en privé</li>
            </ul>
          </div>

          {/* 2 */}
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 h-full">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-white/10 ring-1 ring-white/20 flex items-center justify-center text-white/90">2</div>
              <h3 className="text-lg font-semibold">Envoyer en privé</h3>
            </div>
            <p className="mt-3 text-white/75">
              Proposez ou demandez un <strong className="text-white">objet</strong>, un{' '}
              <strong className="text-white">service</strong>.
            </p>
            <ul className="mt-4 space-y-2 text-white/75">
              <li>• Message direct depuis l’app</li>
              <li>• Détails clairs : quoi, quand, consignes</li>
            </ul>
          </div>

          {/* 3 */}
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 h-full">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-white/10 ring-1 ring-white/20 flex items-center justify-center text-white/90">3</div>
              <h3 className="text-lg font-semibold">Suivi & rappels</h3>
            </div>
            <p className="mt-3 text-white/75">
              BOB crée l’échange et <strong className="text-white">programme les rappels</strong> des deux côtés.
            </p>
            <ul className="mt-4 space-y-2 text-white/75">
              <li>• Agenda & rappels automatiques</li>
              <li>• Historique personnel, simple et clair</li>
            </ul>
          </div>
        </div>

        {/* Bandeau événement (optionnel, très concis) */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
          <p className="text-white/80">
            <strong className="text-white">Événements privés :</strong> invitez un petit groupe, chacun se positionne en un clic,
            l’app crée les échanges et ajoute les rappels automatiquement.
          </p>
        </div>

        {/* Note conformité */}
        <p className="mt-6 text-center text-sm text-white/60">
          100% privé • Aucune transaction financière • Pas de mise en relation publique
        </p>
      </Container>
    </section>
  )
}
