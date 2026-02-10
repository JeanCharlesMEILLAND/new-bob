export default function ConfidentialiteFR() {
  return (
    <main className="container py-16 max-w-4xl mx-auto mt-20">
      <h1 className="text-3xl font-bold mb-6 text-accent">
        Politique de Confidentialité
      </h1>
      <p className="mb-8 text-sm text-gray-600">
        Conformément au Règlement Général sur la Protection des Données (RGPD – Règlement UE 2016/679) et à
        la loi n°78-17 du 6 janvier 1978 modifiée (Loi Informatique et Libertés).
      </p>
      <p className="mb-8 text-sm text-gray-600">Dernière mise à jour : 10 février 2026</p>

      <section className="mb-8" id="responsable">
        <h2 className="text-2xl font-semibold mb-4 text-accent">1. Responsable du traitement</h2>
        <p className="mb-4">
          Le responsable du traitement des données personnelles est :
        </p>
        <ul className="list-none space-y-2 mb-4">
          <li><strong>Raison sociale :</strong> BOB BORROW &amp; BACK</li>
          <li><strong>Forme juridique :</strong> SAS au capital de 10 000,00 €</li>
          <li><strong>RCS :</strong> 940 267 057 R.C.S. Toulon</li>
          <li><strong>Siège social :</strong> 52 Chemin de la Closerie des Lilas (VC 217), 83500 La Seyne-sur-Mer, France</li>
          <li>
            <strong>Email :</strong>{" "}
            <a className="text-accent underline" href="mailto:contact@bobapp.fr">contact@bobapp.fr</a>
          </li>
          <li><strong>Téléphone :</strong> +33 6 25 48 29 33</li>
        </ul>
        <p className="mb-4">
          <strong>Délégué à la protection des données (DPO) :</strong> Jean-Charles Meilland –{" "}
          <a className="text-accent underline" href="mailto:contact@bobapp.fr">contact@bobapp.fr</a>
        </p>
      </section>

      <section className="mb-8" id="donnees">
        <h2 className="text-2xl font-semibold mb-4 text-accent">2. Données collectées</h2>
        <p className="mb-4">
          Dans le cadre de l&apos;utilisation de l&apos;application BOB – Borrow &amp; Back, nous collectons
          les catégories de données suivantes :
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Données d&apos;identification :</strong> nom, prénom, adresse e-mail, numéro de téléphone (si fourni)</li>
          <li><strong>Données de profil :</strong> avatar, description, champs facultatifs</li>
          <li><strong>Données de contacts :</strong> si vous autorisez l&apos;accès pour la fonctionnalité « entre proches »</li>
          <li><strong>Contenus utilisateurs (UGC) :</strong> messages, descriptions d&apos;objets, photos</li>
          <li><strong>Données techniques :</strong> type d&apos;appareil, système d&apos;exploitation, adresse IP, logs de connexion, identifiants techniques</li>
          <li><strong>Données de navigation :</strong> cookies, pages consultées, durée de visite</li>
        </ul>
      </section>

      <section className="mb-8" id="finalites">
        <h2 className="text-2xl font-semibold mb-4 text-accent">3. Finalités du traitement</h2>
        <p className="mb-4">
          Vos données personnelles sont traitées pour les finalités suivantes :
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Fourniture et gestion des fonctionnalités de l&apos;Application (prêt/emprunt, messagerie, collectifs, rappels)</li>
          <li>Création et gestion de votre compte utilisateur</li>
          <li>Sécurité, prévention de la fraude et modération des contenus</li>
          <li>Amélioration du service et statistiques anonymisées</li>
          <li>Support client et communications opérationnelles</li>
          <li>Respect de nos obligations légales et réglementaires</li>
        </ul>
      </section>

      <section className="mb-8" id="bases-legales">
        <h2 className="text-2xl font-semibold mb-4 text-accent">4. Bases légales du traitement</h2>
        <p className="mb-4">
          Conformément à l&apos;article 6 du RGPD, les traitements de données reposent sur les bases légales
          suivantes :
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Exécution du contrat :</strong> traitement nécessaire à la fourniture du service (article 6.1.b du RGPD)</li>
          <li><strong>Intérêt légitime :</strong> sécurité, amélioration du service, lutte contre les abus (article 6.1.f du RGPD)</li>
          <li><strong>Consentement :</strong> accès aux contacts, notifications push, cookies non essentiels (article 6.1.a du RGPD)</li>
          <li><strong>Obligation légale :</strong> réquisitions judiciaires, conservation obligatoire (article 6.1.c du RGPD)</li>
        </ul>
      </section>

      <section className="mb-8" id="durees">
        <h2 className="text-2xl font-semibold mb-4 text-accent">5. Durées de conservation</h2>
        <p className="mb-4">
          Conformément au principe de limitation de la conservation (article 5.1.e du RGPD), vos données sont
          conservées pendant les durées suivantes :
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Données de compte :</strong> durée d&apos;activité du compte + 24 mois après la dernière activité, puis suppression ou anonymisation</li>
          <li><strong>Logs techniques :</strong> 12 mois maximum, conformément aux recommandations de la CNIL</li>
          <li><strong>Messages et contenus (UGC) :</strong> tant que le compte est actif ou jusqu&apos;à suppression par l&apos;utilisateur</li>
          <li><strong>Cookies non essentiels :</strong> 13 mois maximum conformément aux recommandations de la CNIL</li>
          <li><strong>Données de facturation :</strong> 10 ans conformément au Code de commerce (article L.123-22)</li>
        </ul>
      </section>

      <section className="mb-8" id="destinataires">
        <h2 className="text-2xl font-semibold mb-4 text-accent">6. Destinataires et sous-traitants</h2>
        <p className="mb-4">
          Vos données peuvent être transmises aux catégories de destinataires suivantes, dans le strict respect
          du RGPD :
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>Hébergement :</strong> OVHcloud (OVH SAS – 2 rue Kellermann, 59100 Roubaix, France)
          </li>
          <li>
            <strong>Intelligence artificielle :</strong> Mistral AI (Mistral AI SAS – 15 rue des Halles, 75001 Paris, France)
          </li>
          <li>
            <strong>Services techniques :</strong> analytics, envoi d&apos;emails/notifications push, anti-spam
          </li>
        </ul>
        <p className="mb-4">
          Des contrats de sous-traitance conformes à l&apos;article 28 du RGPD sont conclus avec chaque
          prestataire. La liste complète des sous-traitants est disponible sur demande à{" "}
          <a className="text-accent underline" href="mailto:contact@bobapp.fr">contact@bobapp.fr</a>.
        </p>
      </section>

      <section className="mb-8" id="transferts">
        <h2 className="text-2xl font-semibold mb-4 text-accent">7. Transferts de données hors UE</h2>
        <p className="mb-4">
          BOB BORROW &amp; BACK privilégie des prestataires situés en France et dans l&apos;Union européenne.
        </p>
        <p className="mb-4">
          Le cas échéant, tout transfert de données hors de l&apos;Espace économique européen est encadré par
          des garanties appropriées conformément aux articles 44 à 49 du RGPD :
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Clauses contractuelles types adoptées par la Commission européenne</li>
          <li>Décisions d&apos;adéquation de la Commission européenne</li>
        </ul>
        <p className="mb-4">
          Les documents justificatifs sont disponibles sur demande.
        </p>
      </section>

      <section className="mb-8" id="securite">
        <h2 className="text-2xl font-semibold mb-4 text-accent">8. Sécurité des données</h2>
        <p className="mb-4">
          Conformément à l&apos;article 32 du RGPD, BOB BORROW &amp; BACK met en œuvre des mesures techniques
          et organisationnelles appropriées pour garantir la sécurité des données :
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Chiffrement des données en transit (TLS/SSL)</li>
          <li>Contrôle d&apos;accès et authentification sécurisée</li>
          <li>Journalisation et surveillance des accès</li>
          <li>Sauvegardes régulières et plan de reprise d&apos;activité</li>
          <li>Hébergement sur des serveurs situés en France (OVHcloud)</li>
        </ul>
      </section>

      <section className="mb-8" id="droits">
        <h2 className="text-2xl font-semibold mb-4 text-accent">9. Vos droits</h2>
        <p className="mb-4">
          Conformément aux articles 15 à 22 du RGPD et aux articles 48 à 56 de la Loi Informatique et
          Libertés, vous disposez des droits suivants :
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Droit d&apos;accès</strong> (article 15 du RGPD) : obtenir la confirmation du traitement de vos données et en recevoir une copie</li>
          <li><strong>Droit de rectification</strong> (article 16 du RGPD) : corriger vos données inexactes ou incomplètes</li>
          <li><strong>Droit à l&apos;effacement</strong> (article 17 du RGPD) : demander la suppression de vos données</li>
          <li><strong>Droit à la limitation</strong> (article 18 du RGPD) : obtenir la limitation du traitement</li>
          <li><strong>Droit d&apos;opposition</strong> (article 21 du RGPD) : vous opposer au traitement de vos données</li>
          <li><strong>Droit à la portabilité</strong> (article 20 du RGPD) : recevoir vos données dans un format structuré et lisible</li>
          <li><strong>Retrait du consentement</strong> : retirer votre consentement à tout moment, sans affecter la licéité du traitement antérieur</li>
          <li><strong>Directives post-mortem</strong> : définir des directives relatives au sort de vos données après votre décès (article 85 de la Loi Informatique et Libertés)</li>
        </ul>
        <p className="mb-4">
          Pour exercer ces droits, contactez-nous à :{" "}
          <a className="text-accent underline" href="mailto:contact@bobapp.fr">contact@bobapp.fr</a>
        </p>
        <p className="mb-4">
          Nous nous engageons à répondre à votre demande dans un délai d&apos;un mois, conformément à
          l&apos;article 12.3 du RGPD.
        </p>
        <p className="mb-4">
          En cas de réclamation, vous pouvez saisir la CNIL (Commission Nationale de l&apos;Informatique et
          des Libertés) :{" "}
          <a className="text-accent underline" href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
            www.cnil.fr
          </a>{" "}
          – 3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07.
        </p>
      </section>

      <section className="mb-8" id="cookies">
        <h2 className="text-2xl font-semibold mb-4 text-accent">10. Cookies</h2>
        <p className="mb-4">
          Conformément à la directive européenne 2009/136/CE et aux recommandations de la CNIL (délibération
          n°2020-091 du 17 septembre 2020), l&apos;Application utilise les catégories de cookies suivantes :
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>Cookies strictement nécessaires :</strong> indispensables au fonctionnement de
            l&apos;Application (authentification, sécurité). Ils ne requièrent pas votre consentement.
          </li>
          <li>
            <strong>Cookies analytiques :</strong> mesure d&apos;audience et amélioration du service. Soumis à
            votre consentement préalable.
          </li>
          <li>
            <strong>Cookies de personnalisation :</strong> mémorisation de vos préférences. Soumis à votre
            consentement préalable.
          </li>
        </ul>
        <p className="mb-4">
          Vous pouvez gérer vos préférences de cookies à tout moment via les paramètres de l&apos;Application
          ou de votre navigateur. La durée de validité du consentement est de 13 mois maximum.
        </p>
      </section>

      <section className="mb-8" id="ia">
        <h2 className="text-2xl font-semibold mb-4 text-accent">11. Intelligence artificielle</h2>
        <p className="mb-4">
          L&apos;Application utilise des services d&apos;intelligence artificielle fournis par{" "}
          <strong>Mistral AI</strong> (Mistral AI SAS – 15 rue des Halles, 75001 Paris, France), société
          française soumise au droit européen et au RGPD.
        </p>
        <p className="mb-4">
          Les données transmises à Mistral AI sont limitées au strict nécessaire et font l&apos;objet de
          garanties contractuelles conformes à l&apos;article 28 du RGPD. Aucune donnée personnelle n&apos;est
          utilisée pour entraîner les modèles d&apos;IA sans votre consentement explicite.
        </p>
      </section>

      <section className="mb-8" id="mineurs">
        <h2 className="text-2xl font-semibold mb-4 text-accent">12. Protection des mineurs</h2>
        <p className="mb-4">
          L&apos;Application est destinée aux personnes âgées de 18 ans ou plus. Nous ne collectons pas
          sciemment de données personnelles de mineurs. Si nous découvrons qu&apos;un mineur a fourni des
          données personnelles, celles-ci seront supprimées dans les meilleurs délais.
        </p>
      </section>

      <section className="mb-8" id="modifications">
        <h2 className="text-2xl font-semibold mb-4 text-accent">13. Modifications de la politique</h2>
        <p className="mb-4">
          BOB BORROW &amp; BACK se réserve le droit de modifier la présente politique de confidentialité à tout
          moment. En cas de modification substantielle, les utilisateurs seront informés par notification dans
          l&apos;Application ou par e-mail. La date de dernière mise à jour est indiquée en haut de cette page.
        </p>
      </section>

      <section className="mb-8" id="contact">
        <h2 className="text-2xl font-semibold mb-4 text-accent">14. Contact</h2>
        <p className="mb-4">
          Pour toute question relative à la présente politique de confidentialité ou pour exercer vos droits :
        </p>
        <ul className="list-none space-y-2 mb-4">
          <li>
            <strong>Email :</strong>{" "}
            <a className="text-accent underline" href="mailto:contact@bobapp.fr">contact@bobapp.fr</a>
          </li>
          <li><strong>Téléphone :</strong> +33 6 25 48 29 33</li>
          <li>
            <strong>Adresse :</strong> BOB BORROW &amp; BACK – 52 Chemin de la Closerie des Lilas (VC 217), 83500 La Seyne-sur-Mer, France
          </li>
          <li>
            <strong>DPO :</strong> Jean-Charles Meilland –{" "}
            <a className="text-accent underline" href="mailto:contact@bobapp.fr">contact@bobapp.fr</a>
          </li>
        </ul>
      </section>
    </main>
  )
}
