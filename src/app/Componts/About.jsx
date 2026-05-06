"use client";

import "./About.css";
import React from "react";
import CountUp from "react-countup";
import { Reveal, TopBar, Navbar, Footer } from "./App";

/* =========================
   ABOUT PAGE COMPONENTS
========================= */

function HeroBanner() {

  
  return (
    <section className="about-hero">
      <TopBar />
      <Navbar />
      <div className="hero-banner">
        <img src="/Page Banner (1).png" alt="About Banner" />
        <div className="hero-overlay">
          <Reveal animation="fade-up">
            <h1>ABOUT US</h1>
            <p>Home — About</p>
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

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
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
          <button className="btn-primary" onClick={() => scrollToSection("contact")}>LET'S COLLABORATE</button>
          <button className="btn-link" onClick={(e) => scrollToSection(e, "services")}>/ Discover Our Services ↓</button>
        </Reveal>
      </div>
    </section>
  );
}


function AboutSection({ scrollToSection }) {
  return (
    <section id="about" className="about-section">
      <div className="container about-wrapper">
        <Reveal animation="slide-right" className="about-image">
          <img src="/d5a1669f2347d59197d6c8b2a2e43473c1a88130.png" alt="about" />
          <div className="about-play-btn">▶</div>
        </Reveal>

        <Reveal animation="slide-left" className="about-text" delay={200}>
          <p>
            We are a Chennai-based Media Agency connecting businesses with
            potential clients. As experts, we work with emerging and established
            brands to build and develop unique content that can be leveraged to
            grow business market reach. In any industry, change and adaptation 
            is vital if you want to succeed and to grow. We pride ourselves on 
            our ability to adapt to the trends of the moment.
          </p>
        </Reveal>

        <Reveal animation="fade-up" className="about-card" delay={400}>
          <h2>WE ARE</h2>
          <h2>PUSH DIGITAL</h2>
          <button onClick={(e) => scrollToSection(e, "about")}>
            ABOUT US →
          </button>
        </Reveal>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <Reveal animation="fade-up">
          <p className="test-p">Testimonials</p>
          <h2 className="about">
            HEAR WHAT OUR <br /> CLIENTS <br /> SAY ABOUT US
          </h2>
        </Reveal>

        <div className="test-grid">
          <Reveal animation="slide-right" className="test-left">
            <img className="logo-p" src="/logo-p.png" alt="logo" />
            <h3 className="world">HELPING THE WORLD WITH CREATIVE ADVERTISING.</h3>
            <div className="stars">
              {[...Array(5)].map((_, i) => <img key={i} src="/Margin.png" alt="star" />)}
            </div>
            <p className="reviews">(40+ reviews)</p>
          </Reveal>

          <Reveal animation="fade-up" delay={200} className="test-card">
            <span className="quote">“</span>
            <p>“The Recent work you have done for us is exemplary. Team work at it’s best!”</p>
            <div className="user">
              <img src="/formal.jpg" alt="user" />
              <div>
                <h4>Johnny Jhon</h4>
                <p>Co-Founder</p>
              </div>
            </div>
          </Reveal>

          <Reveal animation="fade-up" delay={400} className="test-card">
            <span className="quote">“</span>
            <p>“One of the best Advertising and Branding Agency in Chennai. specialized in strategy.”</p>
            <div className="user">
              <img src="/formal4.jpg" alt="user" />
              <div>
                <h4>Emily Johnson</h4>
                <p>Creative Director</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function WorkSection() {
  return (
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

    </section>
    
  );
}



/* =========================
   MAIN EXPORT
========================= */
export default function About() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="about-page">
      <HeroBanner />
      <CtaSection />
      <AboutSection scrollToSection={scrollToSection} />
      <Testimonials />
      <WorkSection />
      <Footer/>
    </div>
    
  );
}