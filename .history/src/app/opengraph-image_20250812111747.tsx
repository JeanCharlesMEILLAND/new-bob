/* eslint-disable @next/next/no-img-element */  // ← nécessaire ici pour OG
import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OG() {
  const name = process.env.NEXT_PUBLIC_SITE_NAME || 'BOB'
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://new-bob.vercel.app'

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 80,
          background: '#0b1020',
          color: '#fff',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          {/* OK d’utiliser <img> dans Next/OG */}
          <img src={`${base}/bob1.png`} alt="Logo BOB" width={80} height={80} style={{ borderRadius: 16 }} />
          <div style={{ fontSize: 44, fontWeight: 800, letterSpacing: -0.5 }}>{name}</div>
        </div>
        <div style={{ marginTop: 24, fontSize: 40, fontWeight: 700 }}>
          Échanges privés entre proches
        </div>
        <div style={{ marginTop: 12, fontSize: 26, lineHeight: 1.35, opacity: 0.9 }}>
          Prêter, emprunter et organiser des événements en privé avec ses contacts. <br />
          Aucune transaction financière. Aucune mise en relation publique.
        </div>
      </div>
    ),
    size
  )
}
