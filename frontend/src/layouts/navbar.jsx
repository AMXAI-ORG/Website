import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import "../css/navbar.css";

export default function Navbar() {
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

      <div className="amxai-nav-links">
        <Link to="/" className="active">
          HOME
        </Link>

        <Link to="/about">
          ABOUT
        </Link>

        <Link to="/service">
          SERVICE
        </Link>

        <Link to="/contact">
          CONTACT
        </Link>
      </div>

      <Link to="/contact" className="amxai-touch-btn">
        GET IN TOUCH <ArrowUpRight size={14} />
      </Link>
    </nav>
  );
}