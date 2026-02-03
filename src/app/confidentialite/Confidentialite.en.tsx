// src/app/confidentialite/Confidentialite.en.tsx
export default function PrivacyPolicyEN() {
  return (
    <main className="container py-16 max-w-4xl mx-auto mt-20">
      <h1 className="text-3xl font-bold mb-6 text-accent">Privacy Policy</h1>
      <p className="mb-8 text-sm text-gray-600">Last updated: August 13, 2025</p>

      <section className="mb-8" id="controller">
        <h2 className="text-2xl font-semibold mb-4 text-accent">1. Data Controller</h2>
        <p>
          Publisher / Controller: <strong>BOB — Borrow &amp; Back</strong> (company details as per Legal Notice).
          Contact:{" "}
          <a className="text-accent underline" href="mailto:jc.meilland@idboats.com">
            jc.meilland@idboats.com
          </a>
          .
        </p>
      </section>

      <section className="mb-8" id="data">
        <h2 className="text-2xl font-semibold mb-4 text-accent">2. Data We Collect</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Account identifiers (name, email, phone if provided)</li>
          <li>Profile data (avatar, bio, optional fields)</li>
          <li>Contacts (if you authorize access for the “close contacts only” feature)</li>
          <li>Messages and user-generated content (UGC)</li>
          <li>Technical data (device, logs, cookies/technical identifiers)</li>
        </ul>
      </section>

      <section className="mb-8" id="purposes">
        <h2 className="text-2xl font-semibold mb-4 text-accent">3. Purposes of Processing</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Provide core features (lending/borrowing, messaging, collectives, reminders)</li>
          <li>Security, fraud prevention, and moderation</li>
          <li>Service improvement and anonymized statistics</li>
          <li>Customer support and operational communications</li>
        </ul>
      </section>

      <section className="mb-8" id="legal-bases">
        <h2 className="text-2xl font-semibold mb-4 text-accent">4. Legal Bases</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Performance of a contract (accepted Terms)</li>
          <li>Legitimate interest (security, improvement, anti-abuse)</li>
          <li>Consent (contacts access, notifications, non-essential cookies)</li>
          <li>Legal obligations (lawful requests, mandatory retention)</li>
        </ul>
      </section>

      <section className="mb-8" id="retention">
        <h2 className="text-2xl font-semibold mb-4 text-accent">5. Retention Periods</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Account: active + up to 24 months of inactivity, then deletion/anonymization</li>
          <li>Technical logs: up to 12 months</li>
          <li>Messages/UGC: while the account is active or until deletion by the user</li>
          <li>Non-essential cookies: as per the cookie’s defined lifespan</li>
        </ul>
      </section>

      <section className="mb-8" id="recipients">
        <h2 className="text-2xl font-semibold mb-4 text-accent">6. Recipients / Processors</h2>
        <p>
          Technical providers (hosting, analytics, email/push delivery, anti-spam) — listed in internal records or upon
          request. Data processing agreements compliant with GDPR are in place.
        </p>
      </section>

      <section className="mb-8" id="transfers">
        <h2 className="text-2xl font-semibold mb-4 text-accent">7. International Transfers</h2>
        <p>
          Where applicable, transfers are governed by appropriate safeguards (Standard Contractual Clauses, adequacy
          decisions), documented upon request.
        </p>
      </section>

      <section className="mb-8" id="security">
        <h2 className="text-2xl font-semibold mb-4 text-accent">8. Security</h2>
        <p>
          We implement reasonable technical and organizational measures to protect data (encryption in transit, access
          control, logging, backups).
        </p>
      </section>

      <section className="mb-8" id="rights">
        <h2 className="text-2xl font-semibold mb-4 text-accent">9. Your Rights</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Access, rectification, deletion</li>
          <li>Restriction and objection to processing</li>
          <li>Portability where applicable</li>
          <li>Right to withdraw consent at any time (without affecting lawful processing based on consent before withdrawal)</li>
          <li>Right to lodge a complaint with a supervisory authority (e.g., CNIL in France)</li>
        </ul>
      </section>

      <section className="mb-8" id="cookies">
        <h2 className="text-2xl font-semibold mb-4 text-accent">10. Cookies</h2>
        <p>
          We use essential cookies for the app to function and, where consented, analytics or preference cookies.
          You can manage your choices via your device/browser or in-app settings (where available).
        </p>
      </section>

      <section className="mb-8" id="contact">
        <h2 className="text-2xl font-semibold mb-4 text-accent">11. Contact</h2>
        <p>
          For any privacy-related request, contact:{" "}
          <a className="text-accent underline" href="mailto:jc.meilland@idboats.com">
            jc.meilland@idboats.com
          </a>
          .
        </p>
      </section>
    </main>
  )
}
