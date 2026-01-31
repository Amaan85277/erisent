import { contactMetadata } from '@/seo/metadata'
import type { Metadata } from 'next'
import ContactForm from '@/components/sections/ContactForm'
// import MapSection from '@/components/sections/MapSection'

export const metadata: Metadata = contactMetadata

export default function ContactPage() {
  return (
    <>
      <ContactForm />
      {/* <MapSection /> */}
    </>
  )
}
