export default function Page() {
  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <section className="relative bg-gradient-to-b from-brand/10 to-white">
        <div className="container py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-brand via-accent to-brand bg-clip-text text-transparent">
                Gérez vos échanges
              </span>{" "}
              entre proches
            </h1>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-xl">
              Proposez ou demandez des objets, lancez un coup de main, organisez un événement.
              Tout est privé et visible uniquement par vos contacts invités.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#fonctionnement" className="btn-primary">Découvrir</a>
              <a href="#telecharger" className="btn-ghost">Télécharger l’app</a>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Aucun flux d’argent. Aucun catalogue public. Vos échanges, en toute confiance.
            </p>
          </div>

          {/* Mockup */}
          <div className="relative">
            <div className="aspect-[9/16] w-80 mx-auto rounded-[2.5rem] border border-gray-200 bg-white shadow-xl-soft p-6 overflow-hidden">
              <div className="h-12 rounded-lg bg-brand/10 grid place-items-center text-brand text-sm font-medium mb-4">
                Nouvelle demande → “Perceuse”
              </div>
              <div className="p-4 rounded-xl bg-gray-50 mb-4">
                <p className="text-sm font-medium">À : Jean</p>
                <p className="text-xs text-gray-600">Retour le 12/09 — rappel auto</p>
              </div>
              <div className="p-4 rounded-xl bg-gray-50">
                <p className="text-sm font-medium">Historique</p>
                <p className="text-xs text-gray-600">Paul (remorque) — rendu ✓</p>
              </div>
            </div>
            {/* halos décoratifs */}
            <div className="absolute -z-10 -top-10 -left-10 w-40 h-40 bg-brand/20 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 bottom-0 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* FONCTIONNEMENT */}
      <section id="fonctionnement" className="py-20 border-t border-gray-200">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight">Comment ça marche ?</h2>
            <p className="mt-3 text-gray-800 leading-relaxed">
              Tout est privé, individuel et sur demande. BOB ne met pas en relation d’inconnus et ne gère aucun flux d’argent.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "BOBER des objets",
                desc: "📤 Proposer un objet à une personne précise • 📥 Demander un objet ciblé • Historique automatique."
              },
              {
                title: "BOBER des services",
                desc: "📤 Proposer ton aide (bricolage, jardinage…) • 📥 Demander un coup de main précis • Conversation directe."
              },
              {
                title: "Événements privés",
                desc: "Crée un événement, invite des proches, chat collectif. Chacun se positionne sur la liste (objets, consommables, services)."
              },
              {
                title: "Agenda & rappels",
                desc: "Création automatique d’échanges individuels + rappels dans ton agenda. Retour d’objets facilité."
              },
            ].map((f) => (
              <div key={f.title} className="card">
                <h3 className="font-semibold text-gray-900">{f.title}</h3>
                <p className="mt-2 text-sm text-gray-800 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PENSÉ POUR RESTER PRIVÉ */}
      <section id="prive" className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Pensé pour rester privé</h2>
            <p className="mt-4 text-gray-800 leading-relaxed">
              Votre confidentialité est intégrée au cœur de BOB. Vos échanges restent personnels et ne sont visibles que par les personnes impliquées.
            </p>
            <ul className="mt-6 space-y-3 text-gray-800">
              {[
                "Aucun catalogue public",
                "Aucun profil visible par des inconnus",
                "Pas de mise en relation automatique",
                "Visibilité limitée aux personnes concernées",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 inline-block h-2 w-2 bg-brand rounded-full" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h3 className="font-semibold text-gray-900">Exemples d’infos mémorisées</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-800">
              <li>• Jean a une perceuse</li>
              <li>• Marie fait du jardinage</li>
              <li>• Paul a une remorque</li>
            </ul>
            <p className="mt-4 text-sm text-gray-700">
              Ces infos restent dans <strong>ton</strong> app — invisibles pour les autres.
            </p>
          </div>
        </div>
      </section>

      {/* ÉVÉNEMENTS & CHAT */}
      <section className="py-20">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 card">
            <h3 className="font-semibold text-gray-900">Événements avec chat & liste mixte</h3>
            <p className="mt-3 text-sm text-gray-800 leading-relaxed">
              Invite uniquement les personnes de ton choix. Chat de groupe pour s’organiser.
              Quand quelqu’un se positionne sur “4 chaises” ou “coca-cola”, un échange individuel est créé et ajouté à l’agenda avec rappels.
            </p>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[16/10] rounded-2xl border border-gray-200 bg-white shadow-xl-soft grid place-items-center text-sm text-gray-600">
              Aperçu événement · Liste : <em>chaises, plancha, boissons, aide tonnelle…</em>
            </div>
            <div className="absolute -z-10 -top-8 -right-8 w-36 h-36 bg-accent/25 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="telecharger" className="py-20 text-center">
        <h2 className="text-3xl font-bold tracking-tight">Prêt à ne plus rien oublier ?</h2>
        <p className="mt-3 text-gray-800 leading-relaxed">
          Invite tes contacts, BOBER un échange, discute, reçois des rappels — tout en privé.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="#" className="btn-primary"> App Store</a>
          <a href="#" className="btn-primary bg-green-600 hover:bg-green-700 focus:ring-green-500">Google Play</a>
        </div>
        <p className="mt-4 text-xs text-gray-500">Aucun service financier. Aucune marketplace publique.</p>
      </section>
    </main>
  );
}
