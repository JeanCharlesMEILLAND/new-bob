export default function Confidentialite() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Politique de confidentialité</h1>
      <p className="mb-4">
        BOB enregistre uniquement les informations nécessaires au fonctionnement de l’application
        (échanges, rappels, contacts invités). Ces données restent privées.
      </p>
      <p className="mb-4">
        BOB ne partage pas ces données et ne publie aucun catalogue public.
      </p>
      <p>
        Pour toute question, contactez-nous à{" "}
        <a className="text-indigo-600 underline" href="mailto:hello@bobapp.fr">
          hello@bobapp.fr
        </a>.
      </p>
    </main>
  );
}
