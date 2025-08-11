// components/sections/Events.tsx
import Container from '@/components/ui/Container'

export default function Events() {
  return (
    <section className="section">
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Événements privés avec liste mixte</h2>
            <p className="mt-3 text-white/80">
              Créez une liste combinant <strong className="text-white">objets à utiliser (à rendre)</strong>,
              <strong className="text-white"> consommables à apporter</strong> et
              <strong className="text-white"> services ponctuels</strong>. Invitez un petit groupe. Chacun se positionne en un clic.
            </p>
            <ul className="mt-6 space-y-2 text-white/80">
              <li>• Invitations ciblées (5, 10, 20 contacts)</li>
              <li>• Chat collectif d’événement</li>
              <li>• Positionnement en un clic → échange individuel auto-créé</li>
              <li>• Ajout dans l’agenda + rappels automatiques bidirectionnels</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-2">
            <div className="aspect-[16/10] w-full rounded-xl2 bg-black/40 ring-1 ring-white/10 flex items-center justify-center text-white/60">
              <span className="text-sm">Mockup liste mixte (objets • consommables • services)</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
