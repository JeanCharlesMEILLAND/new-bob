import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "BOB — BOBER tes échanges privés entre proches",
  description:
    "BOB est un pense-bête privé centré sur le concept de BOBER : proposer/demander des objets, coups de main et organiser des événements sur invitation. Zéro finance, zéro marketplace."
};
6
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="antialiased text-gray-900">
        {/* HEADER STICKY */}
        <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-indigo-600 grid place-items-center text-white font-bold">B</div>
              <span className="font-semibold tracking-tight">BOB</span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#fonctionnement" className="text-sm text-gray-700 hover:text-indigo-600">
                Fonctionnement
              </a>
              <a href="#prive" className="text-sm text-gray-700 hover:text-indigo-600">
                Privé par design
              </a>
              <a href="#telecharger" className="text-sm text-gray-700 hover:text-indigo-600">
                Télécharger
              </a>
            </nav>

            {/* CTA */}
            <a
              href="#telecharger"
              className="px-4 py-2 rounded-md bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700"
            >
              Commencer
            </a>
          </div>
        </header>

        {/* CONTENU */}
        {children}

        <footer className="py-6 border-t border-gray-100 text-center text-sm text-gray-500">
  © {new Date().getFullYear()} BOB — Tous droits réservés. |
  <Link href="/conditions-utilisation" className="text-indigo-600 hover:underline ml-1">
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
