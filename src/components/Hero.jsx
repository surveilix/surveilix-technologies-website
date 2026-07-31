import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import '../styles/Hero.css'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-background-glow hero-glow-one" />
      <div className="hero-background-glow hero-glow-two" />

      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-badge">
            <ShieldCheck size={18} />
            <span>Smart Security & Technology Solutions</span>
          </div>

          <h1>
            Secure. Connect.
            <span> Automate.</span>
          </h1>

          <p className="hero-description">
            Surveilix Technologies delivers reliable CCTV surveillance, boom
            barriers, RFID systems, networking, custom software and
            professional AMC services for modern businesses.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="hero-primary-button">
              Request a Quote
              <ArrowRight size={19} />
            </a>

            <a href="#services" className="hero-secondary-button">
              Explore Services
            </a>
          </div>

          <div className="hero-features">
            <div className="hero-feature">
              <CheckCircle2 size={18} />
              <span>Professional Installation</span>
            </div>

            <div className="hero-feature">
              <CheckCircle2 size={18} />
              <span>Reliable Support</span>
            </div>

            <div className="hero-feature">
              <CheckCircle2 size={18} />
              <span>Custom Solutions</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          <div className="hero-visual-card">
            <div className="visual-card-header">
              <div>
                <span className="visual-card-label">SYSTEM STATUS</span>
                <h2>Security Network</h2>
              </div>

              <span className="system-status">
                <span className="status-dot" />
                Online
              </span>
            </div>

            <div className="visual-camera">
              <div className="camera-body">
                <div className="camera-lens">
                  <div className="camera-lens-inner" />
                </div>
              </div>

              <div className="camera-arm" />
              <div className="camera-base" />
            </div>

            <div className="visual-stats">
              <div>
                <span>24/7</span>
                <small>Monitoring</small>
              </div>

              <div>
                <span>100%</span>
                <small>Secure</small>
              </div>

              <div>
                <span>Fast</span>
                <small>Response</small>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero