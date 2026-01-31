import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://erisent.com'),
  title: {
    default: 'Electrical Control Panel Manufacturers | Erisent Electro Controls',
    template: '%s | Erisent Electro Controls',
  },
  description: 'Designing and manufacturing efficient, safe, and reliable electrical control panels for industrial and infrastructure applications.',
  keywords: ['electrical control panels', 'LT panels', 'HT panels', 'MCC panels', 'PCC panels', 'PLC control panels', 'APFC panels', 'industrial electrical panels'],
  authors: [{ name: 'Erisent Electro Controls' }],
  creator: 'Erisent Electro Controls',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://erisent.com',
    siteName: 'Erisent Electro Controls',
    title: 'Electrical Control Panel Manufacturers | Erisent Electro Controls',
    description: 'Designing and manufacturing efficient, safe, and reliable electrical control panels for industrial and infrastructure applications.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Electrical Control Panel Manufacturers | Erisent Electro Controls',
    description: 'Designing and manufacturing efficient, safe, and reliable electrical control panels for industrial and infrastructure applications.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Erisent Electro Controls',
    url: 'https://erisent.com',
    // logo: 'https://erisent.com/logo.png', todo: add logo
    description: 'Designing and manufacturing efficient, safe, and reliable electrical control panels for industrial and infrastructure applications.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'sales@erisent.com',
    },
    sameAs: [],
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={plusJakarta.variable}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
