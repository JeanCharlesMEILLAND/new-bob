// app/page.tsx
import { redirect } from 'next/navigation'

import HeroFR from '../components/sections/Hero'
import HeroEN from '../components/sections/Hero.en'

import FeaturesHighlightFR from "../components/sections/FeaturesHighlight"
import FeaturesHighlightEN from "../components/sections/FeaturesHighlight.en"

import FeaturesFR from '../components/sections/Features'
import FeaturesEN from '../components/sections/Features.en'

import TestimonialsFR from '../components/sections/Testimonials'
import TestimonialsEN from '../components/sections/Testimonials.en'

import CTAFR from '../components/sections/CTA'
import CTAEN from '../components/sections/CTA.en'

export default async function Page({
  searchParams,
}: {
  searchParams?: Promise<{ lang?: string; invitor?: string; token?: string }>
}) {
  const params = await searchParams

  const invitor = params?.invitor ?? params?.token
  if (invitor) {
    redirect(`/invitation?invitor=${encodeURIComponent(invitor)}`)
  }

  // Redirection si pas de paramètre lang
  if (!params?.lang) {
    redirect('/?lang=fr')
  }

  const lang = params.lang.toLowerCase() === 'en' ? 'en' : 'fr'

  const Hero = lang === 'en' ? HeroEN : HeroFR
  const Features = lang === 'en' ? FeaturesEN : FeaturesFR
  const FeaturesHighlight = lang === 'en' ? FeaturesHighlightEN : FeaturesHighlightFR
  const Testimonials = lang === 'en' ? TestimonialsEN : TestimonialsFR
  const CTA = lang === 'en' ? CTAEN : CTAFR

  return (
    <>
      <Hero />
      <Features />
      <FeaturesHighlight />
      <Testimonials />
      <CTA />
    </>
  )
}
