import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="amxai-navbar">
      {/* Dynamic Coded Brand Text Logo */}
      <div className="amxai-logo">
        AMX<span>AI</span>
      </div>

      {/* Nav Menu Links */}
      <div className="amxai-nav-links">
        <a href="#home" className="active">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#service">SERVICE</a>
        <a href="#contact">CONTACT</a>
      </div>

      {/* Corporate Get In Touch Button */}
      <button className="amxai-touch-btn">
        GET IN TOUCH <ArrowUpRight size={14} />
      </button>
    </nav>
  );
}