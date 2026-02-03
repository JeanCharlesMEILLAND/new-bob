"use client"

import Image from "next/image"
import {motion} from "framer-motion"
import Container from "@/components/ui/Container"
import { FeaturesCard } from "@/components/FeaturesCard"

export default function FeaturesEn() {
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
          {/* H2 visually hidden but readable by assistive tech */}
          <h2 id="features-heading" className="sr-only">
            Main Features
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
                  description="Built-in calling feature to reach your contacts without leaving the app."
                  as="h3"
                  titleId="feature-bobcall"
                />
              </motion.div>

              {/* Built-in messaging */}
              <motion.div variants={itemVariants}>
                <FeaturesCard
                  icon="/icons/Frame 1597880141.svg"
                  title="Built-in messaging"
                  description="Chat 1-to-1 for exchanges or use the event group chat to coordinate everyone effortlessly."
                  as="h3"
                  titleId="feature-messages"
                />
              </motion.div>

              {/* Objects & services exchanges */}
              <motion.div variants={itemVariants}>
                <FeaturesCard
                  icon="/icons/Frame 1597880138.svg"
                  title="Objects & services"
                  description="Offer or request in private: one confirmation is all it takes — then the exchange is tracked automatically."
                  as="h3"
                  titleId="feature-exchanges"
                />
              </motion.div>

              {/* Bob AI */}
              <motion.div variants={itemVariants}>
                <FeaturesCard
                  icon="/icons/Frame 1597880142.svg"
                  title="Bob AI"
                  description="Your intelligent assistant integrated into Bob. App to more easily manage your loans and items."
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
                alt="BOB app preview"
                width={400}
                height={500}
                className="w-full max-w-[280px] sm:max-w-[320px] h-auto object-contain drop-shadow-xl"
                priority
              />
            </motion.div>

            {/* Last 4 features (below image on mobile) */}
            <div className="space-y-4">
              {/* Reminders & calendar */}
              <motion.div variants={itemVariants}>
                <FeaturesCard
                  icon="/icons/Frame 1597880140.svg"
                  title="Reminders & calendar"
                  description="Automatic reminders on both sides and optional calendar events so nothing gets forgotten."
                  as="h3"
                  titleId="feature-reminders"
                />
              </motion.div>

              {/* Private events */}
              <motion.div variants={itemVariants}>
                <FeaturesCard
                  icon="/icons/Frame 1597880139.svg"
                  title="Private events"
                  description="Invite a small group. Mixed list (items, consumables, services) and one-tap commitments."
                  as="h3"
                  titleId="feature-events"
                />
              </motion.div>

              {/* For people you know */}
              <motion.div variants={itemVariants}>
                <FeaturesCard
                  icon="/icons/Entre proches.svg"
                  title="For people you know"
                  description="Works with the contacts in your phone. No public directory, no strangers — private by design."
                  as="h3"
                  titleId="feature-contacts"
                />
              </motion.div>

              {/* Privacy first */}
              <motion.div variants={itemVariants}>
                <FeaturesCard
                  icon="/icons/Frame 1597880142.svg"
                  title="Privacy first"
                  description="No payments. No public matchmaking. Your personal history stays with you and your contacts."
                  as="h3"
                  titleId="feature-privacy"
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
              alt="BOB application features - Bob Call, Built-in messaging, Objects & services exchanges, Reminders & calendar, Private events, For people you know, Bob AI, and Built-in privacy"
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