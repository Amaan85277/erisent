import Image from 'next/image'

export default function DirectorSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-2xl font-bold text-gray-900 lg:text-3xl">
            Leadership
          </h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
            {/* Director Image */}
            <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl lg:h-[500px]">
              <Image
                src="/director-placeholder.jpg"
                alt="Director of Erisent Electro Controls - Professional portrait"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Director Info */}
            <div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">Director</h3>
              <p className="mb-6 text-lg text-gray-700">
                Our director brings extensive experience and visionary leadership to
                Erisent Electro Controls. With a deep understanding of the electrical
                control panel industry and a commitment to innovation, they guide our
                company toward continued growth and excellence.
              </p>
              <p className="mb-6 text-lg text-gray-700">
                Under their leadership, we have consistently delivered high-quality
                solutions that meet and exceed client expectations, while maintaining the
                highest standards of safety and compliance in all our operations.
              </p>
              <div className="space-y-2 text-gray-600">
                <p>
                  <strong className="text-gray-900">Name:</strong> [Director Name]
                </p>
                <p>
                  <strong className="text-gray-900">Email:</strong> director@erisent.com
                </p>
                <p>
                  <strong className="text-gray-900">Phone:</strong> +91 XXX XXX XXXX
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
