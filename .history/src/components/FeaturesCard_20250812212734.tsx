import Image from 'next/image'
import { clsx } from 'clsx'

interface FeaturesCardProps {
  icon: string
  title?: string
  description?: string
  /** classes pour le wrapper externe (animation, placement grid, offsets…) */
  wrapperClassName?: string
  /** classes optionnelles pour la carte */
  className?: string
}

export const FeaturesCard = ({
  icon,
  title = 'Messagerie intégrée',
  description = "Discutez en tête-à-tête pour vos échanges ou utilisez le chat d'événement pour coordonner un groupe.",
  wrapperClassName,
  className,
}: FeaturesCardProps) => {
  return (
    <div className={clsx('w-full flex justify-center', wrapperClassName)}>
      <article
        className={clsx(
          // Base carte rectangulaire large
          'rounded-xl bg-white text-slate-900 ring-1 ring-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.06)]',
          'px-8 py-4 flex items-start gap-5 transition-transform will-change-transform',
          'min-w-[340px] max-w-[400px]',
          // hover toujours effectif (animation sur wrapper)
          'hover:-translate-y-1',
          className
        )}
      >
        {/* Icône */}
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#E8F0FF] ring-1 ring-[#4b7bff]/20 shrink-0">
          <Image src={icon} alt="" width={32} height={32} />
        </div>

        {/* Contenu */}
        <div className="flex-1 space-y-1">
          <h3 className="text-base font-semibold">{title}</h3>
          <p className="text-sm leading-relaxed text-slate-700">{description}</p>
        </div>
      </article>
    </div>
  )
}
