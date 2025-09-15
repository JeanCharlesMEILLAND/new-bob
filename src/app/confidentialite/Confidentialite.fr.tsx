export default function ConfidentialiteFR() {
  return (
    <main className="container py-16 max-w-4xl mx-auto mt-20">
      <h1 className="text-3xl font-bold mb-6 text-accent">
        Politique de confidentialité
      </h1>
      <p className="mb-8 text-sm text-gray-600">
        Dernière mise à jour : 13 août 2025
      </p>

      <section className="mb-8" id="responsable">
        <h2 className="text-2xl font-semibold mb-4 text-accent">1. Responsable du traitement</h2>
        <p>
          Éditeur / Responsable : <strong>BOB — Borrow &amp; Back</strong> (détails dans les mentions légales).
          Contact :{" "}
          <a className="text-accent underline" href="mailto:jc.meilland@idboats.com">
            jc.meilland@idboats.com
          </a>.
        </p>
      </section>

      <section className="mb-8" id="donnees">
        <h2 className="text-2xl font-semibold mb-4 text-accent">2. Données collectées</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Identifiants de compte (nom, email, téléphone si fourni)</li>
          <li>Données de profil (avatar, description, champs facultatifs)</li>
          <li>Contacts (si vous autorisez l’accès pour la fonctionnalité « entre proches »)</li>
          <li>Messages et contenus générés par les utilisateurs (UGC)</li>
          <li>Données techniques (appareil, logs, cookies/identifiants techniques)</li>
        </ul>
      </section>

      <section className="mb-8" id="finalites">
        <h2 className="text-2xl font-semibold mb-4 text-accent">3. Finalités</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Fourniture des fonctionnalités (prêt/emprunt, messagerie, collectifs, rappels)</li>
          <li>Sécurité, prévention de la fraude et modération</li>
          <li>Amélioration du service et statistiques anonymisées</li>
          <li>Support client et communications opérationnelles</li>
        </ul>
      </section>

      <section className="mb-8" id="bases-legales">
        <h2 className="text-2xl font-semibold mb-4 text-accent">4. Bases légales</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Exécution du contrat (acceptation des CGU)</li>
          <li>Intérêt légitime (sécurité, amélioration, lutte contre les abus)</li>
          <li>Consentement (accès aux contacts, notifications, cookies non essentiels)</li>
          <li>Obligations légales (réquisitions, conservation obligatoire)</li>
        </ul>
      </section>

      <section className="mb-8" id="durees">
        <h2 className="text-2xl font-semibold mb-4 text-accent">5. Durées de conservation</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Compte : actif + 24 mois après inactivité, puis suppression/anonymisation</li>
          <li>Logs techniques : 12 mois maximum</li>
          <li>Messages/UGC : tant que le compte est actif ou jusqu’à suppression par l’utilisateur</li>
          <li>Cookies non essentiels : durée selon la nature du cookie</li>
        </ul>
      </section>

      <section className="mb-8" id="destinataires">
        <h2 className="text-2xl font-semibold mb-4 text-accent">6. Destinataires / Sous-traitants</h2>
        <p>
          Prestataires techniques (hébergement, analytics, envoi d’emails/push, anti-spam) — liste disponible sur demande.
          Des clauses contractuelles conformes au RGPD sont en place.
        </p>
      </section>

      <section className="mb-8" id="transferts">
        <h2 className="text-2xl font-semibold mb-4 text-accent">7. Transferts hors UE</h2>
        <p>
          Le cas échéant, transferts encadrés (clauses contractuelles types, décisions d’adéquation).
        </p>
      </section>

      <section className="mb-8" id="securite">
        <h2 className="text-2xl font-semibold mb-4 text-accent">8. Sécurité</h2>
        <p>
          Mesures techniques et organisationnelles raisonnables pour protéger les données (chiffrement en transit, contrôle d’accès, journalisation, sauvegardes).
        </p>
      </section>

      <section className="mb-8" id="droits">
        <h2 className="text-2xl font-semibold mb-4 text-accent">9. Vos droits</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Accès, rectification, suppression</li>
          <li>Limitation et opposition au traitement</li>
          <li>Portabilité des données lorsque applicable</li>
          <li>Retrait du consentement à tout moment</li>
          <li>Réclamation auprès d’une autorité de contrôle (ex. CNIL)</li>
        </ul>
      </section>

      <section className="mb-8" id="cookies">
        <h2 className="text-2xl font-semibold mb-4 text-accent">10. Cookies</h2>
        <p>
          Cookies essentiels au fonctionnement et, sous réserve de consentement, cookies de mesure ou de personnalisation.
          Gestion via le navigateur ou les paramètres de l’application.
        </p>
      </section>

      <section className="mb-8" id="contact">
        <h2 className="text-2xl font-semibold mb-4 text-accent">11. Contact</h2>
        <p>
          Pour toute demande relative à la confidentialité, contactez :{" "}
          <a className="text-accent underline" href="mailto:jc.meilland@idboats.com">
            jc.meilland@idboats.com
          </a>.
        </p>
      </section>
    </main>
  )
}
