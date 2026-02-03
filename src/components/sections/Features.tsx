"use client"

import Image from "next/image"
import {motion} from "framer-motion"
import Container from "@/components/ui/Container"
import { FeaturesCard } from "@/components/FeaturesCard"

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const imageVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.2 }
    },
  }

  return (
    <section
      aria-labelledby="features-heading"
      className="relative py-12 sm:py-16 md:py-20 lg:py-24"
      id="features"
    >
      {/* Background decorative image */}
      <div className="absolute inset-0 -top-1/4 md:-top-1/3 lg:-top-1/2 pointer-events-none">
        <Image
          src="/Frame 1000001361.png"
          alt=""
          fill
          className="object-contain opacity-30 sm:opacity-40 md:opacity-50"
          loading="lazy"
          quality={90}
        />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="relative"
        >
          {/* H2 masqué visuellement mais lu par les aides techniques */}
          <h2 id="features-heading" className="sr-only">
            Fonctionnalités principales
          </h2>

          {/* MOBILE VERSION - Show individual feature cards */}
          <div className="md:hidden space-y-6">

            {/* First 4 features (above image on mobile) */}
            <div className="space-y-4">
              {/* Bob Call */}
              <motion.div variants={itemVariants}>
                <FeaturesCard
                  icon="/icons/Frame 1597880141.svg"
                  title="Bob Call"
                  description="La fonction d'appel intégrée pour joindre vos contacts sans quitter l'application."
                  as="h3"
                  titleId="feature-bobcall"
                />
              </motion.div>

              {/* Messagerie intégrée */}
              <motion.div variants={itemVariants}>
                <FeaturesCard
                  icon="/icons/Frame 1597880141.svg"
                  title="Messagerie intégrée"
                  description="Discutez en tête-à-tête pour vos échanges ou utilisez le chat d'événement pour coordonner un groupe."
                  as="h3"
                  titleId="feature-messages"
                />
              </motion.div>

              {/* Échanges d'objets & services */}
              <motion.div variants={itemVariants}>
                <FeaturesCard
                  icon="/icons/Frame 1597880138.svg"
                  title="Échanges d'objets & services"
                  description="Proposez ou demandez en privé : un geste, une confirmation... et l'échange est suivi automatiquement."
                  as="h3"
                  titleId="feature-echanges"
                />
              </motion.div>

              {/* Bob IA */}
              <motion.div variants={itemVariants}>
                <FeaturesCard
                  icon="/icons/Frame 1597880142.svg"
                  title="Bob IA"
                  description="Votre assistant intelligent intégré à Bob. App pour gérer plus facilement vos prêts et vos objets."
                  as="h3"
                  titleId="feature-bobia"
                />
              </motion.div>
            </div>

            {/* Central image for mobile */}
            <motion.div
              variants={imageVariants}
              className="flex justify-center items-center py-6"
            >
              <Image
                src="/Group 1000001319.png"
                alt="Aperçu de l'application BOB"
                width={400}
                height={500}
                className="w-full max-w-[280px] sm:max-w-[320px] h-auto object-contain drop-shadow-xl"
                priority
              />
            </motion.div>

            {/* Last 4 features (below image on mobile) */}
            <div className="space-y-4">
              {/* Rappels & agenda */}
              <motion.div variants={itemVariants}>
                <FeaturesCard
                  icon="/icons/Frame 1597880140.svg"
                  title="Rappels & agenda"
                  description="Rappels automatiques des deux côtés et ajout à l'agenda pour éviter les oublis."
                  as="h3"
                  titleId="feature-rappels"
                />
              </motion.div>

              {/* Événements privés */}
              <motion.div variants={itemVariants}>
                <FeaturesCard
                  icon="/icons/Frame 1597880139.svg"
                  title="Événements privés"
                  description="Invitez un petit groupe. Liste mixte (objets, consommables, services) et positionnement en 1 clic."
                  as="h3"
                  titleId="feature-evenements"
                />
              </motion.div>

              {/* Entre proches uniquement */}
              <motion.div variants={itemVariants}>
                <FeaturesCard
                  icon="/icons/Entre proches.svg"
                  title="Entre proches uniquement"
                  description="Fonctionne avec les contacts de votre téléphone. Pas d'annuaire public, pas d'inconnus."
                  as="h3"
                  titleId="feature-proches"
                />
              </motion.div>

              {/* Confidentialité intégrée */}
              <motion.div variants={itemVariants}>
                <FeaturesCard
                  icon="/icons/Frame 1597880142.svg"
                  title="Confidentialité intégrée"
                  description="Aucune transaction financière. Aucune mise en relation publique. Historique personnel."
                  as="h3"
                  titleId="feature-confidentialite"
                />
              </motion.div>
            </div>
          </div>

          {/* DESKTOP VERSION - Single large image */}
          <motion.div
            variants={imageVariants}
            className="hidden md:flex justify-center items-center"
          >
            <Image
              src="/Group 1000001359.svg"
              alt="Fonctionnalités de l'application BOB - Bob Call, Messagerie intégrée, Échanges d'objets et services, Rappels et agenda, Événements privés, Entre proches uniquement, Bob IA, et Confidentialité intégrée"
              width={1800}
              height={1000}
              className="w-full h-auto object-contain max-w-none lg:max-w-[1200px] xl:max-w-[1400px] 2xl:min-w-[1600px]"
              priority
              quality={95}
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}