import {
  Building2,
  Factory,
  GraduationCap,
  Hospital,
  Hotel,
  House,
  Store,
  Warehouse,
} from 'lucide-react'
import { motion } from 'framer-motion'
import '../styles/Industries.css'

const industries = [
  {
    title: 'Residential Societies',
    description:
      'CCTV, boom barriers, visitor access and smart security systems for residential communities.',
    icon: House,
  },
  {
    title: 'Corporate Offices',
    description:
      'Secure access control, networking and surveillance solutions for modern workplaces.',
    icon: Building2,
  },
  {
    title: 'Schools & Colleges',
    description:
      'Campus surveillance, attendance systems and reliable networking infrastructure.',
    icon: GraduationCap,
  },
  {
    title: 'Hospitals',
    description:
      'Security monitoring, controlled access and dependable network connectivity for healthcare facilities.',
    icon: Hospital,
  },
  {
    title: 'Warehouses',
    description:
      'Perimeter surveillance, vehicle control and monitoring solutions for storage facilities.',
    icon: Warehouse,
  },
  {
    title: 'Factories',
    description:
      'Industrial CCTV, access control and technology systems designed for operational safety.',
    icon: Factory,
  },
  {
    title: 'Hotels',
    description:
      'Integrated surveillance, Wi-Fi and secure access solutions for hospitality businesses.',
    icon: Hotel,
  },
  {
    title: 'Commercial Spaces',
    description:
      'Smart security and connectivity solutions for shops, malls and commercial properties.',
    icon: Store,
  },
]

function Industries() {
  return (
    <section className="industries-section" id="industries">
      <div className="industries-container">
        <motion.div
          className="industries-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">INDUSTRIES WE SERVE</span>

          <h2>
            Smart solutions designed for every environment
          </h2>

          <p>
            Our systems are planned around the unique security, access and
            technology requirements of each industry.
          </p>
        </motion.div>

        <div className="industries-grid">
          {industries.map((industry, index) => {
            const Icon = industry.icon

            return (
              <motion.article
                className="industry-card"
                key={industry.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  duration: 0.48,
                  delay: index * 0.06,
                }}
              >
                <div className="industry-icon">
                  <Icon size={27} />
                </div>

                <div className="industry-content">
                  <h3>{industry.title}</h3>
                  <p>{industry.description}</p>
                </div>

                <span className="industry-index">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Industries