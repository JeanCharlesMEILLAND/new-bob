'use client'

import Link from 'next/link'
import Container from './ui/Container'
import { useSearchParams } from 'next/navigation'

export default function Footer() {
  const searchParams = useSearchParams()
  const lang = (searchParams.get('lang') || 'fr').toLowerCase() === 'en' ? 'en' : 'fr'

  return (
    <footer className="border-t border-white/10 py-10 text-sm">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-6 text-accent/60">
        <p>
          © {new Date().getFullYear()} BOB — Borrow and Back.{' '}
          {lang === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}
        </p>

        <nav aria-label={lang === 'fr' ? 'Liens légaux' : 'Legal links'}>
          <ul className="flex items-center gap-6">
            <li>
              <Link
                href={`/conditions-utilisation?lang=${lang}`}
                className="hover:text-accent/90"
              >
                {lang === 'fr' ? 'CGU' : 'Terms of Use'}
              </Link>
            </li>
            <li>
              <Link
                href={`/confidentialite?lang=${lang}`}
                className="hover:text-accent/90"
              >
                {lang === 'fr' ? 'Confidentialité' : 'Privacy Policy'}
              </Link>
            </li>
            <li>
              <Link
                href={`/mentions-legales?lang=${lang}`}
                className="hover:text-accent/90"
              >
                {lang === 'fr' ? 'Mentions légales' : 'Legal Notice'}
              </Link>
            </li>
            <li>
              <a
                href="mailto:hello@bobapp.fr"
                className="hover:text-accent/90"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </footer>
  )
}
