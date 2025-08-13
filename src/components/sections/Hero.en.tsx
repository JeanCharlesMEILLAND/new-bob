"use client"

import Image from "next/image"
import Container from "@/components/ui/Container"
import { CircleBg } from "@/components/CircleBg"
import { motion } from "framer-motion"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export default function HeroEn() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative pt-32 sm:pt-20 md:pt-28 pb-4 z-10 p"
    >
      {/* Decorative background */}
      <CircleBg />
      {/* keep lightweight grid only (no external bg asset) */}
      <div className="absolute inset-0 -z-20 bg-grid opacity-[0.25] [mask-image:radial-gradient(circle_at_center,black,transparent_70%)]" />

      <Container className="text-center space-y-10 relative z-10">
        {/* Compliance badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="-mt-4 sm:-mt-6 inline-flex items-center gap-2 rounded-full border border-accent px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-accent"
        >
          <span className="hidden sm:inline">
            Private use with people you know • No financial transactions • No public matchmaking
          </span>
          <span className="sm:hidden">Private use • No payments • Confidential</span>
        </motion.div>

        {/* LCP-friendly headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h1
            className={`${inter.className} mt-6 sm:mt-10 md:mt-22 text-3xl xs:text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight`}
          >
            <span className="bg-gradient-to-tr from-[#00C9F7] to-[#166AF6] bg-clip-text text-transparent font-bold">
              Bober
            </span>
            , share, help, organize — privately.
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mx-auto max-w-3xl text-base sm:text-lg text-accent leading-relaxed px-4 sm:px-6 md:px-0"
        >
          Manage your exchanges of <strong className="text-accent">items</strong>,{" "}
          <strong className="text-accent">services</strong>, and{" "}
          <strong className="text-accent">events</strong> — simply and confidentially, only with your contacts.
        </motion.p>

        {/* Minor legend */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-base text-accent -mt-2"
        >
          Available on iOS and Android
        </motion.p>

        {/* Store badges (App Store prioritized) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          id="download"
          className="flex flex-wrap items-center justify-center gap-5 pt-4"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://apps.apple.com/app/id6743935044"
            aria-label="Download BOB on the App Store"
            className="inline-flex"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/app-badges/appstore.svg"
              alt="Available on the App Store"
              width={180}
              height={54}
              priority
              fetchPriority="high"
            />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://play.google.com/store/apps/details?id=com.bobapp"
            aria-label="Download BOB on Google Play"
            className="inline-flex"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/app-badges/playstore.svg"
              alt="Get it on Google Play"
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
