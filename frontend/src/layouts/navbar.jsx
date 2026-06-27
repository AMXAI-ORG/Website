import { ArrowUpRight } from "lucide-react";
import "../css/navbar.css";

export default function Navbar() {
  return (
    <nav className="amxai-navbar">
      <div className="amxai-logo">
        <img src="/assets/img/logoName.png" alt="AMXAI Logo" className="amxai-logo-img" />
      </div>

      <div className="amxai-nav-links">
        <a href="#home" className="active">HOME</a>
        <a href="About">ABOUT</a>
        <a href="#service">SERVICE</a>
        <a href="#contact">CONTACT</a>
      </div>

      <button className="amxai-touch-btn">
        GET IN TOUCH <ArrowUpRight size={14} />
      </button>
    </nav>
  );
}