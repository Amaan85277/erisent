'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

// Placeholder client logos - replace with actual client logos
const clientLogos = [
  { name: 'Client 1', src: '/placeholder-logo-1.svg' },
  { name: 'Client 2', src: '/placeholder-logo-2.svg' },
  { name: 'Client 3', src: '/placeholder-logo-3.svg' },
  { name: 'Client 4', src: '/placeholder-logo-4.svg' },
  { name: 'Client 5', src: '/placeholder-logo-5.svg' },
  { name: 'Client 6', src: '/placeholder-logo-6.svg' },
]

// Create a duplicate array for seamless loop
const duplicatedLogos = [...clientLogos, ...clientLogos]

export default function Clients() {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-text-primary lg:text-4xl">
            Our Trusted Clients
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-text-secondary leading-relaxed">
            We are proud to serve leading companies across various industries.
          </p>
        </div>

        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className={`flex gap-8 ${
              isPaused ? 'animate-none' : 'animate-scroll'
            }`}
            style={{
              width: 'max-content',
            }}
          >
            {duplicatedLogos.map((client, index) => (
              <div
                key={index}
                className="flex h-28 w-56 flex-shrink-0 items-center justify-center rounded-lg border border-primary-100 bg-primary-50/50 p-6 transition-all hover:border-primary-200 hover:bg-primary-50"
              >
                <span className="text-sm font-medium text-text-secondary">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  )
}
