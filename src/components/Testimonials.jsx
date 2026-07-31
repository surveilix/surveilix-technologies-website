import { Quote, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import '../styles/Testimonials.css'

const testimonials = [
  {
    name: 'Commercial Client',
    role: 'Navi Mumbai',
    review:
      'Professional consultation, clean installation and reliable support throughout the project.',
  },
  {
    name: 'Residential Client',
    role: 'Panvel',
    review:
      'The CCTV solution was planned according to our requirements and completed professionally.',
  },
  {
    name: 'Business Client',
    role: 'Mumbai',
    review:
      'Surveilix Technologies provided a practical security and networking solution with good support.',
  },
]

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <motion.div
          className="testimonials-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-label">
            CLIENT FEEDBACK
          </span>

          <h2>
            What our clients say about our work
          </h2>

          <p>
            We focus on reliable solutions, professional execution
            and responsive customer support.
          </p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.article
              className="testimonial-card"
              key={testimonial.name + testimonial.role}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
            >
              <div className="testimonial-top">
                <div className="testimonial-quote">
                  <Quote size={24} />
                </div>

                <div className="testimonial-stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={16}
                      fill="currentColor"
                    />
                  ))}
                </div>
              </div>

              <p className="testimonial-review">
                “{testimonial.review}”
              </p>

              <div className="testimonial-person">
                <div className="testimonial-avatar">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <h3>{testimonial.name}</h3>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials