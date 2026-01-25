'use client'

import { useEffect } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import Leaflet to avoid SSR issues
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
)
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
)
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
)

export default function MapSection() {
  useEffect(() => {
    // Import Leaflet CSS and fix marker icon
    import('leaflet/dist/leaflet.css').then(() => {
      // Fix for default marker icon in Next.js
      if (typeof window !== 'undefined') {
        const L = require('leaflet')
        delete (L.Icon.Default.prototype as any)._getIconUrl
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
          iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
        })
      }
    })
  }, [])

  // Default coordinates - replace with actual office location
  const defaultCenter: [number, number] = [28.6139, 77.209] // Example: New Delhi
  const defaultZoom = 13

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
          Find Us
        </h2>
        <div className="mx-auto max-w-4xl">
          <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-lg">
            <MapContainer
              center={defaultCenter}
              zoom={defaultZoom}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={defaultCenter}>
                <Popup>
                  <div className="text-center">
                    <strong>Erisent Electro Controls</strong>
                    <br />
                    Workshop / Office Address
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  )
}
