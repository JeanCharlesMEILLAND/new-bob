// components/sections/HowItWorks.tsx
import Container from '@/components/ui/Container'

const steps = [
  {
    n: '1',
    icon: '👥',
    title: 'Choisir un proche',
    desc: "BOB fonctionne avec vos contacts. Pas d’annuaire public, pas d’inconnus.",
    tips: ['Sélection depuis le répertoire', 'Conversation en tête-à-tête'],
  },
  {
    n: '2',
    icon: '📤',
    title: 'Envoyer en privé',
    desc: 'Proposez ou demandez un objet ou un service. Simple, clair, ciblé.',
    tips: ['Détails : quoi, quand, consignes', 'Envoi direct (SMS, messagerie)'],
  },
  {
    n: '3',
    icon: '✅',
    title: 'Confirmer & suivre',
    desc: 'Un “OK” suffit. BOB crée l’échange et lance le suivi.',
    tips: ['Statut partagé', 'Historique personnel automatique'],
  },
  {
    n: '4',
    icon: '⏰',
    title: 'Rappels automatiques',
    desc: 'Les deux côtés reçoivent un rappel au bon moment.',
    tips: ['Ajout à l’agenda', 'Retour sans oubli'],
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="section">
      <Container>
        {/* header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold">Comment ça marche&nbsp;?</h2>
          <p className="mt-3 text-white/80">
            Un flux simple, 100% privé : <span className="text-white">choisir</span> →{' '}
            <span className="text-white">envoyer</span> → <span className="text-white">confirmer</span> →{' '}
            <span className="text-white">laisser BOB rappeler</span>.
          </p>
        </div>

        {/* timeline */}
        <div className="relative mx-auto mt-12 max-w-4xl">
          {/* ligne verticale */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10"
          />
          <ul className="space-y-10">
            {steps.map((s, i) => {
              const left = i % 2 === 0
              return (
                <li key={s.n} className="relative">
                  {/* point */}
                  <div className="absolute left-1/2 top-2 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-white ring-2 ring-brand-500" />
                  <div
                    className={[
                      'grid items-stretch gap-6 md:grid-cols-2',
                      left ? '' : 'md:[&>div:first-child]:order-2',
                    ].join(' ')}
                  >
                    {/* bloc texte */}
                    <div className="card p-6">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
                          <span aria-hidden className="text-lg">{s.icon}</span>
                        </div>
                        <h3 className="text-lg font-semibold">
                          {s.n}. {s.title}
                        </h3>
                      </div>
                      <p className="mt-3 text-white/75">{s.desc}</p>
                      <ul className="mt-4 space-y-1.5 text-white/75">
                        {s.tips.map(t => (
                          <li key={t}>• {t}</li>
                        ))}
                      </ul>
                    </div>

                    {/* vignette décorative */}
                    <div className="hidden md:block">
                      <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-3">
                        <div className="flex h-full items-center justify-center rounded-xl2 bg-black/30 ring-1 ring-white/10 text-white/60">
                          <span className="text-sm">
                            Aperçu — {s.title.toLowerCase()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>

        {/* callout événements */}
        <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
          <p className="text-white/80">
            <strong className="text-white">Événements privés</strong> : invitez un petit groupe, chacun se positionne
            en 1 clic (objets, consommables, services). BOB crée les échanges et ajoute les rappels automatiquement.
          </p>
        </div>

        {/* note conformité */}
        <p className="mt-6 text-center text-sm text-white/60">
          Usage privé entre proches • Aucune transaction financière • Pas de mise en relation publique
        </p>
      </Container>
    </section>
  )
}
