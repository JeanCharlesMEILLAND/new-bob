"use client"

import Image from "next/image"
import Container from "@/components/ui/Container"
import {motion} from "framer-motion"

export default function FeaturesHighlight() {
  const containerVariants = {
    hidden: {opacity: 0},
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
    hidden: {opacity: 0, x: -20},
    visible: {opacity: 1, x: 0, transition: {duration: 0.5}},
  }

  const imageVariants = {
    hidden: {opacity: 0, x: 50},
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
            viewport={{once: true, amount: 0.2}}
            variants={containerVariants}
            className={"relative px-4 py-10 sm:px-6 md:px-10 sm:py-12 md:py-14 rounded-2xl sm:rounded-3xl bg-gradient-to-tr from-[#166DF6] to-[#05B1F5] "}>
          {/* Positioning wrapper */}
          <div className="relative z-10 h-fit">
            {/* Left: content (takes left half on md+) */}
            <div className="text-white space-y-4 sm:space-y-6 md:w-2/3 md:pr-10">
              <motion.h2
                  variants={itemVariants}
                  className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
                Organisez vos événements privés
              </motion.h2>

              <motion.p
                  variants={itemVariants}
                  className="text-sm sm:text-base md:text-lg text-white/95 leading-relaxed max-w-2xl">
                Avec BOB, créez <strong className={"font-bold"}>des événements</strong> privés pour vos proches et
                gérez
                tout
                ce qui est nécessaire en un seul endroit. Idéal pour un barbecue, un
                déménagement ou un projet entre amis.
              </motion.p>

              <motion.ul
                  variants={containerVariants}
                  className="space-y-3 text-white/95">
                <motion.li
                    variants={itemVariants}
                    className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white shrink-0"/>
                  <span>
                <strong>Créez une liste avec vos besoins et services</strong> &nbsp;: par exemple,
                    &#34;2 chaises pliantes&#34;, &#34;boissons fraîches&#34;, &#34;aide pour monter un meuble&#34;
              </span>
                </motion.li>
                <motion.li
                    variants={itemVariants}
                    className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white shrink-0"/>
                  <span>
                <strong>Chaque participant se positionne</strong> &nbsp;: chacun choisit un élément de la liste et
                s&#39;engage à l&#39;apporter ou à le réaliser
              </span>
                </motion.li>
                <motion.li
                    variants={itemVariants}
                    className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white shrink-0"/>
                  <span><strong>Invitations ciblées</strong> &nbsp;: 5, 10 ou 20 contacts</span>
                </motion.li>
                <motion.li
                    variants={itemVariants}
                    className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white shrink-0"/>
                  <span><strong>Chat collectif pour coordonner tout le monde</strong> </span>
                </motion.li>
                <motion.li
                    variants={itemVariants}
                    className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white shrink-0"/>
                  <span>
                <strong>Positionnement en 1 clic</strong> &nbsp;: dès qu&#39;un participant se positionne, l&#39;échange
                individuel est créé automatiquement
              </span>
                </motion.li>
              </motion.ul>
            </div>

            {/* Right: image (absolute on md+, exactly right half) */}
            <motion.div
                variants={imageVariants}
                className="mt-8 md:mt-0 md:absolute md:inset-y-0 md:right-0 md:w-1/3 flex items-center justify-center">
              <Image
                  src="/7 3 1.webp"
                  alt="Aperçu mobile d'un événement privé"
                  width={351}
                  height={516}
                  className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[520px] scale-110 sm:scale-110 h-auto object-contain drop-shadow-2xl"
                  priority
              />
            </motion.div>
          </div>

          <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 w-2/3 bg-[url('/Frame%201597880136.svg')] bg-no-repeat bg-right bg-cover opacity-30"
          />
        </motion.div>

        {/* Image décorative supplémentaire */}
        <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.8, delay: 0.5}}
        >
          <Image
              src="/Mask group (2) (1).png"
              alt="Décor graphique"
              width={1637}
              height={888}
              className="mx-auto w-full max-w-6xl h-auto object-contain"
              loading="lazy"
              decoding="async"
          />
        </motion.div>
      </Container>
  )
}
