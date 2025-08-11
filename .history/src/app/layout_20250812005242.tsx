import type { Metadata } from 'next'
import './globals.css'
import { inter, jakarta } from './fonts'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Analytics from '@/components/Analytics'

const name = process.env.NEXT_PUBLIC_SITE_NAME || 'Bob App'
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bobapp.fr'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: `${name} — Partagez & empruntez simplement`,
  description:
    'Bob App permet à vos communautés de partager et emprunter des objets en toute simplicité, avec rappels et historique. Faites circuler les objets, pas l’argent.',
  alternates: { canonical: '/' },
  openGraph: {
    title: `${name} — Partagez & empruntez simplement`,
    description:
      'Faites circuler les objets, pas l’argent. Bob App facilite le prêt et l’emprunt au sein de vos collectifs.',
    url: baseUrl,
    siteName: name,
    images: ['/api/og'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${name} — Partagez & empruntez simplement`,
    description: 'Faites circuler les objets, pas l’argent.',
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
