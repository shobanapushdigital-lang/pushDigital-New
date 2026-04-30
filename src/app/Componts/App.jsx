"use client";
import { useState, useEffect, useRef } from "react";
import "./App.css";



/* ─── MOUSE FOLLOWER ─── */
function MouseFollower() {
  const dot = useRef(null);
  const ring = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (dot.current) {
        dot.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };
    window.addEventListener('mousemove', move);

    let raf;
    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.12;
      pos.current.y += (target.current.y - pos.current.y) * 0.12;
      if (ring.current) {
        ring.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    const addHover = () => {
      document.querySelectorAll('a, button, [role="button"]').forEach(el => {
        el.addEventListener('mouseenter', () => { ring.current?.classList.add('hovered'); dot.current?.classList.add('hovered'); });
        el.addEventListener('mouseleave', () => { ring.current?.classList.remove('hovered'); dot.current?.classList.remove('hovered'); });
      });
    };
    addHover();

    return () => {
      window.removeEventListener('mousemove', move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dot} />
      <div className="cursor-ring" ref={ring} />
    </>
  );
}
function useScrollReveal() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentRef);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return [ref, isVisible];
}

function Reveal({ children, className = "", animation = "fade-up", delay = 0, style = {} }) {
  const [ref, isVisible] = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`reveal reveal-${animation} ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────
   COUNT UP COMPONENT
───────────────────────────────────────── */
function CountUp({ end, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useScrollReveal();
  const started = useRef(false);

  useEffect(() => {
    if (isVisible && !started.current) {
      started.current = true;
      let start = null;
      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isVisible, end, duration]);

  return <h2 ref={ref}>{count}{suffix}</h2>;
}

const scrollToSection = (e, id) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

/* ─────────────────────────────────────────
   NAV DATA
───────────────────────────────────────── */
const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Blog", id: "blog" },
  { label: "Contact", id: "contact" },
  { button: "Let's Connect →", id: "connect" },
];

/* ─────────────────────────────────────────
   TOP BAR
───────────────────────────────────────── */
function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <span className="topbar-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          KK.Nagar, Chennai
        </span>
        <span className="topbar-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          murali@push.digital
        </span>
        <span className="topbar-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.54 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          9840264453
        </span>
      </div>
      <div className="topbar-socials">
        <a href="#" className="social-icon" aria-label="Instagram">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </a>
        <a href="#" className="social-icon" aria-label="LinkedIn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
        <a href="#" className="social-icon" aria-label="X">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        <a href="#" className="social-icon" aria-label="Facebook">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   NAVBAR
───────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('home');

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", h);

    // Active section tracking
    const ids = NAV_ITEMS.map(i => i.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", h);
      observer.disconnect();
    };
  }, []);
  

  return (
    <nav className={`navbar${scrolled ? " shadowed" : ""}${dark ? " dark-mode" : ""}`}>
      <div className="nav-logo">
        <div className="logo-mark">
          <img src="/logo.png" alt="Push Digital logo" />
        </div>
      </div>

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links${menuOpen ? " open" : ""}`}>
  {NAV_ITEMS.map((item,idx) => (
    <li key={item.id} className="nav-item">

      {/* NORMAL LINKS */}
      {item.label && (
        <a
          href={`#${item.id}`}
          className={`nav-link ${activeId === item.id ? "active" : ""}`}
          onClick={(e) => {
            scrollToSection(e, item.id);
            setMenuOpen(false);
            setActiveId(item.id);
          }}
        >
          {item.label}
        </a>
      )}

      {/* BUTTON */}
      {item.button && (




        <a
  href="#contact"
  className="nav-btn"
  onClick={(e) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth"
    });
    setMenuOpen(false);
  }}
>
  Let's Connect
</a>
        
      )}

    </li>
  ))}
</ul>
    </nav>
  );
}

/* ─────────────────────────────────────────
   HERO TAG
───────────────────────────────────────── */
function HeroTag({ children, color, rotate ,  top, left, right, bottom }) {
  return (
    <div
      className="hero-tag"
      style={{
        "--tag-bg": color,
        top: top || "auto",
        left: left || "auto",
        right: right || "auto",
        bottom: bottom || "auto",
        rotate:rotate

      }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────
   HERO
───────────────────────────────────────── */
function Hero() {
  const [playVisible, setPlayVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setPlayVisible(true), 400);
    return () => clearTimeout(t);
  }, []);

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 8,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 8,
    });
  };

  return (
    <section id="home" className="hero" ref={heroRef} onMouseMove={handleMouseMove}>

      {/* Row 1 */}
      <div className="hero-row hero-row-1">
        <div className="Adve animate-slide-right" style={{ position: 'relative', animationDelay: "0.05s" }}>
          <HeroTag  color="#FCCF00"  rotate={"-24deg"} top="-200px" left="-16px">
            ADVERTISING
          </HeroTag>
        </div>

        <span className="hero-word word-fa animate-slide-left" style={{ position: 'relative', animationDelay: "0.15s" }}>FA</span>

        <div
          className="hero-img hero-img-1 animate-slide-right"
          style={{ position: 'relative', transform: `translate(${mousePos.x * 0.6}px, ${mousePos.y * 0.6}px)`, animationDelay: "0.25s" }}
        >
          <div className="hero-img-inner">
            <img src="/car1.png" alt="Campaign visual 1" />
          </div>
          <div className={`hero-play-btn${playVisible ? " visible" : ""}`}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            PLAY
          </div>
        </div>

        <span className="hero-word word-st animate-slide-left" style={{ position: 'relative', animationDelay: "0.35s" }}> ST GROWING 
          <HeroTag className="bill" rotate={"15deg"} color="#DEAAFF" top="110px" right="-20px">BILLBOARD</HeroTag> </span>



      </div>

      {/* Row 2 */}
      <div className="hero-row hero-row-2">
        <div
          className="hero-img hero-img-2 animate-slide-left"
          style={{ position: 'relative', transform: `translate(${mousePos.x * -0.4}px, ${mousePos.y * 0.4}px)`, animationDelay: "0.45s" }}
        >
          <div className="hero-img-inner">
            <img src="/car2.png" alt="Campaign visual 2" />
          </div>
        </div>

        <span className="hero-word word-media animate-slide-right" style={{ position: 'relative', animationDelay: "0.55s" }}>MEDIA AGENCY</span>

        <div className="animate-slide-left" style={{ position: 'relative', animationDelay: "0.65s" }}>
          <HeroTag color="#FFCBB0" rotate={"-20deg"}  bottom="-80px" right="80px">MARKETING →</HeroTag>
        </div>
      </div>

      {/* Bottom */}
      <div className="hero-bottom animate-bottom">
        <p className="hero-sub">
          We're passionate group of creative and savvy marketers<br />
          striving to produce innovative, meaningful work.
        </p>
        <button className="hero-cta" onClick={(e) => scrollToSection(e, "contact")}>
          START A CONVERSATION
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   BRAND SECTION
───────────────────────────────────────── */
function BrandSection() {
  return (
    <section className="build-section">
      <div className="container">
        <Reveal animation="fade-up">
          <h3 className="classh3">who we are</h3>
          <div className="build-header">
            <h1>WE BUILD</h1>
            <h1>BRAND</h1>
            <h1>STANDS OUT</h1>
          </div>
        </Reveal>

        <div className="bs-stage">
          {/* LEFT */}
          <Reveal animation="slide-right" className="bs-side left">
            <div className="bs-box">
              <span className="bs-text">RETAILERS</span>
              <span className="bs-icon"><img src="/brand_icon.png" alt="icon" /></span>
            </div>
            <div className="bs-box">
              <span className="bs-text">POLITICAL</span>
              <span className="bs-icon"><img src="/brand_icon.png" alt="icon" /></span>
            </div>
          </Reveal>

          {/* CENTER — slides top-to-bottom */}
          <Reveal animation="slide-down" className="bs-center" delay={200}>
            <img src="/Container.png" alt="Brand" />
          </Reveal>

          {/* RIGHT */}
          <Reveal animation="slide-left" className="bs-side right">
            <div className="bs-box">
              <span className="bs-text">HEALTHCARE</span>
              <span className="bs-icon"><img src="/brand_icon.png" alt="icon" /></span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   CTA SECTION
───────────────────────────────────────── */
function CtaSection() {
  return (
    <section className="cta-section">
      <div className="container cta-container">
        <Reveal animation="slide-right" className="cta-left">
          <h1>
            Ready to scale your Brand
            <img src="/woman-on-smile.png" alt="img" />
            <br />
            Get in Touch and Let's Discuss <br />
            How Can We Drive Measurable <br />
            Growth for your Business.
          </h1>
        </Reveal>
        <Reveal animation="slide-left" className="cta-right">
          <button className="btn-primary" onClick={(e) => scrollToSection(e, "contact")}>LET'S COLLABORATE</button>
          <button className="btn-link" onClick={(e) => scrollToSection(e, "services")}>/ Discover Our Services ↓</button>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   ABOUT SECTION
───────────────────────────────────────── */
function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="container about-wrapper">
        <Reveal animation="slide-right" className="about-image">
          <img src="/d5a1669f2347d59197d6c8b2a2e43473c1a88130.png" alt="about" />
          <div className="about-play-btn">▶</div>
        </Reveal>
        <Reveal animation="slide-left" className="about-text" delay={200}>
          <p>
            We are a Chennai-based Media Agency connecting businesses with potential clients. As experts,
            we work with emerging and established brands to build and develop unique content that can be leveraged
            to grow business market reach. In any industry, change and adaptation is vital if you want to succeed
            and to grow. We pride ourselves on our ability to adapt to the trends of the moment, and our team
            at Push Digital is constantly creating new interactive marketing ideas so that we achieve our clients' goals.
          </p>
        </Reveal>
        <Reveal animation="fade-up" className="about-card" delay={400}>
          <h2>WE ARE</h2>
          <h2>PUSH DIGITAL</h2>
          <button onClick={(e) => scrollToSection(e, "about")}>ABOUT US →</button>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   WORK SECTION
───────────────────────────────────────── */
function WorkSection() {
  return (
    <>
      <section id="services" className="work">

        {/* Stats */}
        <Reveal animation="fade-up"><h1 className="work-title">WORK INFO</h1></Reveal>
        <div className="container work-stats">

          {/* ── STATS BAR ── */}
          <Reveal animation="fade-up" className="stats-row">
            <div className="stat">
              <CountUp end={5} suffix="+" />
              <p>Year of Experience</p>
            </div>
            <div className="stat">
              <CountUp end={500} suffix="+" />
              <p>Project Completed</p>
            </div>
            <div className="stat">
              <CountUp end={75} suffix="+" />
              <p>Happy Clients</p>
            </div>
            <div className="stat">
              <CountUp end={3} suffix="+" />
              <p>Country Saved</p>
            </div>
          </Reveal>
        </div>

        {/* ── MAIN LAYOUT ── */}
        <div className="work-body">

          {/* LEFT — sticky heading */}
          <div className="work-left">
            <p className="work-sub">Our Services</p>
            <Reveal animation="slide-right">
              <h1 className="work-heading">
                EMPOWERING<br />
                BRANDS<br />
                THROUGH<br />
                CREATIVITY.
              </h1>
            </Reveal>
          </div>

          {/* RIGHT — zigzag cards */}
          <div className="work-zigzag">

            {/* ROW 1 — image left, card right */}
            <div className="zigzag-row row1">
              <Reveal animation="slide-right" className="zigzag-image1">
                <img src="/service-image.png" alt="Advertising" />
                <img className="zz-arrow1" src="/Component 1.png" alt="" />
                <span className="zz-count1">1/3</span>
              </Reveal>
              <Reveal animation="slide-left" className="floating-card" delay={200}>
                <h3>ADVERTISING</h3>
                <span className="fc-tag1">MARKETING</span>
                <ul className="marke">
                  <li>Performance Marketing</li>
                  <li>Digital Marketing</li>
                  <li>Social Media Marketing</li>
                </ul>
              </Reveal>
            </div>

            {/* ROW 2 — image left, card right */}
            <div className="zigzag-row row2">
              <Reveal animation="slide-right" className="zigzag-image2">
                <img src="/service-image (1).png" alt="Creatives" />
                <img className="zz-arrow" src="/Component 1.png" alt="" />
                <span className="zz-count">2/3</span>
              </Reveal>
              <Reveal animation="slide-left" className="floating-card" delay={200}>
                <h3>CREATIVES</h3>
                <span className="fc-tag2">MARKETING</span>
                <ul className="marke">
                  <li>OOH Advertising</li>
                  <li>Infilm Branding</li>
                  <li>Social Media Content</li>
                </ul>
              </Reveal>
            </div>

            {/* ROW 3 — image left, card right */}
            <div className="zigzag-row row3">
              <Reveal animation="slide-right" className="zigzag-image3">
                <img src="/service-image (2).png" alt="Tech" />
                <img className="zz-arrow3" src="/Component 1.png" alt="" />
                <span className="zz-count3">3/3</span>
              </Reveal>
              <Reveal animation="slide-left" className="floating-card" delay={200}>
                <h3>TECH & INNOVATION</h3>
                <span className="fc-tag3">MARKETING</span>
                <ul className="marke">
                  <li>Web Development</li>
                  <li>UI/UX Design</li>
                  <li>Electroluminescent Products</li>
                </ul>
              </Reveal>
            </div>
          </div>
        </div>

        <section id="client">
          <Reveal animation="fade-up">
            <h3 className="services">
              VIEW ALL SERVICES <span className="arrow"> →</span>
            </h3>

            <div>
              <h2 className="client-h2">
                Recognized as a leader by those in the know
              </h2>

              {/* 👇 WRAPPER ADDED */}
              <div className="client-wrapper">
                <ul className="client">

                  <li><img src="/Junction.png" /></li>
                  <li><img src="/Zeb.png" /></li>

                  {/* 👇 ACTIVE LOGO */}
                  <li className="active">
                    <img src="/Decathlon.png" />
                  </li>

                  <li><img src="/Eld.png" /></li>
                  <li><img src="/Sri.png" /></li>

                  {/* duplicate for infinite scroll */}
                  <li><img src="/Junction.png" /></li>
                  <li><img src="/Zeb.png" /></li>
                  <li><img src="/Decathlon.png" /></li>
                  <li><img src="/Eld.png" /></li>
                  <li><img src="/Sri.png" /></li>

                </ul>
              </div>

            </div>
          </Reveal>
        </section>

        <section id="contact" className="contact-section">

          <Reveal animation="slide-right">
            <h2 className="contact-title">CONTACT US</h2>
          </Reveal>

          <div className="contact-grid">

            {/* LEFT COLUMN OF GRID */}
            <div className="form-left" style={{ display: 'flex', flexDirection: 'column' }}>

              <Reveal animation="slide-right">
                <div className="input-row">
                  <input type="text" placeholder="Your name" />
                  <input type="email" placeholder="Your email" />
                </div>

                <div className="input-row">
                  <input type="text" placeholder="Your number" />
                  <input type="text" placeholder="Your area" />
                </div>

                {/* TEXTAREA AND FLOATING BUTTON */}
                <div style={{ position: 'relative' }}>
                  <textarea placeholder="How can we help you?" style={{ height: '180px', display: 'block' }}></textarea>

                  <Reveal animation="slide-left" className="contact-btn-reveal" style={{ position: 'absolute', bottom: 0, right: 0, width: '50%' }}>
                    <button className="contact-btn" style={{ width: '100%', justifyContent: 'space-between' }}>
                      LEAVE A MESSAGE <span>→</span>
                    </button>
                  </Reveal>
                </div>
              </Reveal>

              {/* BOTTOM ROW: Checkbox on left, Purple color block on right */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>

                {/* CHECKBOX (Privacy Section) */}
                <div style={{ paddingRight: '20px', paddingBottom: '20px' }}>
                  <Reveal animation="slide-right">
                    <div className="checkbox" style={{ marginTop: '20px' }}>
                      <input type="checkbox" />
                      <p>
                        I agree to the privacy policy and give my permission to process my personal <br />
                        data for the purposes specified in the Privacy Policy.
                      </p>
                    </div>
                  </Reveal>
                </div>

                {/* PURPLE COLOR BLOCK */}
                <Reveal animation="slide-left">
                  <div className="color" style={{ width: '30%', height: '100%', backgroundColor: '#DCA3FF' }}></div>
                </Reveal>

              </div>

            </div>

            {/* RIGHT COLUMN OF GRID (Empty) */}
            <div className="form-right"></div>

          </div>
        </section>
        <section id="portfolio" className="projects-section">
          <div className="projects-container">

            <Reveal animation="fade-up"><h6 className="our-projects">Our Projects</h6></Reveal>

            <div className="projects">

              {/* LEFT */}
              <Reveal animation="slide-right" className="project-h2-wrap">
                <h2 className="project-h2">
                  BUILDING TRUST THROUGH <br />
                  EXCEPTIONAL WORK
                </h2>
              </Reveal>

              {/* RIGHT */}
              <Reveal animation="slide-left" className="project-right">
                <p className="project-p">
                  We Love What we do, Check out Our Latest Works
                </p>

                <button className="work-btn" onClick={(e) => scrollToSection(e, "portfolio")}>
                  OUR WORKS →
                </button>
              </Reveal>
            </div>
          </div>
        </section>
        <section className="img1">
          <img className="link" src="/Link.png" alt="" />
          <div className="EXHIBITIONS">
            <div className="uni">
              <h2 className="united">UNITED EXHIBITIONS</h2>
            </div>



            {/* 👇 add this wrapper */}
            <div className="btn-group">
              <button className="advertiding">ADVERTISING</button>
              <button className="billboard">BILLBOARD</button>
              <button className="marketing">MARKETING</button>
            </div>
          </div>
          <p className="digital">Digital Marketing</p>
        </section>
        <section className="img2">
          <img className="link" src="/Link (2).png" alt="" />
          <div className="EXHIBITIONS">
            <div className="uni">
              <h2 className="united">ELDD</h2>
            </div>



            {/* 👇 add this wrapper */}
            <div className="btn-group">
              <button className="advertiding">BILLBOARD</button>
              <button className="billboard">CAMPAIGN</button>
              <button className="marketing">CREATIVE</button>
            </div>
          </div>
          <p className="digital">Marketing Collaterals</p>
        </section>

        <section className="img3">
          <img className="link" src="/Link (1).png" alt="" />
          <div className="EXHIBITIONS">
            <div className="uni">
              <h2 className="united">REYAL</h2>
            </div>



            {/* 👇 add this wrapper */}
            <div className="btn-group">
              <button className="advertiding">DIGITAL</button>
              <button className="billboard">CREATIVE</button>
              <button className="marketing">AGENCY</button>
            </div>
          </div>
          <p className="digital">Brochure Design</p>
        </section>

        <section className="img4">
          <img className="link" src="/Link (3).png" alt="" />
          <div className="EXHIBITIONS">
            <div className="uni">
              <h2 className="united">VALENTINO</h2>
            </div>



            {/* 👇 add this wrapper */}
            <div className="btn-group">
              <button className="advertiding">SOLUTIONS</button>
              <button className="billboard">BILLBOARD</button>
              <button className="marketing">INNOVATIVE</button>
            </div>
          </div>
          <p className="digital">Event Posters</p>
        </section>

        <section className="testimonials">
          <div className="container">

            <Reveal animation="fade-up"><p className="test-p">Testimonials</p></Reveal>

            <Reveal animation="fade-up">
              <h2 className="about">
                HEAR WHAT OUR <br />
                CLIENTS <br />
                SAY ABOUT US
              </h2>
            </Reveal>

            <div className="test-grid">

              {/* LEFT BLOCK */}
              <Reveal animation="slide-right" className="test-left">
                <img className="logo-p" src="/logo-p.png" alt="" />

                <h3 className="world">
                  HELPING THE <br />
                  WORLD WITH CREATIVE <br />
                  ADVERTISING.
                </h3>

                <div className="stars">
                  <img src="/Margin.png" />
                  <img src="/Margin.png" />
                  <img src="/Margin.png" />
                  <img src="/Margin.png" />
                  <img src="/Margin.png" />
                </div>

                <p className="reviews">(40+ reviews)</p>
              </Reveal>

              {/* CARD 1 */}
              <Reveal animation="fade-up" delay={200} className="test-card">
                <span className="quote">“</span>

                <p>
                  “The Recent work you have done <br /> for us is exemplary. Keep creating <br /> these kind of extraordinary works. <br /> Team work at it’s best! Looking <br /> forward for a long term association <br /> with them.”
                </p>

                <div className="user">
                  <img src="/formal.jpg" />
                  <div>
                    <h4>Johnny Jhon</h4>
                    <p>Co-Founder</p>
                  </div>
                </div>
              </Reveal>

              {/* CARD 2 */}
              <Reveal animation="fade-up" delay={400} className="test-card">
                <span className="quote">“</span>

                <p>
                  “One of the best Advertising and <br /> Branding Agency in Chennai. <br /> specialized in strategy and <br /> branding love the creative efforts of <br /> Push Digital.”
                </p>

                <div className="user">
                  <img src="/formal4.jpg" />
                  <div>
                    <h4>Emily Johnson</h4>
                    <p>Creative Director</p>
                  </div>
                </div>
              </Reveal>

            </div>
          </div>
        </section>

        <section className="above-footer">
          <div className="above-container">
            <Reveal animation="fade-up"><h1>Push Your Brand Into the Real World</h1></Reveal>

            <Reveal animation="fade-up" delay={200}>
              <p className="above-p">
                At Push.digital, we turn streets into stories—delivering high-impact
                outdoor advertising that captures <br /> attention, builds recall, and drives
                real-world results.
              </p>
            </Reveal>

            <Reveal animation="fade-up" delay={400}>
              <button className="us" onClick={(e) => scrollToSection(e, "contact")}>
                Contact Us
                <img src="/arrow-2025.svg fill.png" alt="" />
              </button>
            </Reveal>
          </div>
        </section>



      </section>
      <footer className="footer">

        {/* TOP CTA */}
        <div className="footer-top">
  <div className="footer-cta-left slide-in-left">
    <h2>
      LET'S MAKE IT <br />
      HAPPEN <br />
      TOGETHER.
    </h2>
  </div>

  <div className="footer-cta-right slide-in-right">
    <p>
      We’re PUSH DIGITAL, a team of experienced professionals with expertise
      in implementing new strategies and ideas.
    </p>

    <button className="start-btn">
      START A CONVERSATION →
    </button>
  </div>
</div>

        {/* SOCIAL */}
        <div className="footer-social">
          <span>Email ↗</span>
          <span>Instagram ↗</span>
          <span>Twitter (X) ↗</span>
          <span>LinkedIn ↗</span>
          <span>Medium ↗</span>
          <span>Spotify ↗</span>
        </div>

        {/* MAIN FOOTER */}
        <div className="footer-main">

          {/* LEFT */}
          <div className="footer-left">
            <img src="/logo-p.png" alt="logo" />

            <div className="contact">

              <div className="contact-item">
                <img className="contact-icon" src="/Background (1).png" alt="phone icon" />
                <div className="contact-text">
                  <span className="label">Phone Number</span>
                  <span className="value">9840264453</span>
                </div>
              </div>

              <div className="contact-item">
                <img className="contact-icon" src="/Background (2).png" alt="mail icon" />
                <div className="contact-text">
                  <span className="label">Mail</span>
                  <span className="value">murali@push.digital</span>
                </div>
              </div>

            </div>
          </div>

          {/* SERVICES */}
          <div className="footer-col">
            <h4>SERVICES</h4>
            <p>Advertising</p>
            <p>Creatives</p>
            <p>Tech & Innovations</p>
          </div>

          {/* UTILITY */}
          <div className="footer-col">
            <h4>UTILITY PAGES</h4>
            <p>Licenses</p>
            <p>Changelog</p>
            <p>Style Guide</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <p>PushDigital 2025 | All Rights Reserved</p>

          <div>
            <span>Privacy Policy | Terms & Conditions</span>
      
          </div>
        </div>

      </footer>
    </>

  );
}


/* ─────────────────────────────────────────
   APP ROOT
───────────────────────────────────────── */
export default function App() {
  return (
    <div className="app">
      <MouseFollower />
      <TopBar />
      <Navbar />
      <Hero />
      <BrandSection />
      <CtaSection />
      <AboutSection />
      <WorkSection />
      {/* <Footer/> */}
    </div>
  );
}