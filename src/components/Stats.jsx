import {
  Layers3,
  Settings2,
  Clock3,
  Headphones,
} from 'lucide-react'

import { motion } from 'framer-motion'

import '../styles/Stats.css'

const stats = [
  {
    value: '6',
    suffix: '+',
    title: 'Core Services',
    description:
      'Security, automation, networking and software solutions.',
    icon: Layers3,
  },
  {
    value: '100',
    suffix: '%',
    title: 'Custom Solutions',
    description:
      'Every solution is planned according to client requirements.',
    icon: Settings2,
  },
  {
    value: '24/7',
    suffix: '',
    title: 'Inquiry Access',
    description:
      'Clients can contact us through phone, email or WhatsApp.',
    icon: Clock3,
  },
  {
    value: '360',
    suffix: '°',
    title: 'Project Support',
    description:
      'From consultation and installation to maintenance support.',
    icon: Headphones,
  },
]

function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-container">
        <motion.div
          className="stats-grid"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          {stats.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.article
                className="stats-card"
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
              >
                <div className="stats-icon">
                  <Icon size={25} />
                </div>

                <div className="stats-number">
                  <span>{item.value}</span>
                  <small>{item.suffix}</small>
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Stats