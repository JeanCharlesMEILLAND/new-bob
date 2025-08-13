"use client"

import Image from "next/image"
import Container from "@/components/ui/Container"
import { motion } from "framer-motion"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export default function FeaturesHighlightEn() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  }

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.3 } },
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
          {/* Text */}
          <div className="text-white space-y-4 sm:space-y-6 md:w-2/3 md:pr-10">
            {/* H2 optimized for LCP (painted immediately) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h2
                className={`${inter.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-extrabold`}
              >
                Organize private events with ease
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base md:text-lg text-white/95 leading-relaxed max-w-2xl"
            >
              With BOB, create <strong className="font-bold">private events</strong> for your close circle and manage
              everything in one place. Perfect for a BBQ, a move, or a small project with friends.
            </motion.p>

            <motion.ul variants={containerVariants} className="space-y-3 text-white/95">
              {[
                {
                  text: (
                    <>
                      <strong>Create a mixed checklist</strong>: e.g. &quot;2 folding chairs&quot;, &quot;cold
                      drinks&quot;, &quot;help assembling a shelf&quot;
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Guests claim in one tap</strong>: each person picks an item and commits to bringing or
                      doing it
                    </>
                  ),
                },
                { text: <> <strong>Targeted invites</strong>: 5, 10 or 20 contacts</> },
                { text: <> <strong>Group chat</strong> to coordinate everyone</> },
                {
                  text: (
                    <>
                      <strong>Auto-tracked exchanges</strong>: once claimed, an individual exchange is created
                      automatically
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

          {/* Main image (lazy, sized close to render) */}
          <motion.div
            variants={imageVariants}
            className="mt-8 md:mt-0 md:absolute md:inset-y-0 md:right-0 md:w-1/3 flex items-center justify-center"
          >
            <Image
              src="/events-preview.webp"
              alt="Mobile preview of a private event"
              width={520}
              height={800}
              className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[520px] scale-110 sm:scale-125 h-auto object-contain drop-shadow-2xl"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        </div>

        {/* Subtle background decoration */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-2/3 bg-[url('/frame-decor.svg')] bg-no-repeat bg-right bg-cover opacity-30"
        />
      </motion.div>

      {/* Extra decorative image (lazy) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Image
          src="/mask-group.webp"
          alt="Graphic decoration"
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
