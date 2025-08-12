import Container from './ui/Container'

export default function Footer() {
  return (
      <footer className="border-t border-white/10 py-10 text-sm">
        <Container className="flex flex-col md:flex-row items-center justify-between gap-6 text-accent/60">
          <p>© {new Date().getFullYear()} Bob App — Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <a href="/legal/terms" className="hover:text-accent/90">CGU</a>
            <a href="/legal/privacy" className="hover:text-accent/90">Vie privée</a>
            <a href="mailto:hello@bobapp.fr" className="hover:text-accent/90">Contact</a>
          </div>
        </Container>
      </footer>
  )
}
