import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import "../css/navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const linkClass = ({ isActive }) => (isActive ? "active" : "");

  return (
    <nav className="amxai-navbar">
      <div className="amxai-logo">
        <Link to="/">
          <img
            src="/assets/img/logoName.png"
            alt="AMXAI Logo"
            className="amxai-logo-img"
          />
        </Link>
      </div>

      <div className={`amxai-nav-links ${menuOpen ? "open" : ""}`}>
        <div className="amxai-sidebar-logo">
          <img
            src="/assets/img/logo.jpeg"
            className="logo-symbol"
            alt="AMXAI Logo"
          />
          <img
            src="/assets/img/logoName.png"
            className="logo-name"
            alt="AMXAI Logo"
          />
        </div>

        <NavLink to="/" className={linkClass} onClick={closeMenu}>
          HOME
        </NavLink>
        <NavLink to="/about" className={linkClass} onClick={closeMenu}>
          ABOUT
        </NavLink>
        <NavLink to="/service" className={linkClass} onClick={closeMenu}>
          SERVICE
        </NavLink>
        <NavLink to="/contact" className={linkClass} onClick={closeMenu}>
          CONTACT
        </NavLink>

        <Link
          to="/contact"
          className="amxai-touch-btn amxai-touch-btn-mobile"
          onClick={closeMenu}
        >
          GET IN TOUCH <ArrowUpRight size={14} />
        </Link>
      </div>

      <Link to="/contact" className="amxai-touch-btn">
        GET IN TOUCH <ArrowUpRight size={14} />
      </Link>

      <button
        className={`amxai-hamburger ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div
        className={`amxai-overlay ${menuOpen ? "open" : ""}`}
        onClick={closeMenu}
      ></div>
    </nav>
  );
}