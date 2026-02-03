import Image from "next/image"
import {memo} from "react"

const CircleBgComponent = () => {
  return (
      <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none select-none"
          aria-hidden="true"
      >
        <Image
            src="/circle.svg"
            alt=""
            width={206}
            height={190}
            className="h-screen scale-150 w-auto object-contain block"
            loading="lazy"
            decoding="async"
            priority={false}
        />
      </div>
  )
}

CircleBgComponent.displayName = "CircleBg"

export const CircleBg = memo(CircleBgComponent)
