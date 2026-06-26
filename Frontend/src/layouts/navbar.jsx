import React from "react";
import { ArrowUpRight } from "lucide-react";
import "../css/header.css"; // Import the CSS file for styling
import About from "../components/home/aboutSection.jsx"; // Import the About component

export default function Navbar() {
  return (
    <nav className="amxai-navbar">
      {/* Coded Premium Text Logo */}
      <div className="amxai-logo">
        <img src="/assets/img/k.png" alt="AMXAI Logo" className="amxai-logo-img" />
      </div>

      {/* Navigation Menu Links */}
      <div className="amxai-nav-links">
        <a href="#home" className="active">HOME</a>
        <a href="About">ABOUT</a>
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