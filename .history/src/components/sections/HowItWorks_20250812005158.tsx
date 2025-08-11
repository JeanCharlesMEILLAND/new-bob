import Container from '@/components/ui/Container'

const STEPS = [
  { title: 'Créez votre collectif', desc: 'Voisins, asso, équipe — avec validation des membres.' },
  { title: 'Publiez vos objets', desc: 'Ajoutez photos, dispo et conditions simples.' },
  { title: 'Empruntez en 2 clics', desc: 'Demande, validation, rendez-vous — c’est tracé.' },
  { title: 'Retour & feedback', desc: 'Rappels automatiques, historique et “Bobies”.' },
]

export default function HowItWorks() {
  return (
    <section id="how" className="section">
      <Container>
        <h2 className="text-3xl font-bold">Comment ça marche ?</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {STEPS.map((s, i) => (
            <div key={s.title} className="card p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
                {i + 1}
              </div>
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <p className="mt-2 text-white/75">{s.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
