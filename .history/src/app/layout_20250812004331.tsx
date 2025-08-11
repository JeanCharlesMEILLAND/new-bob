import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "BOB — Carnet privé d’échanges entre proches",
  description:
    "BOB est un pense-bête privé pour proposer ou demander (BOBER) des objets ou coups de main entre contacts invités. Aucun flux d'argent, aucun catalogue public.",
  metadataBase: new URL("https://www.bobapp.fr"),
  openGraph: {
    title: "BOB — Carnet privé d’échanges entre proches",
    description:
      "Gérez vos prêts d'objets, coups de main et événements privés avec messagerie et rappels. 100% confidentiel.",
    url: "https://www.bobapp.fr",
    siteName: "BOB",
    images: [
      {
        url: "/og-bob.png",
        width: 1200,
        height: 630,
        alt: "BOB — Carnet privé d’échanges entre proches",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BOB — Carnet privé d’échanges entre proches",
    description:
      "Proposez, demandez, organisez : BOB gère vos échanges privés entre proches.",
    images: ["/og-bob.png"],
  },
  alternates: {
    canonical: "https://www.bobapp.fr",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="antialiased bg-white text-gray-900">
        {/* HEADER */}
        <header className="sticky top-0 z-50 backdrop-blur bg-white/95 border-b border-gray-200 shadow-soft">
          <div className="container h-16 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2" aria-label="Accueil BOB">
              <div className="h-8 w-8 rounded-lg bg-brand grid place-items-center text-white font-bold">
                B
              </div>
              <span className="font-semibold tracking-tight">BOB</span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#fonctionnement" className="text-sm text-gray-900 hover:text-brand-dark">
                Fonctionnement
              </a>
              <a href="#prive" className="text-sm text-gray-900 hover:text-brand-dark">
                Pensé pour rester privé
              </a>
              <a href="#telecharger" className="text-sm text-gray-900 hover:text-brand-dark">
                Télécharger
              </a>
              <Link href="/conditions-utilisation" className="text-sm text-gray-900 hover:text-brand-dark">
                Conditions
              </Link>
              <Link href="/confidentialite" className="text-sm text-gray-900 hover:text-brand-dark">
                Confidentialité
              </Link>
            </nav>

            {/* CTA */}
            <a href="#telecharger" className="btn-primary">
              Commencer
            </a>
          </div>
        </header>

        {/* CONTENU */}
        {children}

        {/* FOOTER */}
        <footer className="py-8 border-t border-gray-200 text-center text-sm text-gray-700">
          © {new Date().getFullYear()} BOB — Tous droits réservés. ·{" "}
          <a href="#prive" className="text-brand hover:underline">
            Pensé pour rester privé
          </a>{" "}
          ·{" "}
          <Link href="/conditions-utilisation" className="text-brand hover:underline">
            Conditions
          </Link>{" "}
          ·{" "}
          <Link href="/confidentialite" className="text-brand hover:underline">
            Confidentialité
          </Link>
        </footer>
      </body>
    </html>
  );
}
