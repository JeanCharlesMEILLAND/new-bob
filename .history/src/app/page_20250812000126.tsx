export default function Page() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
              BOBER tes échanges <span className="text-indigo-700">entre proches</span>
            </h1>
            <p className="mt-6 text-lg text-gray-800 leading-relaxed">
              BOB est ton carnet privé pour <strong>proposer</strong> ou <strong>demander</strong> des objets,
              des coups de main ou organiser des événements — le tout en privé et uniquement avec tes contacts invités.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#fonctionnement"
                className="px-6 py-3 rounded-md bg-indigo-700 text-white font-semibold hover:bg-indigo-800 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Découvrir
              </a>
              <a
                href="#telecharger"
                className="px-6 py-3 rounded-md border border-gray-300 text-gray-800 font-semibold hover:bg-gray-50 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Télécharger l’app
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[9/16] w-72 sm:w-80 md:w-96 mx-auto rounded-3xl border border-gray-300 bg-white shadow-lg p-4">
              <div className="h-10 rounded-lg bg-indigo-100 grid place-items-center text-indigo-800 text-sm font-medium">
                Nouvelle demande → “Perceuse”
              </div>
              <div className="mt-4 p-4 rounded-lg bg-gray-50">
                <p className="text-sm font-medium text-gray-900">À : Jean</p>
                <p className="text-xs text-gray-700">Retour le 12/09 — rappel auto</p>
              </div>
              <div className="mt-4 p-4 rounded-lg bg-gray-50">
                <p className="text-sm font-medium text-gray-900">Historique</p>
                <p className="text-xs text-gray-700">Paul (remorque) — rendu ✓</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fonctionnement */}
      <section id="fonctionnement" className="py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Comment ça marche ?</h2>
            <p className="mt-3 text-gray-800 leading-relaxed">
              Tout est privé, individuel et sur demande. BOB ne met pas en relation d’inconnus et ne gère aucun flux d’argent.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "BOBER des objets",
                desc: "📤 Proposer un objet à une personne précise • 📥 Demander un objet à une personne précise • Historique automatique.",
              },
              {
                title: "BOBER des services",
                desc: "📤 Proposer ton aide (bricolage, jardinage…) • 📥 Demander un coup de main précis • Communication directe.",
              },
              {
                title: "Événements (liste mixte & chat)",
                desc: "Crée un événement, invite des proches, discute en chat de groupe. Chacun se positionne sur la liste : création auto d’un échange individuel + ajout à l’agenda avec rappels.",
              },
              {
                title: "Messagerie & rappels",
                desc: "Discussions 1-to-1 et chat collectif pour les événements. Rappels automatiques et historique clair.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-gray-300 bg-white p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-semibold text-gray-900">{f.title}</h3>
                <p className="mt-2 text-sm text-gray-800 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privé par design */}
      <section id="prive" className="py-20 bg-gray-50 border-y border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Privé par design</h2>
            <p className="mt-4 text-gray-800 leading-relaxed">
              La confidentialité est intégrée dès la conception de BOB. Vos échanges sont protégés par défaut :
            </p>
            <ul className="mt-6 space-y-3 text-gray-800">
              {[
                "Aucun catalogue public",
                "Aucun profil “ce que j’ai à proposer”",
                "Aucune mise en relation d’inconnus",
                "Chaque échange est visible uniquement par les personnes concernées",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 inline-block h-2 w-2 bg-indigo-700 rounded-full" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-300 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900">Exemple d’infos que BOB retient</h3>
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

      {/* CTA */}
      <section id="telecharger" className="py-20 text-center bg-white">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Prêt à ne plus rien oublier ?</h2>
        <p className="mt-3 text-gray-800 leading-relaxed">
          Invite tes contacts, BOBER un échange, discute, reçois des rappels — tout en privé.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="px-6 py-3 rounded-md bg-indigo-700 text-white font-semibold hover:bg-indigo-800 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
             App Store
          </a>
          <a
            href="#"
            className="px-6 py-3 rounded-md bg-green-600 text-white font-semibold hover:bg-green-700 focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Google Play
          </a>
        </div>
      </section>
    </main>
  );
}
