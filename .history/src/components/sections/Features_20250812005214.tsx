import Container from '@/components/ui/Container'

const FEATURES = [
  {
    title: 'Collectifs privés ou publics',
    desc: 'Créez un groupe pour votre quartier, votre asso ou votre entreprise. Invitez en 1 lien.',
  },
  {
    title: 'Catalogue & demandes en 2 clics',
    desc: 'Publiez vos objets, demandez un emprunt et validez en un geste.',
  },
  {
    title: 'Rappels intelligents & historique',
    desc: 'Ne perdez plus la trace : notifications de retour, timeline des prêts.',
  },
  {
    title: 'Confiance & validation des membres',
    desc: 'Espace sûr : validation d’entrée, profils, et piste d’audit minimaliste.',
  },
  {
    title: 'Messagerie intégrée',
    desc: 'Coordonnez les échanges sans quitter Bob.',
  },
  {
    title: 'Score “Bobies”',
    desc: 'Récompensez les bons comportements et l’entraide.',
  },
]

export default function Features() {
  return (
    <section id="features" className="section">
      <Container>
        <h2 className="text-3xl font-bold">Fonctionnalités clés</h2>
        <p className="mt-3 max-w-2xl text-white/80">
          Tout ce qu’il faut pour fluidifier les échanges dans vos communautés.
        </p>

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
