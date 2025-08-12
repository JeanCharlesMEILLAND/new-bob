import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import HowItWorks from '@/components/sections/HowItWorks'
import Testimonials from '@/components/sections/Testimonials'
import Events from '@/components/sections/Events'
import {FeaturesHighlight} from "@/components/sections/FeaturesHighlight";

export default function Page() {
  return (
      <>
        <Hero/>
        <Features/>
        <FeaturesHighlight/>
        <Testimonials/>
        <HowItWorks/>
        <Events/>
      </>
  )
}
