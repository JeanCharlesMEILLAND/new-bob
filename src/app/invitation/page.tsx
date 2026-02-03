'use client'

import {useEffect, useState} from 'react'
import Image from 'next/image'
import {fetchDownloadLinks} from "@/utils/link.utils";
import {CheckIcon, ClipboardIcon, GiftIcon, SparklesIcon} from '@heroicons/react/24/outline'
import {AnimatePresence, motion} from 'framer-motion'

export default function Home() {
  const [referrer, setReferrer] = useState<string | null>(null)
  const [downloadLinks, setDownloadLinks] = useState({
    ios: "https://apps.apple.com/app/id6743935044",
    android: "https://play.google.com/store/apps/details?id=com.bobapp"
  })
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isCopied, setIsCopied] = useState<boolean>(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const ref = params.get('invitor')
    setReferrer(ref)

    const startTime = Date.now();

    Promise.all([
      fetchDownloadLinks(),
      new Promise(resolve => setTimeout(resolve, 2000)) // 2 second delay
    ]).then(([links]) => {
      console.log("====>", links)
      setDownloadLinks(links)
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(2000 - elapsedTime, 0);
      setTimeout(() => {
        setIsLoading(false)
      }, remainingTime);
    })
  }, [])

  const handleCopy = () => {
    if (referrer) {
      navigator.clipboard.writeText(referrer);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000);
    }
  }

  // Loading animation variants
  const loadingVariants = {
    initial: {opacity: 1},
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {duration: 0.6}
    }
  }

  // Main content animation variants
  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: {opacity: 0, y: 30},
    visible: {
      opacity: 1,
      y: 0,
      transition: {duration: 0.6}
    }
  }

  // Floating animation for decorative elements
  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-2, 2, -2],
      transition: {
        duration: 6,
        repeat: Infinity
      }
    }
  }

  if (isLoading) {
    return (
        <motion.div
            key="loading"
            variants={loadingVariants}
            initial="initial"
            exit="exit"
            className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary via-brand-100 to-brand-200 relative overflow-hidden">

          {/* Background decorative elements */}
          <div className="absolute inset-0 bg-grid opacity-20"></div>
          <motion.div
              className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-300/20 rounded-full blur-3xl"
              animate={{scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3]}}
              transition={{duration: 4, repeat: Infinity}}
          />
          <motion.div
              className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-brand-400/20 rounded-full blur-3xl"
              animate={{scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5]}}
              transition={{duration: 4, repeat: Infinity, delay: 1}}
          />

          <div className="text-center relative z-10">
            <motion.h1
                className="text-6xl font-bold mb-8 bg-gradient-to-r from-brand-600 to-brand-800 bg-clip-text text-transparent"
                initial={{scale: 0.8, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                transition={{duration: 0.8}}
            >
              Bob
            </motion.h1>

            {/* Enhanced loading dots */}
            <div className="flex justify-center space-x-2 mb-6">
              {[0, 1, 2].map((index) => (
                  <motion.div
                      key={index}
                      className="w-3 h-3 bg-brand-500 rounded-full"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                  />
              ))}
            </div>

            <motion.p
                className="text-lg text-accent font-medium"
                animate={{opacity: [0.7, 1, 0.7]}}
                transition={{duration: 2, repeat: Infinity}}
            >
              Préparation de votre invitation...
            </motion.p>
          </div>
        </motion.div>
    )
  }

  return (
      <motion.main
          key="main"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-primary via-brand-50 to-brand-100 p-4 text-center relative overflow-hidden">

        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        <motion.div
            className="absolute top-10 left-10 w-32 h-32 bg-brand-200/30 rounded-full blur-2xl"
            variants={floatingVariants}
            animate="animate"
        />
        <motion.div
            className="absolute top-1/3 right-10 w-24 h-24 bg-brand-300/40 rounded-full blur-2xl"
            variants={floatingVariants}
            animate="animate"
            transition={{delay: 1}}
        />
        <motion.div
            className="absolute bottom-20 left-1/4 w-40 h-40 bg-brand-100/50 rounded-full blur-3xl"
            variants={floatingVariants}
            animate="animate"
            transition={{delay: 2}}
        />

        {/* Success message with enhanced animation */}
        <AnimatePresence>
          {isCopied && (
              <motion.div
                  initial={{opacity: 0, y: -20, scale: 0.9}}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 25
                    }
                  }}
                  exit={{
                    opacity: 0,
                    y: -20,
                    scale: 0.9,
                    transition: {duration: 0.3}
                  }}
                  className="mb-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 text-green-700 px-6 py-4 rounded-2xl shadow-lg backdrop-blur-sm relative z-10"
              >
                <div className="flex items-center gap-3">
                  <motion.div
                      initial={{scale: 0}}
                      animate={{scale: 1}}
                      transition={{delay: 0.2, type: "spring"}}
                  >
                    <CheckIcon className="h-5 w-5"/>
                  </motion.div>
                  <div>
                    <p className="font-semibold">Code copié !</p>
                    <p className="text-sm">Vous pouvez maintenant le partager</p>
                  </div>
                </div>
              </motion.div>
          )}
        </AnimatePresence>

        {/* Header with staggered animation */}
        <motion.div variants={itemVariants} className="mb-12 relative z-10">
          <motion.div
              className="text-6xl mb-6"
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
          >
            👋
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-accent via-brand-700 to-brand-800 bg-clip-text text-transparent">
            Bienvenue sur Bob
          </h1>
          <p className="text-lg text-accent/80 max-w-2xl mx-auto">
            {referrer ?
                "Vous avez été invité(e) à rejoindre notre communauté !" :
                "Découvrez l'application qui révolutionne le partage entre voisins"
            }
          </p>
        </motion.div>

        {/* Invitation Card or Welcome Card with enhanced design */}
        {referrer ? (
            <motion.div variants={itemVariants} className="mb-12 w-full max-w-md relative z-10">
              <motion.p
                  className="text-lg mb-6 text-accent font-medium flex items-center justify-center gap-2"
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{delay: 0.5}}
              >
                <GiftIcon className="h-5 w-5 text-brand-600"/>
                Votre code d&#39;invitation :
              </motion.p>

              <motion.div
                  className="bg-white/90 backdrop-blur-sm rounded-3xl border border-gray-200/50 p-8 shadow-xl relative overflow-hidden"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                  }}
                  transition={{type: "spring", stiffness: 300}}
              >
                {/* Card background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-50/50 to-transparent"></div>

                <div className="relative z-10">
                  <motion.div
                      className="flex items-center justify-center gap-3 mb-6"
                      initial={{scale: 0}}
                      animate={{scale: 1}}
                      transition={{delay: 0.3, type: "spring"}}
                  >
                    <div className="bg-gradient-to-br from-brand-100 to-brand-200 p-3 rounded-2xl shadow-inner">
                      <motion.svg
                          className="w-6 h-6 text-brand-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          animate={{rotate: [0, 5, -5, 0]}}
                          transition={{duration: 2, repeat: Infinity, repeatDelay: 4}}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
                      </motion.svg>
                    </div>
                    <span className="text-sm font-medium text-gray-600">Code d&#39;invitation</span>
                  </motion.div>

                  <motion.div
                      className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-4 mb-6 border border-gray-200/50 relative"
                      initial={{scale: 0.9, opacity: 0}}
                      animate={{scale: 1, opacity: 1}}
                      transition={{delay: 0.4}}
                  >
                    <motion.span
                        className="text-2xl font-bold text-gray-800 tracking-wider font-mono block"
                        initial={{letterSpacing: "0.5em", opacity: 0}}
                        animate={{letterSpacing: "0.1em", opacity: 1}}
                        transition={{delay: 0.6, duration: 0.8}}
                    >
                      {referrer}
                    </motion.span>

                    {/* Sparkles decoration */}
                    <motion.div
                        className="absolute -top-2 -right-2"
                        animate={{rotate: 360}}
                        transition={{duration: 8, repeat: Infinity, ease: "linear"}}
                    >
                      <SparklesIcon className="h-4 w-4 text-brand-400"/>
                    </motion.div>
                  </motion.div>

                  <motion.button
                      onClick={handleCopy}
                      className={`w-full flex cursor-pointer items-center justify-center gap-2 px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                          isCopied
                              ? 'bg-gradient-to-r from-green-100 to-emerald-100 border border-green-300 text-green-700 shadow-md'
                              : 'bg-gradient-to-r from-brand-500 to-brand-600 text-white hover:from-brand-600 hover:to-brand-700 shadow-lg hover:shadow-xl'
                      }`}
                      disabled={isCopied}
                      whileHover={{scale: isCopied ? 1 : 1.02}}
                      whileTap={{scale: 0.98}}
                      initial={{y: 20, opacity: 0}}
                      animate={{y: 0, opacity: 1}}
                      transition={{delay: 0.8}}
                  >
                    <AnimatePresence mode="wait">
                      {isCopied ? (
                          <motion.div
                              key="copied"
                              initial={{scale: 0}}
                              animate={{scale: 1}}
                              exit={{scale: 0}}
                              className="flex items-center gap-2"
                          >
                            <CheckIcon className="h-5 w-5"/>
                            <span>Copié !</span>
                          </motion.div>
                      ) : (
                          <motion.div
                              key="copy"
                              initial={{scale: 0}}
                              animate={{scale: 1}}
                              exit={{scale: 0}}
                              className="flex items-center gap-2"
                          >
                            <ClipboardIcon className="h-5 w-5"/>
                            <span>Copier le code</span>
                          </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
        ) : (
            <motion.div variants={itemVariants} className="mb-12 relative z-10">
              <motion.div
                  className="bg-white/90 backdrop-blur-sm rounded-3xl border border-gray-200/50 p-8 shadow-xl max-w-lg mx-auto relative overflow-hidden"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                  }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-50/30 to-transparent"></div>
                <div className="relative z-10">
                  <motion.div
                      className="text-5xl mb-4"
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                  >
                    🚀
                  </motion.div>
                  <h2 className="text-2xl font-bold text-accent mb-4">
                    Rejoignez la communauté Bob
                  </h2>
                  <p className="text-gray-600">
                    Découvrez l&#39;application qui transforme votre quartier en communauté solidaire
                  </p>
                </div>
              </motion.div>
            </motion.div>
        )}

        {/* Download Buttons with enhanced hover effects */}
        <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 mb-8 relative z-10"
        >
          <motion.a
              href={downloadLinks.android}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              whileHover={{
                scale: 1.05,
                y: -2
              }}
              whileTap={{scale: 0.95}}
              transition={{type: "spring", stiffness: 300}}
          >
            <motion.div
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                whileHover={{
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)"
                }}
            >
              <Image
                  src="/app-badges/playstore.svg"
                  alt="Disponible sur Google Play"
                  width={190}
                  height={54}
                  loading="lazy"
              />
            </motion.div>
          </motion.a>

          <motion.a
              href={downloadLinks.ios}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              whileHover={{
                scale: 1.05,
                y: -2
              }}
              whileTap={{scale: 0.95}}
              transition={{type: "spring", stiffness: 300}}
          >
            <motion.div
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                whileHover={{
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)"
                }}
            >
              <Image
                  src="/app-badges/appstore.svg"
                  alt="Disponible sur l'App Store"
                  width={190}
                  height={54}
                  priority
              />
            </motion.div>
          </motion.a>
        </motion.div>

        {/* Footer with fade-in animation */}
        <motion.p
            variants={itemVariants}
            className="text-sm text-accent/60 max-w-md mx-auto relative z-10"
        >
          Rejoignez des milliers d&#39;utilisateurs qui partagent déjà avec Bob
        </motion.p>
      </motion.main>
  )
}