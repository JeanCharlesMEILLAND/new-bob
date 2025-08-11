import Container from '@/components/ui/Container'

export default function Showcase() {
  return (
    <section className="section">
      <Container>
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Pensé pour l’usage quotidien</h2>
            <p className="mt-3 text-white/80">
              Rappels discrets, timeline claire, et un catalogue agréable à parcourir.
              Remplacez les groupes de messagerie par une interface structurée, avec historique et validation.
            </p>
            <ul className="mt-6 space-y-2 text-white/80">
              <li>• Accès par lien/QR au collectif</li>
              <li>• Notifications de retour</li>
              <li>• Historique de prêts/retours</li>
              <li>• Messagerie légère intégrée</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-2">
            <div className="aspect-[9/16] w-full rounded-xl2 bg-black/40 ring-1 ring-white/10 flex items-center justify-center text-white/60">
              <span className="text-sm">Mockup mobile — remplacez par un screen</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
