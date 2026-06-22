import React from "react";
import { ArrowUpRight } from "lucide-react";
import "../css/header.css"; // Import the CSS file for styling

export default function Navbar() {
  return (
    <nav className="amxai-navbar">
      {/* Coded Premium Text Logo */}
      <div className="amxai-logo">
        AMX<span>AI</span>
      </div>

      {/* Navigation Menu Links */}
      <div className="amxai-nav-links">
        <a href="#home" className="active">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#service">SERVICE</a>
        <a href="#contact">CONTACT</a>
      </div>

      {/* Premium Outline Get In Touch Button */}
      <button className="amxai-touch-btn">
        GET IN TOUCH <ArrowUpRight size={14} />
      </button>
    </nav>
  );
}