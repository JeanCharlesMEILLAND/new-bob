import { FeaturesCard } from "@/components/FeaturesCard"
import Image from "next/image"
import { clsx } from "clsx"

export default function Features() {
  return (
    <section id="features" className="section pt-16">
      <div
        className="
          relative
          mx-auto max-w-7xl
          grid grid-cols-1 gap-8
          md:grid-cols-[1.2fr_1.6fr_1.2fr] md:grid-rows-3
          items-center
        "
      >
        {/* Colonne gauche */}
        <FeaturesCard
          wrapperClassName={clsx(
            "md:col-start-1 md:row-start-1",
            "animate-bob",
            "md:-translate-y-2"
          )}
          icon="/icons/Entre proches.svg"
          title="Entre proches uniquement"
          description="Fonctionne avec les contacts de votre téléphone. Pas d’annuaire public, pas d’inconnus."
        />

        <FeaturesCard
          wrapperClassName={clsx(
            "md:col-start-1 md:row-start-2",
            "animate-bob-slow",
            "md:translate-y-3"
          )}
          icon="/icons/Frame 1597880141.svg"
          title="Messagerie intégrée"
          description="Discutez en tête-à-tête pour vos échanges ou utilisez le chat d’événement pour coordonner un groupe."
        />

        <FeaturesCard
          wrapperClassName={clsx(
            "md:col-start-1 md:row-start-3",
            "animate-bob-slower",
            "md:-translate-y-1"
          )}
          icon="/icons/Frame 1597880138.svg"
          title="Échanges d’objets & services"
          description="Proposez ou demandez en privé : une confirmation… et l’échange est suivi automatiquement."
        />

        {/* Image centrale */}
        <div className="md:col-start-2 md:row-start-1 md:row-span-3 flex justify-center items-center z-10">
          <Image
            src="/central.png"
            alt="Aperçu de l'application"
            width={700}
            height={700}
            className="w-full max-w-[600px] h-auto object-contain md:scale-110"
            priority
          />
        </div>

        {/* Colonne droite */}
        <FeaturesCard
          wrapperClassName={clsx(
            "md:col-start-3 md:row-start-1",
            "animate-bob-slower",
            "md:-translate-y-3"
          )}
          icon="/icons/Frame 1597880140.svg"
          title="Rappels & agenda"
          description="Rappels automatiques des deux côtés et ajout à l’agenda pour éviter les oublis."
        />

        <FeaturesCard
          wrapperClassName={clsx(
            "md:col-start-3 md:row-start-2",
            "animate-bob",
            "md:translate-y-2"
          )}
          icon="/icons/Frame 1597880139.svg"
          title="Événements privés"
          description="Invitez un petit groupe. Chacun se positionne en 1 clic, l’échange individuel est créé."
        />

        <FeaturesCard
          wrapperClassName={clsx(
            "md:col-start-3 md:row-start-3",
            "animate-bob-slow",
            "md:-translate-y-1"
          )}
          icon="/icons/Frame 1597880142.svg"
          title="Confidentialité intégrée"
          description="Aucune transaction financière. Aucune mise en relation publique. Historique personnel."
        />
      </div>
    </section>
  )
}
