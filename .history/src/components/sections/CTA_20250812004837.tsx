'use client'

import { useState } from 'react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'err'>('idle')

  async function join(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error('HTTP ' + res.status)
      setStatus('ok')
      setEmail('')
    } catch {
      setStatus('err')
    }
  }

  return (
    <section id="waitlist" className="section">
      <Container className="text-center">
        <h2 className="text-3xl font-bold">Rejoignez la liste d’attente</h2>
        <p className="mt-3 text-white/80">
          Soyez les premiers informés du lancement, recevez des accès anticipés et des bonus de
          démarrage.
        </p>
        <form onSubmit={join} className="mx-auto mt-8 flex max-w-md items-center gap-2">
          <label className="sr-only" htmlFor="email">
            Adresse email
          </label>
          <input
            id="email"
            required
            type="email"
            placeholder="votre@email.fr"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl2 border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none"
          />
          <Button type="submit" className="whitespace-nowrap">
            {status === 'loading'
              ? 'Envoi…'
              : status === 'ok'
              ? 'Inscrit ✔︎'
              : 'S’inscrire'}
          </Button>
        </form>
        {status === 'err' && (
          <p className="mt-2 text-red-300">Oups, une erreur est survenue. Réessayez.</p>
        )}
      </Container>
    </section>
  )
}
