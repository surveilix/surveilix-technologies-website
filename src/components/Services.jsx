import {
  Camera,
  Code2,
  Fence,
  Network,
  RadioTower,
  Settings,
} from 'lucide-react'
import { motion } from 'framer-motion'
import '../styles/Services.css'

const services = [
  {
    title: 'CCTV Surveillance',
    description:
      'Advanced camera systems for homes, offices, industries and commercial properties.',
    icon: Camera,
  },
  {
    title: 'Boom Barrier Systems',
    description:
      'Automatic vehicle access control solutions for societies, offices and parking areas.',
    icon: Fence,
  },
  {
    title: 'RFID Solutions',
    description:
      'Smart RFID-based access, attendance and vehicle identification systems.',
    icon: RadioTower,
  },
  {
    title: 'Networking',
    description:
      'Reliable LAN, Wi-Fi, structured cabling and enterprise networking solutions.',
    icon: Network,
  },
  {
    title: 'Software Development',
    description:
      'Custom web applications, management systems and business automation software.',
    icon: Code2,
  },
  {
    title: 'AMC Services',
    description:
      'Preventive maintenance, emergency support and annual service contracts.',
    icon: Settings,
  },
]

function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <div className="section-heading">
          <span className="section-label">OUR SERVICES</span>

          <h2>Complete technology solutions for your business</h2>

          <p>
            From surveillance and access control to networking and custom
            software, we provide dependable end-to-end solutions.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.article
                className="service-card"
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="service-icon">
                  <Icon size={27} />
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <a href="#contact">Learn More</a>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services