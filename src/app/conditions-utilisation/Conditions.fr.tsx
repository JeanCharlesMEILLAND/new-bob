export default function ConditionsFR() {
  return (
    <main className="container py-16 max-w-4xl mx-auto mt-20">
      <h1 className="text-3xl font-bold mb-6 text-accent">
        Conditions d’utilisation de l’application BOB (Borrow and Back)
      </h1>
      <p className="mb-8 text-sm text-gray-600">
        Dernière mise à jour : 29 juillet 2025
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-accent">1. Acceptation des conditions</h2>
        <p className="mb-4">
          En téléchargeant ou en utilisant l’application BOB (Borrow and Back), vous acceptez les présentes conditions
          d’utilisation ainsi que notre politique de confidentialité. Si vous n’acceptez pas ces conditions, veuillez ne pas utiliser l’application.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-accent">2. Objet de l’application</h2>
        <p className="mb-4">
          L’application BOB a pour objectif de faciliter le prêt et l’emprunt d’objets ou de services entre
          particuliers, au sein de cercles de confiance ou de communautés locales. L’application met les utilisateurs
          en relation mais n’intervient pas dans les échanges physiques ni en cas de litiges entre utilisateurs.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-accent">3. Comptes utilisateurs</h2>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Pour accéder aux fonctionnalités de BOB, la création d’un compte personnel est requise.</li>
          <li>Vous êtes responsable de la confidentialité de vos identifiants et de l’utilisation de votre compte.</li>
          <li>Vous vous engagez à fournir des informations exactes, complètes et à jour.</li>
          <li>L’utilisation de l’application est réservée aux personnes âgées de 18 ans ou plus.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-accent">4. Règles de conduite</h2>
        <p className="mb-4">
          Les utilisateurs s’engagent à adopter un comportement respectueux et responsable. Il est strictement interdit de :
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Publier ou partager du contenu illégal, offensant, diffamatoire ou trompeur</li>
          <li>Usurper l’identité d’une autre personne ou entité</li>
          <li>Commettre des actes frauduleux, abusifs ou malveillants</li>
          <li>Porter atteinte aux droits de propriété intellectuelle ou à la vie privée d’autrui</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-accent">5. Contenu généré par les utilisateurs (UGC)</h2>
        <p className="mb-4">
          L’application BOB permet aux utilisateurs d’échanger des messages, des descriptions d’objets ou d’autres
          contenus. Afin de garantir un environnement sûr :
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Les utilisateurs peuvent signaler tout contenu ou comportement inapproprié directement dans l’application.</li>
          <li>L’équipe BOB s’engage à traiter les signalements dans un délai maximum de 24 heures.</li>
          <li>Tout contenu jugé abusif, illégal ou inapproprié pourra être supprimé, et les utilisateurs concernés suspendus.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-accent">6. Limitation de responsabilité</h2>
        <p className="mb-4">
          BOB est fourni « tel quel » sans garantie d’aucune sorte. L’éditeur ne garantit pas l’absence d’erreurs, de
          pannes ou d’interruptions de service. Il ne pourra être tenu responsable de tout dommage direct ou indirect
          lié à l’utilisation ou à l’impossibilité d’utiliser l’application.
        </p>
        <p className="mb-4">
          La qualité, la conformité ou la restitution des objets prêtés via l’application relèvent exclusivement de la
          responsabilité des utilisateurs. BOB ne garantit pas la véracité des informations fournies dans les profils
          ou les annonces.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-accent">7. Modifications des conditions</h2>
        <p className="mb-4">
          BOB se réserve le droit de modifier les présentes conditions à tout moment. Les modifications prendront effet
          dès leur publication sur cette page. Il appartient à l’utilisateur de consulter régulièrement les conditions
          d’utilisation pour se tenir informé des éventuels changements.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-accent">8. Droit applicable</h2>
        <p className="mb-4">
          Les présentes conditions sont régies par le droit français. En cas de litige, et à défaut de résolution
          amiable, les tribunaux compétents de Toulon seront seuls compétents.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-accent">9. Contact</h2>
        <p className="mb-4">
          Pour toute question relative à ces conditions d’utilisation, vous pouvez nous contacter à l’adresse suivante :
        </p>
        <p className="mb-4">
          Email :{" "}
          <a className="text-accent underline" href="mailto:jc.meilland@idboats.com">
            jc.meilland@idboats.com
          </a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-accent">Fonctionnalités principales de BOB</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Emprunter :</strong> trouvez des objets ou services disponibles autour de vous</li>
          <li><strong>Prêter :</strong> proposez vos biens inutilisés à votre réseau</li>
          <li><strong>Services :</strong> partagez des compétences ou du temps entre membres</li>
          <li><strong>Créer un collectif :</strong> formez des groupes de confiance (famille, voisinage, association)</li>
        </ul>
      </section>
    </main>
  )
}
