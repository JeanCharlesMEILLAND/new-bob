// components/FeaturesCard.tsx
import { clsx } from 'clsx'
import Image from 'next/image'

type Props = {
  className?: string
  icon: string
  title: string
  description: string
}

export function FeaturesCard({ className, icon, title, description }: Props) {
  return (
    <article className={clsx('card p-6', className)}>
      <div className="flex items-start gap-3">
        <Image src={icon} alt="" width={28} height={28} />
        <div>
          <h3 className="text-base font-semibold">{title}</h3>
          <p className="mt-1 text-white/75">{description}</p>
        </div>
      </div>
    </article>
  )
}
