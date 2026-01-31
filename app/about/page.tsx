import { aboutMetadata } from '@/seo/metadata'
import type { Metadata } from 'next'
import AboutCompany from '@/components/sections/AboutCompany'
// import DirectorSection from '@/components/sections/DirectorSection'

export const metadata: Metadata = aboutMetadata

export default function AboutPage() {
  return (
    <>
      <AboutCompany />
      {/* <DirectorSection /> */}
    </>
  )
}
