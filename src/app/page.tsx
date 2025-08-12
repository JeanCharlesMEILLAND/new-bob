import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import Testimonials from '@/components/sections/Testimonials'
import {FeaturesHighlight} from "@/components/sections/FeaturesHighlight";

export default function Page() {
  return (
      <>
        <Hero/>
        <Features/>
        <FeaturesHighlight/>
        <Testimonials/>
        {/*<HowItWorks/>*/}
        {/*<Events/>*/}
      </>
  )
}
