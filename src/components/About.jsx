import {
  CheckCircle2,
  Eye,
  Lightbulb,
  ShieldCheck,
  Users,
} from 'lucide-react'
import { motion } from 'framer-motion'
import '../styles/About.css'

const statistics = [
  {
    value: '100+',
    label: 'Projects Delivered',
  },
  {
    value: '75+',
    label: 'Happy Clients',
  },
  {
    value: '24/7',
    label: 'Support Available',
  },
  {
    value: '6',
    label: 'Core Services',
  },
]

const highlights = [
  'Professional installation and configuration',
  'Reliable products and scalable solutions',
  'Custom solutions based on business needs',
  'Responsive after-sales and AMC support',
]

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <motion.div
          className="about-visual"
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="about-main-card">
            <div className="about-card-top">
              <div className="about-icon-box">
                <ShieldCheck size={34} />
              </div>

              <span>Surveilix Technologies</span>
            </div>

            <div className="about-illustration">
              <div className="illustration-ring ring-one" />
              <div className="illustration-ring ring-two" />

              <div className="illustration-center">
                <ShieldCheck size={62} />
              </div>

              <div className="illustration-node node-one">
                CCTV
              </div>

              <div className="illustration-node node-two">
                RFID
              </div>

              <div className="illustration-node node-three">
                Network
              </div>

              <div className="illustration-node node-four">
                Software
              </div>
            </div>

            <div className="about-card-footer">
              <div>
                <strong>Secure</strong>
                <span>Reliable Systems</span>
              </div>

              <div>
                <strong>Smart</strong>
                <span>Modern Technology</span>
              </div>
            </div>
          </div>

          <div className="about-floating-card">
            <Users size={22} />

            <div>
              <strong>Customer Focused</strong>
              <span>Solutions built around your needs</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">ABOUT US</span>

          <h2>
            Technology that protects, connects and grows your business
          </h2>

          <p className="about-description">
            Surveilix Technologies provides complete security and technology
            solutions for residential, commercial and industrial customers.
            We combine dependable hardware, intelligent software and
            professional support to deliver systems that work reliably every
            day.
          </p>

          <div className="about-purpose-grid">
            <div className="about-purpose-card">
              <div className="purpose-icon">
                <Eye size={23} />
              </div>

              <div>
                <h3>Our Vision</h3>

                <p>
                  To become a trusted technology partner for smart security,
                  connectivity and automation solutions.
                </p>
              </div>
            </div>

            <div className="about-purpose-card">
              <div className="purpose-icon">
                <Lightbulb size={23} />
              </div>

              <div>
                <h3>Our Mission</h3>

                <p>
                  To deliver practical, reliable and future-ready solutions
                  with strong customer support.
                </p>
              </div>
            </div>
          </div>

          <div className="about-highlights">
            {highlights.map((highlight) => (
              <div className="about-highlight" key={highlight}>
                <CheckCircle2 size={19} />
                <span>{highlight}</span>
              </div>
            ))}
          </div>

          <a href="#contact" className="about-button">
            Discuss Your Requirement
          </a>
        </motion.div>
      </div>

      <div className="about-statistics">
        <div className="about-statistics-container">
          {statistics.map((statistic, index) => (
            <motion.div
              className="about-stat-card"
              key={statistic.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
            >
              <strong>{statistic.value}</strong>
              <span>{statistic.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About