import Image from 'next/image'

export default function DirectorSection() {
  return (
    <section className="section-padding bg-bg-surface">
      <div className="container-custom">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-20 text-center text-2xl font-bold text-text-primary lg:text-3xl xl:text-4xl tracking-tight">
            Leadership
          </h2>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            {/* Director Image */}
            <div className="relative h-96 w-full overflow-hidden rounded-2xl shadow-2xl lg:h-[600px]">
              <Image
                src="/director-placeholder.jpg"
                alt="Director of Erisent Electro Controls - Professional portrait"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Director Info */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-text-primary lg:text-3xl">Director</h3>
              <p className="text-lg leading-relaxed text-text-secondary">
                Our director brings extensive experience and visionary leadership to
                Erisent Electro Controls. With a deep understanding of the electrical
                control panel industry and a commitment to innovation, they guide our
                company toward continued growth and excellence.
              </p>
              <p className="text-lg leading-relaxed text-text-secondary">
                Under their leadership, we have consistently delivered high-quality
                solutions that meet and exceed client expectations, while maintaining the
                highest standards of safety and compliance in all our operations.
              </p>
              <div className="space-y-4 pt-6 border-t border-border">
                <p className="text-text-secondary">
                  <strong className="text-text-primary font-semibold">Name:</strong> [Director Name]
                </p>
                <p className="text-text-secondary">
                  <strong className="text-text-primary font-semibold">Email:</strong> director@erisent.com
                </p>
                <p className="text-text-secondary">
                  <strong className="text-text-primary font-semibold">Phone:</strong> +91 XXX XXX XXXX
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
