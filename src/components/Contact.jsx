import {
  Mail,
  MapPin,
  Phone,
  Send,
  UserRound,
} from 'lucide-react'

import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import '../styles/Contact.css'

function Contact() {
  const [isSending, setIsSending] = useState(false)
  const [toast, setToast] = useState({
    show: false,
    type: '',
    message: '',
  })

const handleSubmit = async (event) => {
  event.preventDefault()

  const form = event.currentTarget
  const formData = new FormData(form)

  const templateParams = {
    fullName: formData.get('fullName'),
    mobile: formData.get('mobile'),
    email: formData.get('email'),
    service: formData.get('service'),
    message: formData.get('message'),
  }

  try {
    setIsSending(true)

  await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  templateParams,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)

    setToast({
      show: true,
      type: 'success',
      message: 'Inquiry sent successfully. We will contact you soon.',
    })

    form.reset()
  } catch (error) {
    console.error(error)

    setToast({
      show: true,
      type: 'error',
      message: 'Something went wrong. Please try again.',
    })
  } finally {
    setIsSending(false)

    setTimeout(() => {
      setToast({
        show: false,
        type: '',
        message: '',
      })
    }, 4000)
  }
}
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <span className="section-label">
            GET IN TOUCH
          </span>

          <h2>
            Let&apos;s build a smarter and safer future together
          </h2>

          <p>
            Looking for CCTV surveillance, access control,
            networking or custom software solutions? Share your
            requirements and let&apos;s discuss the right solution
            for your project.
          </p>
        </motion.div>

        <div className="contact-layout">
          <motion.div
            className="contact-information"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <div className="contact-person-card">
              <div className="contact-person-icon">
                <UserRound size={30} />
              </div>

              <div>
                <span>Contact Person</span>

                <h3>
                  Sanket J. Saitavadekar
                </h3>

                <p>
                  Founder & Technical Director
                </p>

                <small className="contact-company">
                    Surveilix Technologies
                </small>
              </div>
            </div>

            <div className="contact-details-grid">
              <a
                className="contact-detail-card"
                href="tel:+918830647567"
              >
                <div className="contact-detail-icon">
                  <Phone size={24} />
                </div>

                <div>
                  <span>Call Us</span>

                  <h4>+91 8830647567</h4>

                  <p>
                    Speak directly about your requirement
                  </p>
                </div>
              </a>

              <a
                className="contact-detail-card"
                href="mailto:surveilix.cctv@gmail.com"
              >
                <div className="contact-detail-icon">
                  <Mail size={24} />
                </div>

                <div>
                  <span>Email Us</span>

                  <h4>
                    surveilix.cctv@gmail.com
                  </h4>

                  <p>
                    Send project details and inquiries
                  </p>
                </div>
              </a>

              <div className="contact-detail-card contact-location-card">
                <div className="contact-detail-icon">
                  <MapPin size={24} />
                </div>

                <div>
                  <span>Our Location</span>

                  <h4>
                    Panvel, Navi Mumbai
                  </h4>

                  <p>
                    Maharashtra, India
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-service-note">
              <span className="contact-note-dot" />

              <p>
                Available for projects across Mumbai,
                Navi Mumbai, Pune and Maharashtra.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <div className="contact-form-heading">
              <span>Project Inquiry</span>

              <h3>
                Tell us about your requirement
              </h3>

              <p>
                Fill in the details below and we will get
                back to you as soon as possible.
              </p>
            </div>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label htmlFor="fullName">
                    Full Name
                  </label>

                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="contact-form-group">
                  <label htmlFor="mobile">
                    Mobile Number
                  </label>

                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
              </div>

              <div className="contact-form-group">
                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="service">
                  Service Required
                </label>

                <select
                  id="service"
                  name="service"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  <option value="CCTV Installation">
                    CCTV Installation
                  </option>

                  <option value="Boom Barrier">
                    Boom Barrier
                  </option>

                  <option value="RFID Solutions">
                    RFID Solutions
                  </option>

                  <option value="Networking">
                    Networking
                  </option>

                  <option value="Software Development">
                    Software Development
                  </option>

                  <option value="AMC Services">
                    AMC Services
                  </option>

                  <option value="Other Requirement">
                    Other Requirement
                  </option>
                </select>
              </div>

              <div className="contact-form-group">
                <label htmlFor="message">
                  Project Details
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell us about your project, location and requirements..."
                  required
                />
              </div>

              <button
                className="contact-submit-button"
                type="submit"
                disabled={isSending}
              >
                <span>
                  {isSending ? 'Sending...' : 'Send Inquiry'}
                </span>

                <Send size={19} />
              </button>

              <p className="contact-form-note">
                Your inquiry will be sent securely to our team.
                We will contact you as soon as possible.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
      {toast.show && (
        <div className={`contact-toast ${toast.type}`}>
          {toast.message}
        </div>
      )}
    </section>
  )
}

export default Contact