import Image from 'next/image'

import ltPanelImage from '@/public/lt-panel.png'
import mccPccImage from '@/public/mcc-pcc-panel.webp'
import plcPanelImage from '@/public/plc-panel.jpg'
import apfcPanelImage from '@/public/apfc-panel.png'
import distributionBoardImage from '@/public/distribution-boards.webp'
import customControlPanelImage from '@/public/custom-control-panel.jpg'

const solutions = [
  {
    title: 'LT Panels',
    description:
      'Low Tension panels designed for efficient power distribution and control in industrial settings. Built to handle standard voltage requirements with robust protection mechanisms.',
    image: ltPanelImage,
  },
  {
    title: 'MCC / PCC',
    description:
      'Motor Control Centers and Power Control Centers providing centralized control and monitoring for multiple motors and electrical equipment in industrial facilities.',
    image: mccPccImage,
  },
  {
    title: 'PLC Control Panels',
    description:
      'Programmable Logic Controller panels with advanced automation capabilities. Customized solutions for process control, monitoring, and industrial automation.',
    image: plcPanelImage,
  },
  {
    title: 'APFC Panels',
    description:
      'Automatic Power Factor Correction panels designed to optimize power factor, reduce energy consumption, and improve overall electrical system efficiency.',
    image: apfcPanelImage,
  },
  {
    title: 'Distribution Boards',
    description:
      'Comprehensive distribution boards for safe and organized electrical distribution. Available in various configurations to meet specific project requirements.',
    image: distributionBoardImage,
  },
  {
    title: 'Custom Control Panels',
    description:
      'Bespoke control panel solutions tailored to your unique requirements. From design to manufacturing, we create panels that perfectly fit your application needs.',
    image: customControlPanelImage,
  },
]

export default function SolutionsList() {
  return (
    <section className="section-padding bg-bg-surface">
      <div className="container-custom">
        <div className="mb-20 text-center">
          <h1 className="mb-6 text-3xl font-bold text-text-primary lg:text-4xl xl:text-5xl tracking-tight">
            Our Solutions
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-text-secondary leading-relaxed">
            Comprehensive range of electrical control panels designed for industrial
            applications
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border border-border bg-bg-primary shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative h-56 w-full overflow-hidden bg-bg-surfaceAlt">
                <Image
                  src={solution.image}
                  alt={`${solution.title} - Industrial electrical control panel`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-10">
                <h3 className="mb-4 text-xl font-semibold text-text-primary">
                  {solution.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
