"use client"

import { FeaturesCard } from "@/components/FeaturesCard"
import Image from "next/image"
import { motion } from "framer-motion"

export default function FeaturesEn() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1.1, transition: { duration: 0.8, delay: 0.5 } },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="
        mt-10
        grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[1fr_1.6fr_1fr] grid-rows-auto lg:grid-rows-3 gap-6
        items-center justify-items-stretch
        max-w-6xl mx-auto overflow-visible px-4 sm:px-6 md:px-8
        relative z-20
      "
      id="features"
    >
      {/* Left column */}
      <motion.div variants={itemVariants} className="mx-auto md:mt-8 lg:mt-0 md:ml-5 lg:col-start-1 lg:row-start-1">
        <FeaturesCard
          icon={"/icons/Entre proches.svg"}
          title={"For people you know"}
          description={
            "Works with the contacts in your phone. No public directory, no strangers — private by design."
          }
        />
      </motion.div>

      <motion.div variants={itemVariants} className="mx-auto md:-mt-4 lg:mt-0 md:mr-5 lg:col-start-1 lg:row-start-2">
        <FeaturesCard
          icon={"/icons/Frame 1597880141.svg"}
          title={"Built-in messaging"}
          description={
            "Chat 1-to-1 for exchanges or use the event group chat to coordinate everyone effortlessly."
          }
        />
      </motion.div>

      <motion.div variants={itemVariants} className="mx-auto md:mt-8 lg:mt-0 md:ml-5 lg:col-start-1 lg:row-start-3">
        <FeaturesCard
          icon={"/icons/Frame 1597880138.svg"}
          title={"Objects & services"}
          description={
            "Offer or request in private: one confirmation is all it takes — then the exchange is tracked automatically."
          }
        />
      </motion.div>

      {/* Center visual */}
      <motion.div
        variants={imageVariants}
        className="my-8 md:my-0 md:col-span-3 lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:row-span-3 justify-self-center self-center"
      >
        <Image
          src="/central-300.webp"           // optimized export (~300–350px wide). If you kept /central.png, replace here.
          alt="BOB app preview"
          width={300}
          height={300}
          className="w-full h-auto max-w-[300px] md:max-w-full object-contain z-10 mx-auto"
          priority={false}
          loading="lazy"
          decoding="async"
        />
      </motion.div>

      {/* Right column */}
      <motion.div variants={itemVariants} className="mx-auto md:-mt-4 lg:mt-0 md:mr-5 lg:col-start-3 lg:row-start-1">
        <FeaturesCard
          icon={"/icons/Frame 1597880140.svg"}
          title={"Reminders & calendar"}
          description={
            "Automatic reminders on both sides and optional calendar events so nothing gets forgotten."
          }
        />
      </motion.div>

      <motion.div variants={itemVariants} className="mx-auto md:mt-8 lg:mt-0 md:ml-5 lg:col-start-3 lg:row-start-2">
        <FeaturesCard
          icon={"/icons/Frame 1597880139.svg"}
          title={"Private events"}
          description={
            "Invite a small group. Mixed list (items, consumables, services) and one-tap commitments."
          }
        />
      </motion.div>

      <motion.div variants={itemVariants} className="mx-auto md:-mt-4 lg:mt-0 md:mr-5 lg:col-start-3 lg:row-start-3">
        <FeaturesCard
          icon={"/icons/Frame 1597880142.svg"}
          title={"Privacy first"}
          description={
            "No payments. No public matchmaking. Your personal history stays with you and your contacts."
          }
        />
      </motion.div>
    </motion.div>
  )
}
