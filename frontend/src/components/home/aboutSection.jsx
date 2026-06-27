import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import "../../css/aboutSection.css";

/* ─── Animated Counter ─── */
const Counter = ({ target, suffix = "" }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const end = parseInt(target);
        const duration = 1800;
        const step = Math.ceil(end / (duration / 16));
        const timer = setInterval(() => {
            start += step;
            if (start >= end) { setCount(end); clearInterval(timer); }
            else setCount(start);
        }, 16);
        return () => clearInterval(timer);
    }, [inView, target]);

    return <span ref={ref}>{count}{suffix}</span>;
};

/* ─── Futuristic CSS Visual ─── */
const AIVisual = () => (
    <div className="ai-visual">
        {/* Outer rotating ring */}
        <div className="ring ring-1" />
        <div className="ring ring-2" />
        <div className="ring ring-3" />

        {/* Core orb */}
        <div className="orb-core">
            <div className="orb-inner" />
            <div className="orb-pulse" />
        </div>

        {/* Orbiting nodes */}
        {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className={`orbit-node node-${i}`}>
                <div className="node-dot" />
            </div>
        ))}

        {/* Floating glass cards */}
        <div className="float-card card-a">
            <span className="card-label">AI Core</span>
            <span className="card-value">v2.6</span>
        </div>
        <div className="float-card card-b">
            <span className="card-label">Inference</span>
            <span className="card-value">12ms</span>
        </div>
        <div className="float-card card-c">
            <span className="card-label">Models</span>
            <span className="card-value">7+</span>
        </div>

        {/* Grid overlay */}
        <div className="visual-grid" />

        {/* Particles */}
        {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className={`v-particle p-${i}`} />
        ))}
    </div>
);

/* ─── Feature Card ─── */
const FeatureCard = ({ icon, title, desc, delay }) => (
    <motion.div
        className="feature-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -6, transition: { duration: 0.25 } }}
    >
        <div className="fc-icon">{icon}</div>
        <h4 className="fc-title">{title}</h4>
        <p className="fc-desc">{desc}</p>
        <div className="fc-border" />
    </motion.div>
);

/* ─── Timeline Item ─── */
const TimelineItem = ({ year, label, index }) => (
    <motion.div
        className="tl-item"
        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.55, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
    >
        <div className="tl-dot" />
        <div className="tl-content">
            <span className="tl-year">{year}</span>
            <span className="tl-label">{label}</span>
        </div>
    </motion.div>
);

/* ─── Main Component ─── */
export default function AboutSection() {
    const sectionRef = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
    const blobY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    const handleMouseMove = (e) => {
        const rect = sectionRef.current?.getBoundingClientRect();
        if (!rect) return;
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        mouseX.set((e.clientX - cx) * 0.03);
        mouseY.set((e.clientY - cy) * 0.03);
    };

    const visualX = useTransform(springX, (v) => `${v}px`);
    const visualY = useTransform(springY, (v) => `${v}px`);

    const features = [
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
                </svg>
            ),
            title: "AI First",
            desc: "Every product we build starts with an AI-native foundation — not a retrofit.",
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
                </svg>
            ),
            title: "Future Ready",
            desc: "We architect for tomorrow's scale, today's clarity, and long-term resilience.",
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
                </svg>
            ),
            title: "Scalable Core",
            desc: "From MVP to millions of users — our infrastructure flexes without breaking.",
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            ),
            title: "Human Centered",
            desc: "Powerful technology that feels effortless — because design is never an afterthought.",
        },
    ];

    const timeline = [
        { year: "2026", label: "AMXAI Founded" },
        { year: "Next", label: "First AI Products Launched" },
        // { year: "Now", label: "Serving Global Clients" },
        // { year: "Next", label: "Building Future Technologies" },
    ];

    return (
        <section
            className="about-section"
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            id="about"
        >
            {/* ── Background layer ── */}
            <div className="about-bg">
                <motion.div className="bg-blob blob-1" style={{ y: blobY }} />
                <motion.div className="bg-blob blob-2" style={{ y: blobY }} />
                <div className="bg-grid" />
                <div className="bg-noise" />
                {Array.from({ length: 18 }).map((_, i) => (
                    <div key={i} className={`bg-particle bp-${i}`} />
                ))}
            </div>

            {/* ══════════════════════════════════
          HERO SPLIT — Left + Right
      ══════════════════════════════════ */}
            <div className="about-hero">
                {/* Left */}
                <div className="hero-left">
                    <motion.span
                        className="section-eyebrow"
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        About AMXAI
                    </motion.span>

                    <motion.h2
                        className="hero-heading"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Building the Future<br />
                        <span className="gradient-text">with Artificial Intelligence</span>
                    </motion.h2>

                    <motion.p
                        className="hero-para"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    >
                        AMXAI was founded in 2026 with a single obsession: make AI the default way the world builds software. We partner with startups, businesses, and creators to design and ship AI-powered digital products — from intelligent SaaS platforms to fully automated pipelines — at a quality the industry rarely sees.
                    </motion.p>

                    <motion.p
                        className="hero-para"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Our mission is not to add AI as a feature — it's to build from the intelligence layer up. Every interface, every interaction, every decision is rooted in a future where software thinks alongside you.
                    </motion.p>

                    <motion.a
                        href="#contact"
                        className="hero-cta"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55, delay: 0.42 }}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        Learn More
                        <svg className="cta-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </motion.a>
                </div>

                {/* Right — animated visual */}
                <motion.div
                    className="hero-right"
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.75, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                    style={{ x: visualX, y: visualY }}
                >
                    <AIVisual />
                </motion.div>
            </div>

            {/* ══════════════════════════════════
          STATS
      ══════════════════════════════════ */}
            <motion.div
                className="stats-row"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
            >
                {[
                    { label: "Founded", value: "2026", raw: false },
                    { label: "Projects", value: 50, suffix: "+", raw: true },
                    { label: "Clients", value: 20, suffix: "+", raw: true },
                    { label: "Countries", value: 5, suffix: "+", raw: true },
                ].map((s, i) => (
                    <div key={i} className="stat-item">
                        <div className="stat-number">
                            {s.raw ? <Counter target={s.value} suffix={s.suffix} /> : s.value}
                        </div>
                        <div className="stat-label">{s.label}</div>
                    </div>
                ))}
            </motion.div>

            {/* ══════════════════════════════════
          WHY CHOOSE US — Feature Cards
      ══════════════════════════════════ */}
            <div className="features-section">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                >
                    <span className="section-eyebrow">Why Choose Us</span>
                    <h3 className="section-title">Engineered for a Different Standard</h3>
                </motion.div>

                <div className="features-grid">
                    {features.map((f, i) => (
                        <FeatureCard key={i} {...f} delay={i * 0.1} />
                    ))}
                </div>
            </div>

            {/* ══════════════════════════════════
          TIMELINE
      ══════════════════════════════════ */}
            <div className="timeline-section">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                >
                    <span className="section-eyebrow">Our Journey</span>
                    <h3 className="section-title">From Idea to Impact</h3>
                </motion.div>

                <div className="timeline">
                    <div className="tl-line" />
                    {timeline.map((t, i) => (
                        <TimelineItem key={i} index={i} {...t} />
                    ))}
                </div>
            </div>

            {/* ══════════════════════════════════
          BOTTOM CTA
      ══════════════════════════════════ */}
            <motion.div
                className="bottom-cta"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="cta-glow" />
                <span className="section-eyebrow">Ready?</span>
                <h2 className="cta-heading">
                    Ready to Build the<br />
                    <span className="gradient-text">Future Together?</span>
                </h2>
                <motion.a
                    href="#contact"
                    className="cta-btn-large"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                >
                    Let's Build
                    <span className="btn-arrow">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </span>
                </motion.a>
            </motion.div>
        </section>
    );
}