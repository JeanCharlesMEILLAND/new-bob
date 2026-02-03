// src/app/mentions-legales/Mentions.en.tsx
export default function MentionsEN() {
  return (
    <main className="container py-16 max-w-4xl mx-auto mt-20">
      <h1 className="text-3xl font-bold mb-6 text-accent">Legal Notice</h1>
      <p className="mb-8 text-sm text-gray-600">Last updated: August 13, 2025</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-accent">1. Publisher Information</h2>
        <p className="mb-4"><strong>Application name:</strong> BOB – Borrow &amp; Back</p>
        <p className="mb-4"><strong>Legal form:</strong> SAS, simplified joint-stock company</p>
        <p className="mb-4">
          <strong>Registered office address:</strong> 52 Chemin de la Closerie des Lilas (VC 217), 83500 La Seyne-sur-Mer, France
        </p>
        <p className="mb-4"><strong>Phone number:</strong> +48 508 708 250</p>
        <p className="mb-4">
          <strong>Email address:</strong>{" "}
          <a className="text-accent underline" href="mailto:jc.meilland@idboats.com">
            jc.meilland@idboats.com
          </a>
        </p>
        <p className="mb-4"><strong>Registration number:</strong> 940 267 057 R.C.S. Toulon</p>
        <p className="mb-4"><strong>Share capital:</strong> €10,000.00</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-accent">2. Application Hosting</h2>
        <p className="mb-4"><strong>Hosting provider:</strong> Hostinger International Ltd</p>
        <p className="mb-4"><strong>Address:</strong> 61 Lordou Vironos Street, 6023 Larnaca, Cyprus</p>
        <p className="mb-4"><strong>Phone number:</strong> +357 24 03 03 19</p>
        <p className="mb-4">
          <strong>Website:</strong>{" "}
          <a className="text-accent underline" href="https://www.hostinger.fr" target="_blank" rel="noopener noreferrer">
            https://www.hostinger.fr
          </a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-accent">3. Intellectual Property</h2>
        <p className="mb-4">
          All content available in the application (texts, images, graphics, logo, icons, sounds, software, etc.) is the
          exclusive property of BOB BORROW &amp; BACK, unless otherwise stated.
        </p>
        <p className="mb-4">
          Users remain the owners of their content (photos, descriptions, etc.) but authorize its use for the proper
          functioning of the platform.
        </p>
        <p className="mb-4">
          BOB BORROW &amp; BACK reserves the right to remove any inappropriate, illegal, or fraudulent content without
          prior notice.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-accent">4. Personal Data</h2>
        <p className="mb-4">
          BOB BORROW &amp; BACK respects users’ privacy and is committed to protecting their data in accordance with the
          GDPR. Data collected is used solely within the scope of the application.
        </p>
        <p className="mb-4">
          To exercise your rights or for any questions:{" "}
          <a className="text-accent underline" href="mailto:jc.meilland@idboats.com">
            jc.meilland@idboats.com
          </a>
        </p>
        <p className="mb-4">
          View our full policy here:{" "}
          <a
            className="text-accent underline"
            href="https://www.bobapp.fr/conditions-utilisation"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.bobapp.fr/conditions-utilisation
          </a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-accent">5. Limitation of Liability</h2>
        <p className="mb-4">
          BOB BORROW &amp; BACK cannot be held liable for material damage, data loss, or disputes between users. The
          publisher only provides a framework for loan management.
        </p>
        <p className="mb-4">
          Any abuse or fraudulent behavior may result in the immediate suspension of the account and a report to the
          competent authorities.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-accent">6. Applicable Law and Jurisdiction</h2>
        <p className="mb-4">
          This legal notice is governed by French law. In the event of a dispute, jurisdiction is assigned to the courts
          of Toulon.
        </p>
      </section>
    </main>
  )
}
