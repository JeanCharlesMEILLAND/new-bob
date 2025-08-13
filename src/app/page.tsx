// app/page.tsx
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

// App Router: Next.js passe automatiquement searchParams à la page
export default function Page({
  searchParams,
}: {
  searchParams?: { lang?: string }
}) {
  const langParam = (searchParams?.lang || 'fr').toLowerCase()
  const lang = langParam === 'en' ? 'en' : 'fr'

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
