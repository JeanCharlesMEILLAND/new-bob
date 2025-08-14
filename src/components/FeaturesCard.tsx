import Image from "next/image"
import { clsx } from "clsx"
import React, { ElementType } from "react"

interface FeaturesCardProps {
  icon: string
  title?: string
  description?: string
  className?: string
  /** Balise HTML du titre — ex: "h2", "h3", "h4" (défaut: "h3") */
  as?: ElementType
  /** id optionnel du titre pour aria-labelledby */
  titleId?: string
}

export const FeaturesCard: React.FC<FeaturesCardProps> = ({
  icon,
  title = "Messagerie intégrée",
  description = "Discutez en tête-à-tête pour vos échanges ou utilisez le chat d'événement pour coordonner un groupe.",
  className,
  as = "h3",
  titleId,
}) => {
  const Tag: ElementType = as

  return (
    <article
      className={clsx(
        "relative rounded-2xl bg-white p-4 flex items-center gap-2",
        className
      )}
      aria-labelledby={titleId}
    >
      {/* Icône décorative */}
      <Image
        src={icon}
        alt=""
        width={48}
        height={48}
        aria-hidden="true"
        className="h-12 w-12"
      />

      <div className="space-y-1 flex-1">
        <Tag id={titleId} className="text-sm font-semibold text-gray-900 text-left">
          {title}
        </Tag>
        <p className="text-sm text-gray-700 leading-relaxed text-left">
          {description}
        </p>
      </div>
    </article>
  )
}
