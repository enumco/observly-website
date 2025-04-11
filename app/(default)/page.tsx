export const metadata = {
  title: 'Observly - Home',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Features02 from '@/components/features-02'
import Integrations from '@/components/integrations'
import Pricing from '@/components/pricing'
import Faqs from '@/components/faqs'
import Cta from '@/components/cta'

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Testimonials /> */}
      <Features />
      <Features02 />
      <Integrations />
      <Pricing />
      <Faqs />
      <Cta />
    </>
  )
}
