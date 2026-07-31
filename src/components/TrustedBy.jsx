import {
  Building2,
  Factory,
  GraduationCap,
  HeartPulse,
  Hotel,
  House,
} from 'lucide-react'

import { motion } from 'framer-motion'

import '../styles/TrustedBy.css'

const industries = [
  {
    name: 'Corporate Offices',
    icon: Building2,
  },
  {
    name: 'Schools & Colleges',
    icon: GraduationCap,
  },
  {
    name: 'Hospitals',
    icon: HeartPulse,
  },
  {
    name: 'Industries',
    icon: Factory,
  },
  {
    name: 'Hotels',
    icon: Hotel,
  },
  {
    name: 'Residential',
    icon: House,
  },
]

function TrustedBy() {
  return (
    <section className="trusted-section">
      <div className="trusted-container">
        <motion.div
          className="trusted-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.55,
          }}
        >
          <span className="trusted-label">
            SOLUTIONS FOR EVERY SECTOR
          </span>

          <h2>
            Trusted technology solutions for modern spaces
          </h2>
        </motion.div>

        <div className="trusted-grid">
          {industries.map((industry, index) => {
            const Icon = industry.icon

            return (
              <motion.div
                className="trusted-card"
                key={industry.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.42,
                  delay: index * 0.07,
                }}
              >
                <div className="trusted-icon">
                  <Icon size={24} />
                </div>

                <span>{industry.name}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TrustedBy