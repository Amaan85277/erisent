import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function HomeHero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-primary-600 py-24 lg:py-40 overflow-hidden">
      {/* Subtle background texture overlay */}
      {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.02"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div> */}

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white lg:text-5xl">
              Welcome to Erisent Electro Controls
            </h1>
            <p className="mb-6 text-xl text-white/90 leading-relaxed">
              Delivering efficient, reliable, future-ready electrical control solutions
              for industrial applications.
            </p>
            <p className="mb-10 text-white/80 leading-relaxed">
              With years of expertise in electrical panel manufacturing, we specialize in
              designing and building custom control panels that meet the highest standards
              of quality, safety, and performance. Our solutions power industries across
              various sectors, ensuring seamless operations and maximum efficiency.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent-500 px-8 py-4 font-semibold text-white transition-all hover:bg-accent-600 hover:shadow-lg hover:shadow-accent-500/30"
              >
                Our Solutions
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 font-semibold text-white transition-all hover:bg-white/20 hover:border-white/50"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-96 w-full overflow-hidden rounded-xl shadow-2xl lg:h-[550px] animate-slide-up">
            <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent z-10"></div>
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
