import { Award, Shield, Wrench, HeadphonesIcon } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'Engineering Expertise',
    description:
      'Our team of experienced engineers brings deep knowledge in electrical systems design and industrial automation.',
  },
  {
    icon: Shield,
    title: 'Quality & Compliance',
    description:
      'All our panels are built to international standards with rigorous quality control and compliance certifications.',
  },
  {
    icon: Wrench,
    title: 'Custom-Built Solutions',
    description:
      'We design and manufacture panels tailored to your specific requirements, ensuring optimal performance.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Reliable Support',
    description:
      'Comprehensive after-sales support and maintenance services to keep your operations running smoothly.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
            Why Choose Us
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            We combine technical excellence with customer-focused service to deliver
            electrical control solutions that exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center transition-shadow hover:shadow-lg"
              >
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-primary-100 p-3">
                    <Icon className="h-6 w-6 text-primary-600" />
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
