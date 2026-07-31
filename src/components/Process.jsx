import {
  ClipboardCheck,
  DraftingCompass,
  Headphones,
  Settings,
  ShieldCheck,
} from 'lucide-react'
import { motion } from 'framer-motion'
import '../styles/Process.css'

const processSteps = [
  {
    number: '01',
    title: 'Consultation',
    description:
      'We understand your site, security concerns, technical requirements and project expectations.',
    icon: ClipboardCheck,
  },
  {
    number: '02',
    title: 'Planning & Design',
    description:
      'Our team prepares a practical solution, system layout, product selection and execution plan.',
    icon: DraftingCompass,
  },
  {
    number: '03',
    title: 'Installation',
    description:
      'Equipment, cabling and software are professionally installed with attention to safety and quality.',
    icon: Settings,
  },
  {
    number: '04',
    title: 'Testing & Handover',
    description:
      'Every feature is tested, configured and demonstrated before final project handover.',
    icon: ShieldCheck,
  },
  {
    number: '05',
    title: 'Support & AMC',
    description:
      'We provide troubleshooting, preventive maintenance and dependable after-sales support.',
    icon: Headphones,
  },
]

function Process() {
  return (
    <section className="process-section" id="process">
      <div className="process-container">
        <motion.div
          className="process-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">HOW WE WORK</span>

          <h2>
            A clear process from consultation to support
          </h2>

          <p>
            Every project follows a planned workflow to ensure reliable
            installation, proper testing and long-term system performance.
          </p>
        </motion.div>

        <div className="process-timeline">
          <div className="process-line" />

          {processSteps.map((step, index) => {
            const Icon = step.icon

            return (
              <motion.article
                className="process-step"
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >
                <div className="process-step-marker">
                  <span>{step.number}</span>
                </div>

                <div className="process-step-card">
                  <div className="process-icon">
                    <Icon size={27} />
                  </div>

                  <span className="process-step-label">
                    Step {step.number}
                  </span>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Process