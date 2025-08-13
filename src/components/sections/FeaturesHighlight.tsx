"use client"

import Image from "next/image"
import Container from "@/components/ui/Container"
import { motion } from "framer-motion"

export const FeaturesHighlight = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  }

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        delay: 0.3,
      },
    },
  }

  return (
    <Container className="mt-16 relative" id="events">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="relative px-4 py-10 sm:px-6 md:px-10 sm:py-12 md:py-14 rounded-2xl sm:rounded-3xl bg-gradient-to-tr from-[#166DF6] to-[#05B1F5]"
      >
        <div className="relative z-10 h-fit">
          {/* Texte */}
          <div className="text-white space-y-4 sm:space-y-6 md:w-2/3 md:pr-10">
            {/* H2 optimisé pour LCP */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-extrabold">
                Organisez vos événements privés
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base md:text-lg text-white/95 leading-relaxed max-w-2xl"
            >
              Avec BOB, créez{" "}
              <strong className="font-bold">des événements</strong> privés pour vos proches et gérez tout ce qui est
              nécessaire en un seul endroit. Idéal pour un barbecue, un déménagement ou un projet entre amis.
            </motion.p>

            <motion.ul variants={containerVariants} className="space-y-3 text-white/95">
              {[
                {
                  text: (
                    <>
                      <strong>Créez une liste avec vos besoins et services</strong> : par exemple, &quot;2 chaises
                      pliantes&quot;, &quot;boissons fraîches&quot;, &quot;aide pour monter un meuble&quot;
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Chaque participant se positionne</strong> : chacun choisit un élément de la liste et
                      s’engage à l’apporter ou à le réaliser
                    </>
                  ),
                },
                { text: <><strong>Invitations ciblées</strong> : 5, 10 ou 20 contacts</> },
                { text: <><strong>Chat collectif pour coordonner tout le monde</strong></> },
                {
                  text: (
                    <>
                      <strong>Positionnement en 1 clic</strong> : dès qu’un participant se positionne, l&apos;échange
                      individuel est créé automatiquement
                    </>
                  ),
                },
              ].map((item, idx) => (
                <motion.li key={idx} variants={itemVariants} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white shrink-0" />
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Image principale optimisée */}
          <motion.div
            variants={imageVariants}
            className="mt-8 md:mt-0 md:absolute md:inset-y-0 md:right-0 md:w-1/3 flex items-center justify-center"
          >
            <Image
              src="/events-preview.webp"
              alt="Aperçu mobile d'un événement privé"
              width={520}
              height={800}
              className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[520px] scale-110 sm:scale-125 h-auto object-contain drop-shadow-2xl"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        </div>

        {/* Décor de fond */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-2/3 bg-[url('/frame-decor.svg')] bg-no-repeat bg-right bg-cover opacity-30"
        />
      </motion.div>

      {/* Image décorative supplémentaire */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Image
          src="/mask-group.webp"
          alt="Décor graphique"
          width={600}
          height={600}
          className="mx-auto w-full max-w-6xl h-auto object-contain"
          loading="lazy"
          decoding="async"
        />
      </motion.div>
    </Container>
  )
}
