import Image from 'next/image'
import { clsx } from 'clsx'

interface FeaturesCardProps {
  icon: string
  title?: string
  description?: string
  className?: string
}

export const FeaturesCard = ({
  icon,
  title = 'Messagerie intégrée',
  description = "Discutez en tête-à-tête pour vos échanges ou utilisez le chat d'événement pour coordonner un groupe.",
  className,
}: FeaturesCardProps) => {
  return (
    <article
      className={clsx(
        // base card
        'relative rounded-2xl bg-white text-slate-900 ring-1 ring-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.06)]',
        'p-4 flex items-start gap-3 transition-transform will-change-transform',
        // petit lift au hover (desktop)
        'hover:-translate-y-1',
        className
      )}
    >
      {/* Icône dans un médaillon bleu clair */}
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8F0FF] ring-1 ring-[#4b7bff]/20 shrink-0">
        <Image src={icon} alt="" width={28} height={28} />
      </div>

      {/* Contenu */}
      <div className="flex-1 space-y-1">
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="text-sm leading-relaxed text-slate-700">{description}</p>
      </div>
    </article>
  )
}
