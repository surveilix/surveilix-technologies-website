import { Mail, MapPin, Phone, ShieldCheck } from 'lucide-react'
import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              <ShieldCheck size={28} />

              <div>
                <strong>SURVEILIX</strong>
                <span>TECHNOLOGIES</span>
              </div>
            </div>

            <p>
              Professional security, networking and software solutions designed
              for reliable business operations.
            </p>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-column">
            <h3>Services</h3>
            <a href="#services">CCTV Surveillance</a>
            <a href="#services">Boom Barrier</a>
            <a href="#services">RFID Systems</a>
            <a href="#services">Networking</a>
          </div>

          <div className="footer-column footer-contact">
            <h3>Contact</h3>

            <p>
              <Phone size={17} />
              <span>+91 8830647567</span>
            </p>

            <p>
              <Mail size={17} />
              <span>surveilix.cctv@gmail.com</span>
            </p>

            <p>
              <MapPin size={17} />
              <span>Panvel, Navi Mumbai, Maharashtra</span>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Surveilix Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer