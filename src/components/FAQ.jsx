import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

import '../styles/FAQ.css'

const faqItems = [
  {
    question: 'Which areas do you provide services in?',
    answer:
      'We currently provide services across Panvel, Navi Mumbai, Mumbai, Pune and other locations in Maharashtra depending on the project requirement.',
  },
  {
    question: 'Do you provide site visits and consultation?',
    answer:
      'Yes. We can understand your requirement through a call first and arrange a site visit whenever required for proper planning and estimation.',
  },
  {
    question: 'Do you provide complete installation support?',
    answer:
      'Yes. We provide planning, supply, installation, configuration, testing and handover support based on the selected service.',
  },
  {
    question: 'Do you provide AMC and maintenance services?',
    answer:
      'Yes. We provide preventive maintenance, troubleshooting, service support and annual maintenance contracts for supported systems.',
  },
  {
    question: 'Can you develop custom software for businesses?',
    answer:
      'Yes. We can build custom web applications, dashboards, management systems and automation software based on business requirements.',
  },
  {
    question: 'How can I request a quotation?',
    answer:
      'You can contact us through phone, WhatsApp, email or the inquiry form on this website. Share your requirement and location for an initial discussion.',
  },
]

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0)

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <motion.div
          className="faq-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-label">
            FREQUENTLY ASKED QUESTIONS
          </span>

          <h2>
            Common questions about our services
          </h2>

          <p>
            Find quick answers about service areas, installation,
            maintenance and project consultation.
          </p>
        </motion.div>

        <div className="faq-list">
          {faqItems.map((item, index) => {
            const isOpen = activeIndex === index

            return (
              <motion.article
                className={`faq-item ${isOpen ? 'active' : ''}`}
                key={item.question}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>

                  <ChevronDown
                    size={21}
                    className="faq-arrow"
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq-answer-wrapper"
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: 'auto',
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                    >
                      <p className="faq-answer">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ