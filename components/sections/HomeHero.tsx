import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import RotatingText from '@/components/ui/RotatingText'

export default function HomeHero() {
  const rotatingPhrases = [
    'Efficient Industrial Control Panels',
    'Reliable Electrical Solutions',
    'Engineered for Performance',
  ]

  return (
    <section className="relative bg-gradient-to-br from-primary via-primary-light to-primary-dark section-padding overflow-hidden">

      {/* Subtle depth overlay for visual interest */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-dark/20 to-primary-dark/40 z-[1]"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:items-center">
          {/* Content */}
          <div className="animate-fade-in space-y-8">
            <h1 className="text-4xl font-bold leading-tight text-text-inverse lg:text-5xl xl:text-6xl tracking-tight">
              Welcome to Erisent Electro Controls
            </h1>
            <p className="text-xl text-text-inverse/90 leading-relaxed max-w-xl">
              Delivering{' '}
              <RotatingText
                phrases={rotatingPhrases}
                interval={3000}
                className="font-semibold text-accent"
              />
              {' '}for industrial applications.
            </p>
            <p className="text-lg text-text-inverse/80 leading-relaxed max-w-xl">
              With years of expertise in electrical panel manufacturing, we specialize in
              designing and building custom control panels that meet the highest standards
              of quality, safety, and performance. Our solutions power industries across
              various sectors, ensuring seamless operations and maximum efficiency.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row pt-4">
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-4 font-semibold text-text-inverse transition-all duration-300 hover:bg-accent-hover hover:shadow-xl hover:shadow-accent/25"
              >
                Our Solutions
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border-2 border-text-inverse/20 bg-text-inverse/5 backdrop-blur-sm px-8 py-4 font-semibold text-text-inverse transition-all duration-300 hover:bg-text-inverse/10 hover:border-text-inverse/40"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-96 w-full overflow-hidden rounded-2xl shadow-2xl lg:h-[600px] animate-slide-up">
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/30 via-transparent to-transparent z-10"></div>
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
