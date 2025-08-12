import Container from '../ui/Container'

const TESTIMONIALS = [
  {
    name: 'Sarah, présidente d’asso',
    text: 'On a évité l’achat de matériel en doublon. L’interface est simple et tout le monde s’y retrouve.',
  },
  {
    name: 'Karim, voisinage',
    text: 'On se prête outillage et jeux pour les enfants. Les rappels évitent les oublis.',
  },
  {
    name: 'Élodie, RH',
    text: 'Parfait pour animer un collectif interne sur plusieurs sites. Traçabilité légère mais suffisante.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section pt-12 md:pt-16">
      <Container>
        <h2 className="text-3xl font-bold">Ils en parlent</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="card p-6">
              <blockquote className="text-white/90">&ldquo;{t.text}&rdquo;</blockquote>
              <figcaption className="mt-4 text-white/60">— {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  )
}
