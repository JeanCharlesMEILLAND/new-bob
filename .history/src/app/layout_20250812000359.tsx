import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "BOB — Carnet privé d’échanges entre proches",
  description:
    "BOB est un pense-bête privé pour proposer ou demander (BOBER) des objets ou coups de main entre contacts invités, en toute confidentialité. Aucun flux d'argent, aucun catalogue public.",
  metadataBase: new URL("https://www.bobapp.fr"), // Remplace par ton domaine réel
  openGraph: {
    title: "BOB — Carnet privé d’échanges entre proches",
    description:
      "Gérez vos échanges d'objets et coups de main entre proches avec messagerie, rappels et événements privés. 100% confidentiel.",
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
      "Proposez, demandez, organisez : BOB gère vos échanges entre proches en toute confidentialité.",
    images: ["/og-bob.png"],
  },
  alternates: {
    canonical: "https://www.bobapp.fr",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="antialiased bg-white text-gray-900">
        {/* HEADER STICKY */}
        <header className="sticky top-0 z-50 backdrop-blur bg-white/95 border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-indigo-600 grid place-items-center text-white font-bold">
                B
              </div>
              <span className="font-semibold tracking-tight">BOB</span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#fonctionnement" className="text-sm text-gray-800 hover:text-indigo-700">
                Fonctionnement
              </a>
              <a href="#prive" className="text-sm text-gray-800 hover:text-indigo-700">
                Pensé pour rester privé
              </a>
              <a href="#telecharger" className="text-sm text-gray-800 hover:text-indigo-700">
                Télécharger
              </a>
              <Link href="/conditions-utilisation" className="text-sm text-gray-800 hover:text-indigo-700">
                Conditions
              </Link>
              <Link href="/confidentialite" className="text-sm text-gray-800 hover:text-indigo-700">
                Confidentialité
              </Link>
            </nav>

            {/* CTA */}
            <a
              href="#telecharger"
              className="px-4 py-2 rounded-md bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Commencer
            </a>
          </div>
        </header>

        {/* CONTENU */}
        <main className="bg-white text-gray-900">{children}</main>

        {/* FOOTER */}
        <footer className="py-6 border-t border-gray-200 text-center text-sm text-gray-700">
          © {new Date().getFullYear()} BOB — Tous droits réservés. |
          <a href="#prive" className="text-indigo-600 hover:underline ml-1">
            Pensé pour rester privé
          </a>{" "}
          |{" "}
          <Link href="/conditions-utilisation" className="text-indigo-600 hover:underline">
            Conditions
          </Link>{" "}
          |{" "}
          <Link href="/confidentialite" className="text-indigo-600 hover:underline">
            Confidentialité
          </Link>
        </footer>
      </body>
    </html>
  );
}
