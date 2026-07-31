import { useState } from "react";
import { Menu, X } from "lucide-react";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-container">
        <a
          href="#home"
          className="nav-logo"
          onClick={closeMenu}
        >
          <div className="nav-logo-icon">
            S
          </div>

          <div className="nav-logo-text">
            <span className="nav-brand">
              Surveilix
            </span>

            <span className="nav-brand-subtitle">
              Technologies
            </span>
          </div>
        </a>

        <nav
          className={`nav-links ${
            menuOpen ? "active" : ""
          }`}
        >
          <a
            href="#home"
            onClick={closeMenu}
          >
            Home
          </a>

          <a
            href="#services"
            onClick={closeMenu}
          >
            Services
          </a>

          <a
            href="#about"
            onClick={closeMenu}
          >
            About
          </a>

          <a
            href="#projects"
            onClick={closeMenu}
          >
            Projects
          </a>

          <a
            href="#contact"
            onClick={closeMenu}
          >
            Contact
          </a>

          <a
            href="#contact"
            className="nav-btn"
            onClick={closeMenu}
          >
            Get Consultation
          </a>
        </nav>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>
      </div>
    </header>
  );
}

export default Navbar;