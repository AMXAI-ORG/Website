import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../css/home.css";

gsap.registerPlugin(ScrollTrigger);

export default function HomeSection() {
    const containerRef = useRef(null);
    const earthContainerRef = useRef(null);
    const earthImgRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        gsap.set(earthContainerRef.current, {
            xPercent: -50,
            yPercent: 50,
            rotation: 0,
        });

        gsap.to(earthImgRef.current, {
            rotation: 25,
            duration: 3,
            ease: "power2.out",
        });

        const wobbleTween = gsap.to(earthImgRef.current, {
            rotation: "+=8",
            duration: 6,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 3,
        });

        const earthScrollTween = gsap.to(earthContainerRef.current, {
            yPercent: -20,
            xPercent: -50,
            scale: 1.3,
            rotation: "+=60",
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "+=100%",
                scrub: 1,
            },
        });

        const textScrollTween = gsap.to(textRef.current, {
            y: "-40vh",
            opacity: 0,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "+=100%",
                scrub: 1,
            },
        });

        return () => {
            wobbleTween.kill();
            earthScrollTween.kill();
            textScrollTween.kill();
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div className="amxai-master-shell" ref={containerRef}>
            <nav className="navbar"></nav>

            <section className="amxai-hero-viewport">
                <div className="hero-text-container" ref={textRef}>
                    <p className="hero-subcaps">BRANDING / DESIGN / DEVELOPMENT</p>
                    <h1 className="hero-headline">WE BUILD THE FUTURE</h1>
                    <p className="hero-tagline">WHERE VISION BECOMES VISUAL</p>
                </div>

                <div className="macro-earth-container" ref={earthContainerRef}>
                    <img
                        src="/assets/img/e.png"
                        alt="Low Earth Orbit Moving Arc"
                        className="real-earth-asset"
                        ref={earthImgRef}
                    />
                </div>

                <div className="scroll-indicator-arrow">↓</div>
            </section>
        </div>
    );
}