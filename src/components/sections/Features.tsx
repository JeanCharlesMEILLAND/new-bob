"use client"

import { FeaturesCard } from "@/components/FeaturesCard"
import Image from "next/image"
import { motion } from "framer-motion"
import Container from "@/components/ui/Container"

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.3 } },
  }

  return (
    <section
      aria-labelledby="features-heading"
      className="relative py-16 md:py-24"
      style={{backgroundColor: '#E8F4F8'}}
      id="features"
    >
      {/* Background decorative image */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Image
          src="/Frame 1000001361.png"
          alt=""
          fill
          className="object-cover opacity-50"
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

          {/* Features grid with central image */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

            {/* Left column features */}
            <div className="space-y-8 lg:pr-8">
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

            {/* Central image */}
            <motion.div
              variants={imageVariants}
              className="flex justify-center items-center py-8 lg:py-0"
            >
              <Image
                src="/Group 1000001319.png"
                alt="Aperçu de l'application BOB"
                width={500}
                height={600}
                className="w-full max-w-[400px] lg:max-w-[500px] h-auto object-contain"
                priority
              />
            </motion.div>

            {/* Right column features */}
            <div className="space-y-8 lg:pl-8">
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
        </motion.div>
      </Container>
    </section>
  )
}