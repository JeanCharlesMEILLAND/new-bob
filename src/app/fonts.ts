import { Inter, Plus_Jakarta_Sans } from "next/font/google"

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400", "700"],
  variable: "--font-inter",
})

export const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400", "700"],
  variable: "--font-jakarta",
})
