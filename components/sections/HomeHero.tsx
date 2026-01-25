import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function HomeHero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-primary-100 py-20 lg:py-32">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Content */}
          <div>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
              Welcome to Erisent Electro Controls
            </h1>
            <p className="mb-6 text-xl text-gray-700">
              Delivering efficient, reliable, future-ready electrical control solutions
              for industrial applications.
            </p>
            <p className="mb-8 text-gray-600">
              With years of expertise in electrical panel manufacturing, we specialize in
              designing and building custom control panels that meet the highest standards
              of quality, safety, and performance. Our solutions power industries across
              various sectors, ensuring seamless operations and maximum efficiency.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-700"
              >
                Our Solutions
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border-2 border-primary-600 px-6 py-3 font-semibold text-primary-600 transition-colors hover:bg-primary-50"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl lg:h-[500px]">
            <Image
              src="https://cdn.pixabay.com/photo/2017/08/06/12/06/people-2591874_1280.jpg"
              alt="Industrial electrical control panel with professional technician"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
