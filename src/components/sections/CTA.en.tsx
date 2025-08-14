"use client"

import Image from "next/image"
import Container from "@/components/ui/Container"
import {motion} from "framer-motion"

export default function CTAEn() {
  return (
      <Container className="mt-16 relative">
        {/* Background decorative (same as default) */}
        <div className="absolute inset-0 flex items-center justify-center -z-10 overflow-hidden rounded-3xl">
          <Image
              src="/circle-small.webp"
              alt=""
              width={206}
              height={190}
              className="w-auto h-auto object-contain opacity-20 scale-110"
              loading="lazy"
              decoding="async"
          />
        </div>

        <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.2}}
            transition={{duration: 0.8}}
            className="min-h-[421px] relative px-4 py-8 pb-0 sm:px-6 md:px-10 sm:py-10 md:py-14 rounded-2xl sm:rounded-3xl bg-gradient-to-tr from-[#166DF6] to-[#05B1F5]"
        >
          <div className="relative z-10 h-fit">
            {/* Text */}
            <div className="text-white space-y-4 sm:space-y-6 md:w-1/2 md:pr-10">
              <motion.h2
                  initial={{opacity: 0, x: -20}}
                  whileInView={{opacity: 1, x: 0}}
                  viewport={{once: true}}
                  transition={{duration: 0.6, delay: 0.2}}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight"
              >
                Start bobing right now!
              </motion.h2>

              <motion.p
                  initial={{opacity: 0, x: -20}}
                  whileInView={{opacity: 1, x: 0}}
                  viewport={{once: true}}
                  transition={{duration: 0.6, delay: 0.3}}
                  className="text-sm sm:text-base text-white/95 leading-relaxed max-w-2xl"
              >
                With BOB, organizing your private exchanges becomes simple and well tracked. The app is 100% free, with
                no payments or subscriptions, and all features included.
              </motion.p>

              {/* Store badges */}
              <motion.div
                  initial={{opacity: 0, y: 20}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true}}
                  transition={{duration: 0.6, delay: 0.4}}
                  className="flex flex-wrap items-center justify-center gap-4 pt-2"
              >
                <motion.a
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.95}}
                    href="https://apps.apple.com/app/id6743935044"
                    aria-label="Download BOB on the App Store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex"
                >
                  <Image
                      src="/app-badges/appstore.svg"
                      alt="Available on the App Store"
                      width={190}
                      height={54}
                      loading="lazy"
                      decoding="async"
                  />
                </motion.a>
                <motion.a
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.95}}
                    href="https://play.google.com/store/apps/details?id=com.bobapp"
                    aria-label="Get BOB on Google Play"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex"
                >
                  <Image
                      src="/app-badges/playstore.svg"
                      alt="Get it on Google Play"
                      width={190}
                      height={54}
                      loading="lazy"
                      decoding="async"
                  />
                </motion.a>
              </motion.div>
            </div>

            {/* Image LCP (same visual as default) */}
            <motion.div
                initial={{opacity: 0, x: 50}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: true}}
                transition={{duration: 0.8, delay: 0.5}}
                className="mt-8 md:mt-0 md:absolute bottom-10 md:-bottom-16 md:inset-y-0 md:-right-10 md:w-1/2 flex items-center justify-center"
            >
              <Image
                  src="/Group 1000001289 (1).webp"
                  alt="App preview on smartphone"
                  width={1302}
                  height={824}
                  className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[560px] h-auto object-contain drop-shadow-2xl scale-110 sm:scale-120 md:scale-125"
                  priority
                  fetchPriority="high"
                  decoding="async"
              />
            </motion.div>
          </div>

          {/* Decoration */}
          <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(80%_80%_at_70%_50%,rgba(255,255,255,0.35)_0%,transparent_70%)]"
          />
        </motion.div>
      </Container>
  )
}
