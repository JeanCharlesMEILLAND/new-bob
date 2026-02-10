// src/app/confidentialite/Confidentialite.en.tsx
export default function PrivacyPolicyEN() {
  return (
    <main className="container py-16 max-w-4xl mx-auto mt-20">
      <h1 className="text-3xl font-bold mb-6 text-accent">Privacy Policy</h1>
      <p className="mb-8 text-sm text-gray-600">
        In accordance with the General Data Protection Regulation (GDPR – EU Regulation 2016/679) and French
        Law No. 78-17 of January 6, 1978 (Data Protection Act).
      </p>
      <p className="mb-8 text-sm text-gray-600">Last updated: February 10, 2026</p>

      <section className="mb-8" id="controller">
        <h2 className="text-2xl font-semibold mb-4 text-accent">1. Data Controller</h2>
        <p className="mb-4">
          The data controller for personal data is:
        </p>
        <ul className="list-none space-y-2 mb-4">
          <li><strong>Company name:</strong> BOB BORROW &amp; BACK</li>
          <li><strong>Legal form:</strong> SAS with a share capital of €10,000.00</li>
          <li><strong>RCS:</strong> 940 267 057 R.C.S. Toulon</li>
          <li><strong>Registered office:</strong> 52 Chemin de la Closerie des Lilas (VC 217), 83500 La Seyne-sur-Mer, France</li>
          <li>
            <strong>Email:</strong>{" "}
            <a className="text-accent underline" href="mailto:contact@bobapp.fr">contact@bobapp.fr</a>
          </li>
          <li><strong>Phone:</strong> +33 6 25 48 29 33</li>
        </ul>
        <p className="mb-4">
          <strong>Data Protection Officer (DPO):</strong> Jean-Charles Meilland –{" "}
          <a className="text-accent underline" href="mailto:contact@bobapp.fr">contact@bobapp.fr</a>
        </p>
      </section>

      <section className="mb-8" id="data">
        <h2 className="text-2xl font-semibold mb-4 text-accent">2. Data We Collect</h2>
        <p className="mb-4">
          When using the BOB – Borrow &amp; Back application, we collect the following categories of data:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Identification data:</strong> name, email address, phone number (if provided)</li>
          <li><strong>Profile data:</strong> avatar, bio, optional fields</li>
          <li><strong>Contact data:</strong> if you authorize access for the &quot;close contacts only&quot; feature</li>
          <li><strong>User-generated content (UGC):</strong> messages, item descriptions, photos</li>
          <li><strong>Technical data:</strong> device type, operating system, IP address, connection logs, technical identifiers</li>
          <li><strong>Browsing data:</strong> cookies, pages visited, visit duration</li>
        </ul>
      </section>

      <section className="mb-8" id="purposes">
        <h2 className="text-2xl font-semibold mb-4 text-accent">3. Purposes of Processing</h2>
        <p className="mb-4">
          Your personal data is processed for the following purposes:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Provision and management of the Application&apos;s features (lending/borrowing, messaging, collectives, reminders)</li>
          <li>Creation and management of your user account</li>
          <li>Security, fraud prevention, and content moderation</li>
          <li>Service improvement and anonymized statistics</li>
          <li>Customer support and operational communications</li>
          <li>Compliance with our legal and regulatory obligations</li>
        </ul>
      </section>

      <section className="mb-8" id="legal-bases">
        <h2 className="text-2xl font-semibold mb-4 text-accent">4. Legal Bases for Processing</h2>
        <p className="mb-4">
          In accordance with article 6 of the GDPR, data processing is based on the following legal grounds:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Performance of a contract:</strong> processing necessary to provide the service (article 6.1.b GDPR)</li>
          <li><strong>Legitimate interest:</strong> security, service improvement, anti-abuse (article 6.1.f GDPR)</li>
          <li><strong>Consent:</strong> contacts access, push notifications, non-essential cookies (article 6.1.a GDPR)</li>
          <li><strong>Legal obligation:</strong> lawful requests, mandatory retention (article 6.1.c GDPR)</li>
        </ul>
      </section>

      <section className="mb-8" id="retention">
        <h2 className="text-2xl font-semibold mb-4 text-accent">5. Retention Periods</h2>
        <p className="mb-4">
          In accordance with the storage limitation principle (article 5.1.e GDPR), your data is retained for
          the following periods:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Account data:</strong> duration of account activity + 24 months after last activity, then deletion or anonymization</li>
          <li><strong>Technical logs:</strong> up to 12 months, in accordance with CNIL recommendations</li>
          <li><strong>Messages and content (UGC):</strong> while the account is active or until deletion by the user</li>
          <li><strong>Non-essential cookies:</strong> up to 13 months in accordance with CNIL recommendations</li>
          <li><strong>Billing data:</strong> 10 years in accordance with the French Commercial Code (article L.123-22)</li>
        </ul>
      </section>

      <section className="mb-8" id="recipients">
        <h2 className="text-2xl font-semibold mb-4 text-accent">6. Recipients and Processors</h2>
        <p className="mb-4">
          Your data may be shared with the following categories of recipients, in strict compliance with the
          GDPR:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>Hosting:</strong> OVHcloud (OVH SAS – 2 rue Kellermann, 59100 Roubaix, France)
          </li>
          <li>
            <strong>Artificial intelligence:</strong> Mistral AI (Mistral AI SAS – 15 rue des Halles, 75001 Paris, France)
          </li>
          <li>
            <strong>Technical services:</strong> analytics, email/push notification delivery, anti-spam
          </li>
        </ul>
        <p className="mb-4">
          Data processing agreements compliant with article 28 of the GDPR are in place with each provider.
          The full list of processors is available upon request at{" "}
          <a className="text-accent underline" href="mailto:contact@bobapp.fr">contact@bobapp.fr</a>.
        </p>
      </section>

      <section className="mb-8" id="transfers">
        <h2 className="text-2xl font-semibold mb-4 text-accent">7. International Data Transfers</h2>
        <p className="mb-4">
          BOB BORROW &amp; BACK prioritizes providers located in France and the European Union.
        </p>
        <p className="mb-4">
          Where applicable, any transfer of data outside the European Economic Area is governed by appropriate
          safeguards in accordance with articles 44 to 49 of the GDPR:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Standard Contractual Clauses adopted by the European Commission</li>
          <li>Adequacy decisions by the European Commission</li>
        </ul>
        <p className="mb-4">
          Supporting documentation is available upon request.
        </p>
      </section>

      <section className="mb-8" id="security">
        <h2 className="text-2xl font-semibold mb-4 text-accent">8. Data Security</h2>
        <p className="mb-4">
          In accordance with article 32 of the GDPR, BOB BORROW &amp; BACK implements appropriate technical
          and organizational measures to ensure data security:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Data encryption in transit (TLS/SSL)</li>
          <li>Access control and secure authentication</li>
          <li>Access logging and monitoring</li>
          <li>Regular backups and disaster recovery plan</li>
          <li>Hosting on servers located in France (OVHcloud)</li>
        </ul>
      </section>

      <section className="mb-8" id="rights">
        <h2 className="text-2xl font-semibold mb-4 text-accent">9. Your Rights</h2>
        <p className="mb-4">
          In accordance with articles 15 to 22 of the GDPR and articles 48 to 56 of the French Data
          Protection Act, you have the following rights:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Right of access</strong> (article 15 GDPR): obtain confirmation of processing and receive a copy of your data</li>
          <li><strong>Right to rectification</strong> (article 16 GDPR): correct inaccurate or incomplete data</li>
          <li><strong>Right to erasure</strong> (article 17 GDPR): request deletion of your data</li>
          <li><strong>Right to restriction</strong> (article 18 GDPR): obtain restriction of processing</li>
          <li><strong>Right to object</strong> (article 21 GDPR): object to the processing of your data</li>
          <li><strong>Right to portability</strong> (article 20 GDPR): receive your data in a structured, machine-readable format</li>
          <li><strong>Withdrawal of consent:</strong> withdraw your consent at any time, without affecting the lawfulness of prior processing</li>
          <li><strong>Post-mortem directives:</strong> define instructions regarding your data after your death (article 85 of the French Data Protection Act)</li>
        </ul>
        <p className="mb-4">
          To exercise these rights, contact us at:{" "}
          <a className="text-accent underline" href="mailto:contact@bobapp.fr">contact@bobapp.fr</a>
        </p>
        <p className="mb-4">
          We commit to responding to your request within one month, in accordance with article 12.3 of the
          GDPR.
        </p>
        <p className="mb-4">
          In case of a complaint, you may contact the CNIL (French Data Protection Authority):{" "}
          <a className="text-accent underline" href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
            www.cnil.fr
          </a>{" "}
          – 3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07.
        </p>
      </section>

      <section className="mb-8" id="cookies">
        <h2 className="text-2xl font-semibold mb-4 text-accent">10. Cookies</h2>
        <p className="mb-4">
          In accordance with European Directive 2009/136/EC and CNIL recommendations (deliberation No. 2020-091
          of September 17, 2020), the Application uses the following categories of cookies:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>Strictly necessary cookies:</strong> essential for the Application to function
            (authentication, security). They do not require your consent.
          </li>
          <li>
            <strong>Analytics cookies:</strong> audience measurement and service improvement. Subject to your
            prior consent.
          </li>
          <li>
            <strong>Personalization cookies:</strong> remembering your preferences. Subject to your prior
            consent.
          </li>
        </ul>
        <p className="mb-4">
          You can manage your cookie preferences at any time via the Application or browser settings. Consent
          validity is up to 13 months.
        </p>
      </section>

      <section className="mb-8" id="ai">
        <h2 className="text-2xl font-semibold mb-4 text-accent">11. Artificial Intelligence</h2>
        <p className="mb-4">
          The Application uses artificial intelligence services provided by{" "}
          <strong>Mistral AI</strong> (Mistral AI SAS – 15 rue des Halles, 75001 Paris, France), a French
          company subject to European law and the GDPR.
        </p>
        <p className="mb-4">
          Data transmitted to Mistral AI is limited to what is strictly necessary and is subject to contractual
          guarantees in accordance with article 28 of the GDPR. No personal data is used to train AI models
          without your explicit consent.
        </p>
      </section>

      <section className="mb-8" id="minors">
        <h2 className="text-2xl font-semibold mb-4 text-accent">12. Protection of Minors</h2>
        <p className="mb-4">
          The Application is intended for individuals aged 18 or over. We do not knowingly collect personal
          data from minors. If we discover that a minor has provided personal data, it will be deleted as soon
          as possible.
        </p>
      </section>

      <section className="mb-8" id="changes">
        <h2 className="text-2xl font-semibold mb-4 text-accent">13. Changes to This Policy</h2>
        <p className="mb-4">
          BOB BORROW &amp; BACK reserves the right to modify this privacy policy at any time. In the event of
          a substantial change, users will be notified via a notification in the Application or by email. The
          date of the last update is indicated at the top of this page.
        </p>
      </section>

      <section className="mb-8" id="contact">
        <h2 className="text-2xl font-semibold mb-4 text-accent">14. Contact</h2>
        <p className="mb-4">
          For any questions regarding this privacy policy or to exercise your rights:
        </p>
        <ul className="list-none space-y-2 mb-4">
          <li>
            <strong>Email:</strong>{" "}
            <a className="text-accent underline" href="mailto:contact@bobapp.fr">contact@bobapp.fr</a>
          </li>
          <li><strong>Phone:</strong> +33 6 25 48 29 33</li>
          <li>
            <strong>Address:</strong> BOB BORROW &amp; BACK – 52 Chemin de la Closerie des Lilas (VC 217), 83500 La Seyne-sur-Mer, France
          </li>
          <li>
            <strong>DPO:</strong> Jean-Charles Meilland –{" "}
            <a className="text-accent underline" href="mailto:contact@bobapp.fr">contact@bobapp.fr</a>
          </li>
        </ul>
      </section>
    </main>
  )
}
