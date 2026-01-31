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
    <section className="section-padding bg-bg-surface">
      <div className="container-custom">
        <div className="mb-20 text-center">
          <h2 className="mb-6 text-3xl font-bold text-text-primary lg:text-4xl xl:text-5xl tracking-tight">
            Why Choose Us
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-text-secondary leading-relaxed">
            We combine technical excellence with customer-focused service to deliver
            electrical control solutions that exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group rounded-2xl border border-border bg-bg-primary p-10 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="mb-8 flex justify-center">
                  <div className="rounded-2xl bg-accent/10 p-5 transition-all duration-300 group-hover:bg-accent/15 group-hover:scale-105">
                    <Icon className="h-7 w-7 text-accent" />
                  </div>
                </div>
                <h3 className="mb-4 text-xl font-semibold text-text-primary">
                  {feature.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
