'use client'

import {useEffect, useState} from 'react'
import Image from 'next/image'
import {fetchDownloadLinks} from "@/utils/link.utils";
import {CheckIcon, ClipboardIcon, StarIcon, SparklesIcon} from '@heroicons/react/24/outline'
import {motion, AnimatePresence} from 'framer-motion'


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

  if (isLoading) {
    return (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary via-brand-100 to-brand-200 overflow-hidden relative"
        >
          {/* Animated background particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-brand-400/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-20, -40, -20],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center relative z-10"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="mb-8"
            >
              <motion.h1 
                className="text-6xl font-bold mb-4 bg-gradient-to-r from-brand-600 to-brand-800 bg-clip-text text-transparent"
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                style={{ backgroundSize: '200% 200%' }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Bob
              </motion.h1>
              <motion.div
                className="flex justify-center items-center space-x-2"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <SparklesIcon className="w-8 h-8 text-brand-500" />
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="space-y-4"
            >
              <div className="flex justify-center space-x-1">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-3 h-3 bg-brand-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ 
                      duration: 1.2, 
                      repeat: Infinity, 
                      delay: i * 0.2 
                    }}
                  />
                ))}
              </div>
              <p className="text-lg text-accent font-medium">Préparation de votre invitation...</p>
            </motion.div>
          </motion.div>
        </motion.div>
    )
  }

  return (
      <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-primary via-brand-50 to-brand-100 p-4 text-center relative overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-grid opacity-[0.15] [mask-image:radial-gradient(circle_at_center,black,transparent_70%)]" />
        <div className="absolute top-20 left-10 w-32 h-32 bg-brand-200/20 rounded-full blur-3xl animate-bob" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-brand-300/15 rounded-full blur-3xl animate-bob-slow" />
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-brand-400/10 rounded-full blur-2xl animate-bob-slower" />

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4 relative z-10"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block text-6xl mb-4"
          >
            👋
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent via-brand-700 to-brand-800 bg-clip-text text-transparent">
            Bienvenue sur Bob
          </h1>
          <motion.div
            className="flex justify-center space-x-2 mt-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -8, 0] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  delay: i * 0.1,
                  ease: "easeInOut" 
                }}
              >
                <StarIcon className="w-5 h-5 text-brand-400" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {referrer ? (
            <motion.div 
              className="mb-6 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <motion.p 
                className="text-lg mb-6 text-accent font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                Votre code d&#39;invitation est :
              </motion.p>

              {/* Enhanced Copy Card */}
              <motion.div
                  className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 shadow-2xl max-w-sm mx-auto relative overflow-hidden group"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                {/* Animated gradient background */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-brand-400/20 to-brand-600/20 rounded-2xl"
                  animate={{ 
                    background: [
                      "linear-gradient(45deg, rgba(75,123,255,0.2) 0%, rgba(47,93,243,0.2) 100%)",
                      "linear-gradient(135deg, rgba(47,93,243,0.2) 0%, rgba(37,73,198,0.2) 100%)",
                      "linear-gradient(225deg, rgba(37,73,198,0.2) 0%, rgba(75,123,255,0.2) 100%)",
                      "linear-gradient(315deg, rgba(75,123,255,0.2) 0%, rgba(47,93,243,0.2) 100%)"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="bg-accent/20 p-2 rounded-full">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-accent/80">Code d&#39;invitation</span>
                  </div>

                  <div className="bg-white/10 rounded-xl p-4 mb-4 border border-white/20">
                    <span className="text-2xl font-bold text-white tracking-wider">{referrer}</span>
                  </div>

                  <button
                      onClick={handleCopy}
                      className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                          isCopied
                              ? 'bg-green-500/20 border-green-400/40 text-green-400'
                              : 'bg-accent/20 border-accent/40 text-accent hover:bg-accent/30 hover:border-accent/60 hover:scale-105'
                      } border backdrop-blur-sm`}
                      disabled={isCopied}
                  >
                    {isCopied ? (
                        <>
                          <CheckIcon className="h-5 w-5"/>
                          <span>Copié avec succès !</span>
                        </>
                    ) : (
                        <>
                          <ClipboardIcon className="h-5 w-5"/>
                          <span>Copier le code</span>
                        </>
                    )}
                  </button>
                </div>

                {/* Decorative elements */}
                <motion.div
                    className="absolute top-2 right-2 w-8 h-8 bg-gradient-to-br from-brand-400/20 to-brand-600/20 rounded-full blur-sm"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                <motion.div
                    className="absolute bottom-2 left-2 w-6 h-6 bg-gradient-to-br from-brand-600/20 to-brand-800/20 rounded-full blur-sm"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                />
              </motion.div>
            </motion.div>
        ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mb-8 relative z-10"
            >
              <motion.div
                className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 shadow-xl max-w-md mx-auto"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="text-4xl mb-4"
                >
                  🚀
                </motion.div>
                <p className="text-lg font-medium text-accent mb-2">
                  Découvrez notre application dès maintenant !
                </p>
                <p className="text-sm text-accent/80">
                  Rejoignez la communauté Bob et simplifiez vos échanges
                </p>
              </motion.div>
            </motion.div>
        )}

        {/* Enhanced Success Popup */}
        <AnimatePresence>
          {isCopied && (
              <motion.div 
                className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                    className="bg-green-500/95 backdrop-blur-lg rounded-2xl px-8 py-6 shadow-2xl border border-green-400/60"
                    initial={{ scale: 0.8, y: 50, opacity: 0 }}
                    animate={{ scale: 1, y: 0, opacity: 1 }}
                    exit={{ scale: 0.9, y: -20, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <motion.div 
                    className="flex items-center gap-4 text-white"
                    initial={{ x: -20 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <motion.div 
                      className="bg-white/25 p-3 rounded-full"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <CheckIcon className="h-7 w-7"/>
                    </motion.div>
                    <div>
                      <motion.p 
                        className="font-bold text-lg"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                      >
                        Code copié !
                      </motion.p>
                      <motion.p 
                        className="text-sm text-green-50"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                      >
                        Vous pouvez maintenant le partager
                      </motion.p>
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.6, repeat: 3, delay: 0.3 }}
                    >
                      <SparklesIcon className="h-6 w-6 text-green-200" />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
          )}
        </AnimatePresence>

        <motion.div 
          className="flex flex-col sm:flex-row gap-6 mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <motion.a
              href={downloadLinks.android}
              className="inline-flex transform-gpu"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              style={{ transitionDelay: "1.1s" }}
          >
            <motion.div
              className="relative overflow-hidden rounded-2xl"
              whileHover={{ boxShadow: "0 20px 40px rgba(75, 123, 255, 0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <Image
                  src="/app-badges/playstore.svg"
                  alt="Disponible sur Google Play"
                  width={190}
                  height={54}
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                  className="filter drop-shadow-lg"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                whileHover={{ x: "200%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          </motion.a>
          
          <motion.a
              href={downloadLinks.ios}
              className="inline-flex transform-gpu"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              style={{ transitionDelay: "1.2s" }}
          >
            <motion.div
              className="relative overflow-hidden rounded-2xl"
              whileHover={{ boxShadow: "0 20px 40px rgba(75, 123, 255, 0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <Image
                  src="/app-badges/appstore.svg"
                  alt="Disponible sur l'App Store"
                  width={190}
                  height={54}
                  priority
                  fetchPriority="high"
                  className="filter drop-shadow-lg"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                whileHover={{ x: "200%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          </motion.a>
        </motion.div>
      </motion.main>
  )
}