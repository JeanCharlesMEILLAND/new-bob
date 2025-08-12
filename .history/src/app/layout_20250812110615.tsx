import type { Metadata } from 'next'
import './globals.css'
import { inter, jakarta } from './fonts'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Analytics from '@/components/Analytics'

const name = process.env.NEXT_PUBLIC_SITE_NAME || 'BOB'
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bobapp.fr'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: `${name} — Échanges privés entre proches`,
  description:
    `${name} vous aide à prêter, emprunter et organiser des événements en privé avec vos contacts. ` +
    `Aucune transaction financière. Aucune mise en relation publique.`,
  alternates: { canonical: '/' },
  openGraph: {
    title: `${name} — Échanges privés entre proches`,
    description:
      `Gérez vos prêts d’objets, coups de main et événements avec vos proches, en toute simplicité et confidentialité. ` +
      `Pas de paiements, pas d’annuaire public.`,
    url: baseUrl,
    siteName: name,
    images: ['/api/og'],
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${name} — Échanges privés entre proches`,
    description: `Prêts d’objets et services entre contacts. Aucune transaction financière.`,
    images: ['/api/og'],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="min-h-screen bg-[--bg] text-[--fg] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
