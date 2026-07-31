import { ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import "../styles/CtaBanner.css";

function CtaBanner() {
  return (
    <section className="cta-section">
      <div className="cta-container">

        <motion.div
          className="cta-box"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
        >

          <div className="cta-content">

            <div className="cta-icon">
              <ShieldCheck size={42} />
            </div>

            <span className="cta-label">
              READY TO SECURE YOUR BUSINESS?
            </span>

            <h2>
              Let's Build Your Smart Security Infrastructure
            </h2>

            <p>
              From CCTV Surveillance to Boom Barrier, RFID,
              Networking and Custom Software Development,
              Surveilix Technologies delivers reliable,
              scalable and professional solutions.
            </p>

          </div>

          <div className="cta-buttons">

            <a
              href="tel:+918830647567"
              className="cta-primary"
            >
              Call Now
            </a>

            <a
              href="mailto:surveilix.cctv@gmail.com"
              className="cta-secondary"
            >
              Get Free Consultation

              <ArrowRight size={18}/>
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default CtaBanner;