import Image from "next/image"
import { memo } from "react"

const CircleBgComponent = () => {
  return (
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none select-none"
      aria-hidden="true"
    >
      <Image
        src="/circle.webp" // converti en WebP pour réduire le poids
        alt=""
        width={1800}
        height={1800}
        className="h-screen scale-150 w-auto object-contain block"
        loading="lazy"
        decoding="async"
        priority={false}
      />
    </div>
  )
}

// Ajout d'un displayName pour ESLint
CircleBgComponent.displayName = "CircleBg"

export const CircleBg = memo(CircleBgComponent)
