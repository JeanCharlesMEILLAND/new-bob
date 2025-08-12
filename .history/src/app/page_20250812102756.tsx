import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import HowItWorks from '@/components/sections/HowItWorks'
import Showcase from '@/components/sections/Showcase'
import Testimonials from '@/components/sections/Testimonials'
import CTA from '@/components/sections/CTA'
import Events from '@/components/sections/Events'

export default function Page() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Events />
      <Features />
      <Showcase />
      <Testimonials />
      <CTA />
    </>
  )
}
