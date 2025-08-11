// components/sections/Features.tsx
import Container from '@/components/ui/Container'

const FEATURES = [
  { title: 'BOBER des objets', desc: 'Proposer ou demander un objet à une personne précise. Historique automatique.' },
  { title: 'BOBER des services', desc: 'Proposer son aide (bricolage, jardinage…) ou demander un coup de main ciblé.' },
  { title: 'Événements privés', desc: 'Liste mixte : objets à utiliser/à rendre, consommables à apporter, services ponctuels.' },
  { title: 'Invitations ciblées', desc: 'Invitez 5, 10 ou 20 contacts. Positionnement en un clic : chacun prend un item.' },
  { title: 'Messagerie intégrée', desc: 'Conversation 1-to-1 et chat d’événement pour coordonner rapidement.' },
  { title: 'Rappels & suivi', desc: 'Rappels automatiques bidirectionnels, agenda, historique des échanges.' },
  { title: '100% privé', desc: 'Pas de catalogue public. Vos échanges restent entre vos contacts.' },
  { title: 'Bobies (optionnel)', desc: 'Points d’entraide pour encourager la participation — sans valeur monétaire.' },
]

export default function Features() {
  return (
    <section id="features" className="section">
      <Container>
        <h2 className="text-3xl font-bold">Fonctionnalités clés</h2>
        <p className="mt-3 max-w-2xl text-white/80">BOB structure les échanges privés et l’organisation d’événements entre proches.</p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="card p-6 hover:shadow-glow transition-shadow">
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-white/75">{f.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
