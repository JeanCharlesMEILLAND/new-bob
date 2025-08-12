// components/sections/Features.tsx
import Container from '@/components/ui/Container'

/** Icônes minimalistes (stroke = currentColor) */
const IconShield = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M12 3 4.5 6v6.5c0 4.2 3.3 7.6 7.5 8.5 4.2-.9 7.5-4.3 7.5-8.5V6L12 3Z" stroke="currentColor" strokeWidth="1.6" />
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
const IconPeople = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
    <path d="M14 11a3 3 0 1 0 0-6" stroke="currentColor" strokeWidth="1.6" />
    <path d="M2 20a6 6 0 0 1 12 0" stroke="currentColor" strokeWidth="1.6" />
    <path d="M14 20a6 6 0 0 1 8 0" stroke="currentColor" strokeWidth="1.6" />
  </svg>
)
const IconBoxTool = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M3 7l9 4 9-4M3 7l9-4 9 4M3 7v10l9 4 9-4V7" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
  </svg>
)
const IconCalendarBell = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
    <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M3 8h18" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M9 15a3 3 0 0 1 6 0v1l1 2H8l1-2v-1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
)
const IconChat = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M21 12a7 7 0 0 1-7 7H7l-4 3V12a7 7 0 0 1 7-7h4a7 7 0 0 1 7 7Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
    <path d="M8.5 11h7M8.5 14h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
)
const IconListEvent = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
    <rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M4 9h16M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M8 12h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <circle cx="17" cy="15" r="1.5" stroke="currentColor" strokeWidth="1.6"/>
  </svg>
)

const FEATURES = [
  {
    title: 'Entre proches uniquement',
    desc: 'Fonctionne avec vos contacts du téléphone. Pas d’annuaire public, pas d’inconnus.',
    icon: <IconPeople />,
  },
  {
    title: 'Objets & services, simplement',
    desc: 'Proposer / demander en privé : un geste, un “OK”, et c’est suivi.',
    icon: <IconBoxTool />,
  },
  {
    title: 'Événements privés',
    desc: 'Invitez un petit groupe. Liste mixte (objets, consommables, services) et positionnement en 1 clic.',
    icon: <IconListEvent />,
  },
  {
    title: 'Rappels & agenda',
    desc: 'Rappels automatiques des deux côtés et ajout à l’agenda pour éviter les oublis.',
    icon: <IconCalendarBell />,
  },
  {
    title: 'Messagerie intégrée',
    desc: '1-to-1 pour les échanges, chat d’événement pour coordonner rapidement.',
    icon: <IconChat />,
  },
  {
    title: 'Confidentialité par design',
    desc: 'Aucune transaction financière. Aucune mise en relation publique. Historique personnel.',
    icon: <IconShield />,
  },
]

export default function Features() {
  return (
    <section id="features" className="section pb-12 md:pb-16">
      <Container>
        {/* En-tête */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold">Fonctionnalités clés</h2>
          <p className="mt-3 text-white/80">
            BOB structure les échanges privés entre proches — objets, services et événements.
          </p>
        </div>

        {/* Cartes */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <article key={f.title} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 hover:shadow-glow transition-shadow">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 text-white">
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
              </div>
              <p className="mt-3 text-white/75">{f.desc}</p>
            </article>
          ))}
        </div>

        {/* Bandeau conformité (discret) */}
        <p className="mt-8 text-center text-sm text-white/60">
          Usage privé entre proches • Aucune transaction financière • Pas de mise en relation publique
        </p>
      </Container>
    </section>
  )
}
