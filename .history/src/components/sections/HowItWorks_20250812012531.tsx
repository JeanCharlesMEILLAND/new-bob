// components/sections/HowItWorks.tsx
import Container from '../ui/Container'

const STEPS = [
  { title: 'BOBER un objet', desc: 'Choisissez un contact → proposez ou demandez → validez → suivi + rappels.' },
  { title: 'BOBER un service', desc: 'Formulez le besoin (date, durée) → envoi ciblé → confirmation → rappel.' },
  { title: 'Créer un événement', desc: 'Invitez un petit groupe → liste mixte (objets, consommables, services) → chat.' },
  { title: 'Se positionner', desc: 'Cliquez un item → BOB crée l’échange individuel + ajoute un rappel à votre agenda.' },
]

export default function HowItWorks() {
  return (
    <section id="how" className="section">
      <Container>
        <h2 className="text-3xl font-bold">Comment ça marche ?</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {STEPS.map((s, i) => (
            <div key={s.title} className="card p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">{i+1}</div>
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <p className="mt-2 text-white/75">{s.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
