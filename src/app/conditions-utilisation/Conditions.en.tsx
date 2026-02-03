// src/app/conditions-utilisation/Conditions.en.tsx
export default function ConditionsEN() {
  return (
    <main className="container py-16 max-w-4xl mx-auto mt-20">
      <h1 className="text-3xl font-bold mb-6 text-accent">
        Terms of Use for the BOB (Borrow and Back) Application
      </h1>
      <p className="mb-8 text-sm text-gray-600">
        Last updated: July 29, 2025
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-accent">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By downloading or using the BOB (Borrow and Back) application, you agree to these Terms of Use as well as our
          Privacy Policy. If you do not agree to these terms, please do not use the application.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-accent">2. Purpose of the Application</h2>
        <p className="mb-4">
          The BOB application aims to facilitate the lending and borrowing of items or services between individuals,
          within trusted circles or local communities. The app connects users but does not intervene in physical
          exchanges or in the event of disputes between users.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-accent">3. User Accounts</h2>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>A personal account is required to access BOB’s features.</li>
          <li>You are responsible for keeping your credentials confidential and for any activity on your account.</li>
          <li>You agree to provide accurate, complete, and up-to-date information.</li>
          <li>The application is reserved for users aged 18 or over.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-accent">4. Code of Conduct</h2>
        <p className="mb-4">Users agree to behave respectfully and responsibly. It is strictly forbidden to:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Publish or share illegal, offensive, defamatory, or misleading content</li>
          <li>Impersonate another person or entity</li>
          <li>Commit fraudulent, abusive, or malicious acts</li>
          <li>Infringe intellectual property rights or the privacy of others</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-accent">5. User-Generated Content (UGC)</h2>
        <p className="mb-4">
          The BOB application allows users to exchange messages, item descriptions, or other content. To ensure a safe
          environment:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Users can report inappropriate content or behavior directly in the app.</li>
          <li>The BOB team aims to handle reports within 24 hours.</li>
          <li>Any abusive, illegal, or inappropriate content may be removed, and the users involved may be suspended.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-accent">6. Limitation of Liability</h2>
        <p className="mb-4">
          BOB is provided “as is” without any warranty of any kind. The publisher does not guarantee the absence of
          errors, failures, or service interruptions and shall not be held liable for any direct or indirect damage
          related to the use or inability to use the application.
        </p>
        <p className="mb-4">
          The quality, compliance, or return of items lent through the application is the sole responsibility of users.
          BOB does not guarantee the accuracy of information provided in profiles or listings.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-accent">7. Changes to the Terms</h2>
        <p className="mb-4">
          BOB reserves the right to modify these terms at any time. Changes take effect upon publication on this page.
          Users are responsible for regularly reviewing the Terms of Use to stay informed of any changes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-accent">8. Governing Law</h2>
        <p className="mb-4">
          These terms are governed by French law. In the event of a dispute and failing an amicable resolution, the
          competent courts of Toulon shall have exclusive jurisdiction.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-accent">9. Contact</h2>
        <p className="mb-4">
          For any questions regarding these Terms of Use, you can contact us at:
        </p>
        <p className="mb-4">
          Email:{" "}
          <a className="text-accent underline" href="mailto:jc.meilland@idboats.com">
            jc.meilland@idboats.com
          </a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-accent">Main Features of BOB</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Borrow:</strong> find items or services available around you</li>
          <li><strong>Lend:</strong> offer unused items to your network</li>
          <li><strong>Services:</strong> share skills or time among members</li>
          <li><strong>Create a collective:</strong> build trusted groups (family, neighborhood, association)</li>
        </ul>
      </section>
    </main>
  )
}
