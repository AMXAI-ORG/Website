import React, { useEffect, useRef } from "react";
import Navbar from "../components/navbar"; 
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../css/homesection.css"; 

gsap.registerPlugin(ScrollTrigger);

export default function HomeSection() {
  const earthContainerRef = useRef(null);
  const containerRef = useRef(null);
  const astroRef = useRef(null);

  useEffect(() => {
    // 🔥 FIXED: Pinned Viewport with Horizontal Moving Earth instead of Spin Rotation
    gsap.to(earthContainerRef.current, {
      x: "-35vw", // Smoothly shifts the huge earth from right to left as you scroll
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=150%",     // Controls scroll timeline window scale length
        scrub: 1.2,        // Damping for high-end inertia response
        pin: true,         // Pins the viewport screen in place while animation runs
        anticipatePin: 1
      },
    });

    // Hardware-Accelerated Mouse Tracking for Astronaut
    const xTo = gsap.quickTo(astroRef.current, "x", { duration: 0.8, ease: "power3.out" });
    const yTo = gsap.quickTo(astroRef.current, "y", { duration: 0.8, ease: "power3.out" });
    const rotateTo = gsap.quickTo(astroRef.current, "rotate", { duration: 0.5, ease: "power2.out" });

    const handleMouseMove = (e) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const targetX = (e.clientX - centerX) * 0.08;
      const targetY = (e.clientY - centerY) * 0.08;
      const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI);

      xTo(targetX);
      yTo(targetY);
      rotateTo(angle + 90);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="amxai-master-shell" ref={containerRef}>
      <Navbar />

      {/* HERO BODY VIEWPORT */}
      <section className="amxai-hero-viewport">
        {/* Core Strategic Typography Section */}
        <div className="hero-text-container">
          <p className="hero-subcaps">BRANDING / DESIGN / DEVELOPMENT</p>
          <h1 className="hero-headline">WE BUILD THE FUTURE</h1>
          <p className="hero-tagline">WHERE VISION BECOMES VISUAL</p>
        </div>

        {/* MOUSE CONTROLLABLE INTERACTIVE ASTRONAUT */}
        <div className="floating-astronaut" ref={astroRef}>
          <svg width="60" height="80" viewBox="0 0 64 64">
            <g fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="18" y="10" width="28" height="22" rx="10" fill="rgba(5,2,12,0.9)" stroke="#c084fc" strokeWidth="2" />
              <path d="M22 18Q32 14 42 18" stroke="#ffffff" strokeWidth="1" opacity="0.5"/>
              <rect x="20" y="32" width="24" height="16" rx="4" />
              <path d="M14 40v12h4v-8h8v8h4v-12" />
            </g>
          </svg>
        </div>

        {/* 🔥 FIXED: Ref assigned to Container for clean structural movement */}
        <div className="macro-earth-container" ref={earthContainerRef}>
          <img
            src="/assets/earth.png" 
            alt="Low Earth Orbit Moving Arc"
            className="real-earth-asset"
          />
        </div>

        <div className="scroll-indicator-arrow">↓</div>
      </section>
    </div>
  );
}