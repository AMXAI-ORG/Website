import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import "../css/header.css";

export default function Navbar() {
  return (
    <nav className="amxai-navbar">
      {/* Coded Premium Text Logo */}
      <div className="amxai-logo">
        <img src="/assets/img/k.png" alt="AMXAI Logo" className="amxai-logo-img" />
      </div>

      {/* Navigation Menu Links */}
      <div className="amxai-nav-links">
        <Link to="/" className="active">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/service">SERVICE</Link>
        <Link to="/contact">CONTACT</Link>
      </div>

      {/* Premium Outline Get In Touch Button */}
      <button className="amxai-touch-btn">
        GET IN TOUCH <ArrowUpRight size={14} />
      </button>
    </nav>
  );
}