import { homeMetadata } from '@/seo/metadata'
import type { Metadata } from 'next'
import HomeHero from '@/components/sections/HomeHero'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
// import Clients from '@/components/sections/Clients'

export const metadata: Metadata = homeMetadata

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <WhyChooseUs />
      {/* <Clients /> */}
    </>
  )
}
