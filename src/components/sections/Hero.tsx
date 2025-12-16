"use client"

import Image from "next/image"
import Container from "@/components/ui/Container"
import {motion} from "framer-motion"
import {fetchDownloadLinks} from "@/utils/link.utils"
import {useEffect, useState} from "react"

export default function Hero() {
  const [downloadLinks, setDownloadLinks] = useState({
    ios: "https://apps.apple.com/app/id6743935044",
    android: "https://play.google.com/store/apps/details?id=com.bobapp"
  });

  useEffect(() => {
    const loadDownloadLinks = async () => {
      const links = await fetchDownloadLinks();
      setDownloadLinks(links);
    };
    loadDownloadLinks();
  }, []);

  return (
      <motion.section
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.8}}
          className="relative pt-32 sm:pt-20 md:pt-28 pb-8 z-10"
          // style={{backgroundColor: '#E8F4F8'}}
      >

        <Container className="text-center space-y-6 relative z-10">
          {/* Badge conformité */}
          <motion.div
              initial={{opacity: 0, y: -20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: 0.2}}
              className="-mt-4 sm:-mt-6 inline-flex items-center gap-2 rounded-full border border-accent px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-accent"
          >
          <span className="hidden sm:inline">
            Usage privé entre proches • Aucune transaction financière • Pas de mise en relation publique
          </span>
            <span className="sm:hidden">Usage privé • Sans transaction • Confidentiel</span>
          </motion.div>

          {/* Titre principal optimisé pour LCP */}
          <motion.div
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.4, delay: 0.1}}
          >
            <h1 className="mt-6 sm:mt-10 md:mt-22 text-center">
              <div className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl">
                <span className="bg-gradient-to-tr from-[#00C9F7] to-[#166AF6] bg-clip-text text-transparent font-light">
                  Bober
                </span>
                <span className="font-semibold" style={{color: '#25416E'}}> c&#39;est</span>
              </div>
              <div className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-semibold uppercase mt-3" style={{color: '#25416E', letterSpacing: '0.02em'}}>
                COMMUNIQUER, S&#39;ENTRAIDER ET<br />
                S&#39;ORGANISER.
              </div>
            </h1>
          </motion.div>

          {/* Sous-titre */}
          <motion.p
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: 0.6}}
              className="mx-auto max-w-3xl text-base sm:text-lg leading-relaxed px-4 sm:px-6 md:px-0"
              style={{color: '#5A6B7B'}}
          >
            Communiquez simplement et en toute confidentialité avec vos proches grâce à une messagerie sécurisée et des appels intégrés. Organisez ensuite vos événements et gérez vos échanges d'objets et de services, uniquement avec vos contacts, depuis une seule application.
          </motion.p>

          {/* Légende */}
          {/*<motion.p*/}
          {/*    initial={{opacity: 0, y: 20}}*/}
          {/*    animate={{opacity: 1, y: 0}}*/}
          {/*    transition={{duration: 0.6, delay: 0.7}}*/}
          {/*    className="text-base text-accent -mt-2"*/}
          {/*>*/}
          {/*  Disponible sur iOS et Android*/}
          {/*</motion.p>*/}

          {/* Texte de téléchargement */}
          <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: 0.75}}
              className="text-center !mb-0"
          >
            <h2 className="text-xl sm:text-2xl font-semibold !mb-0 !pb-0" style={{color: '#25416E', marginBottom: '0'}}>
              Télécharger l&#39;application
            </h2>
          </motion.div>

          {/* Badges stores optimisés */}
          <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: 0.8}}
              id="download"
              className="flex flex-wrap items-center justify-center gap-5 !mt-0 pt-2"
          >
            {/* App Store (priority) */}
            <motion.a
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                href={downloadLinks.ios}
                aria-label="Télécharger BOB sur l'App Store"
                className="inline-flex"
                target="_blank"
                rel="noopener noreferrer"
            >
              <Image
                  src="/app-store.svg"
                  alt="Disponible sur l'App Store"
                  width={180}
                  height={54}
                  priority
                  fetchPriority="high"
              />
            </motion.a>

            {/* Play Store (lazy) */}
            <motion.a
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                href={downloadLinks.android}
                aria-label="Télécharger BOB sur Google Play"
                className="inline-flex"
                target="_blank"
                rel="noopener noreferrer"
            >
              <Image
                  src="/play-store.svg"
                  alt="Disponible sur Google Play"
                  width={190}
                  height={54}
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
              />
            </motion.a>
          </motion.div>
        </Container>
      </motion.section>
  )
}
