import {FeaturesCard} from "@/components/FeaturesCard";
import Image from "next/image";

export default function Features() {
  return (
      <div
          className="
              mt-10
              grid grid-cols-[1fr_1.6fr_1fr] grid-rows-3 gap-6
              items-center justify-items-stretch
              max-w-6xl mx-auto overflow-visible
              !z-50 static
            "
      >
        {/* Left column (rows 1..3) */}
        <FeaturesCard
            className="ml-5 col-start-1 row-start-1"
            icon={"/icons/Entre proches.svg"}
            title={"Entre proches uniquement"}
            description={"Fonctionne avec les contacts de votre téléphone. Pas d’annuaire public, pas d’inconnus."}
        />
        <FeaturesCard
            className="mr-5 col-start-1 row-start-2"
            icon={"/icons/Frame 1597880141.svg"}
            title={"Messagerie intégrée"}
            description={"Discutez en tête-à-tête pour vos échanges ou utilisez le chat d’événement pour coordonner un groupe."}
        />
        <FeaturesCard
            className="ml-5 col-start-1 row-start-3"
            icon={"/icons/Frame 1597880138.svg"}
            title={"Échanges d’objets & services"}
            description={"Proposez ou demandez en privé : un geste, une confirmation… et l’échange est suivi automatiquement."}
        />

        {/* Center image spanning all 3 middle rows */}
        <Image
            src="/central.png"
            alt="Aperçu de l'événement"
            width={700}
            height={700}
            className="col-start-2 row-start-1 row-span-3 justify-self-center self-center w-full h-auto object-contain scale-110 z-10"
        />

        {/* Right column (rows 1..3) */}
        <FeaturesCard
            className="mr-5 col-start-3 row-start-1"
            icon={"/icons/Frame 1597880140.svg"}
            title={"Rappels & agenda"}
            description={"Rappels automatiques des deux côtés et ajout à l’agenda pour éviter les oublis."}
        />
        <FeaturesCard
            className="ml-5 col-start-3 row-start-2"
            icon={"/icons/Frame 1597880139.svg"}
            title={"Événements privés"}
            description={"Invitez un petit groupe. Liste mixte (objets, consommables, services) et positionnement en 1 clic."}
        />
        <FeaturesCard
            className="m-5 col-start-3 row-start-3"
            icon={"/icons/Frame 1597880142.svg"}
            title={"Confidentialité intégrée"}
            description={"Aucune transaction financière. Aucune mise en relation publique. Historique personnel."}
        />
      </div>
  )
}