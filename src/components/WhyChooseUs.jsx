import {
  BadgeCheck,
  Clock3,
  Headphones,
  Settings2,
  ShieldCheck,
  Wrench,
} from 'lucide-react'
import { motion } from 'framer-motion'
import '../styles/WhyChooseUs.css'

const reasons = [
  {
    title: 'End-to-End Solutions',
    description:
      'From consultation and installation to software integration and maintenance, everything is managed under one roof.',
    icon: Settings2,
  },
  {
    title: 'Professional Installation',
    description:
      'Our systems are planned and installed with attention to safety, performance and long-term reliability.',
    icon: Wrench,
  },
  {
    title: 'Reliable Technology',
    description:
      'We recommend practical and dependable solutions that suit your actual business and security requirements.',
    icon: ShieldCheck,
  },
  {
    title: 'Fast Support',
    description:
      'Quick troubleshooting and responsive service help reduce downtime and keep your systems operational.',
    icon: Headphones,
  },
  {
    title: 'Timely Execution',
    description:
      'Projects are planned clearly and completed with proper coordination, testing and handover.',
    icon: Clock3,
  },
  {
    title: 'Quality Assurance',
    description:
      'Every installation is checked for performance, usability and customer satisfaction before completion.',
    icon: BadgeCheck,
  },
]

function WhyChooseUs() {
  return (
    <section className="why-section" id="why-choose-us">
      <div className="why-container">
        <motion.div
          className="why-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">WHY CHOOSE US</span>

          <h2>
            Reliable technology backed by professional service
          </h2>

          <p>
            We focus on practical solutions, clean installation and dependable
            support so that your systems continue working when you need them.
          </p>
        </motion.div>

        <div className="why-grid">
          {reasons.map((reason, index) => {
            const Icon = reason.icon

            return (
              <motion.article
                className="why-card"
                key={reason.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
              >
                <div className="why-card-number">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="why-icon">
                  <Icon size={26} />
                </div>

                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs