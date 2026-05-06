"use client";
import React from "react";
import "./Branding.css";
import { TopBar, Navbar, Footer } from "./App";
import Link from "next/link";

const SIDEBAR_SERVICES = [
  { label: "Digital Marketing", slug: "digital-marketing" },
  { label: "Branding",          slug: "branding",active: true  },
  { label: "EL Printing",       slug: "el-printing" },
  { label: "Web Design & Development", slug: "web-design" },
  { label: "Advertising",       slug: "advertising" },
  { label: "Graphic Designing", slug: "graphic-designing" },
];


function Branding() {
  return (
    <div className="brand-page">
      <TopBar />
      <Navbar />

      {/* ── HERO BANNER ── */}
      <section className="brand-hero">
        <div className="brand-hero-banner">
          <img src="/Page Banner (1).png" alt="Branding Banner" />
          <div className="brand-hero-overlay">
            <h1>BRANDING</h1>
            <p>Home — Services</p>
          </div>
        </div>
      </section>

      {/* ── TWO-COLUMN CONTENT ── */}
      <div className="brand-container">
        <div className="brand-wrapper">

          {/* ── MAIN CONTENT (LEFT) ── */}
          <div className="brand-main">

            {/* Main Image */}
            <div className="brand-main-img">
              <img src="/Link (4).png" alt="Branding Overview" />
            </div>

            {/* Content Text */}
            <div className="brand-content-text">
              <h2>SERVICE OVERVIEW</h2>
              <p>
                Your brand identity is the soul of your business. We design identities that speak louder than words- from logos and color palettes to tone and storytelling. Our branding process transforms ideas into visual
                 experiences that connect emotionally and stand out in competitive markets.
              </p>
              <div className="offer-box">
  <h3>what we offer?</h3>

  <h4>
    <img src="/Background (5).png" alt="" />
    LOGO DESIGN & VISUAL IDENTITY
  </h4>
  <p>
    Memorable logos, typography, and color palettes.
  </p>

  <h4>
    <img src="/Background (5).png" alt="" />
    BRAND GUIDLINES
  </h4>
  <p>
    Consistent rules for tone, imagery, and messaging.
  </p>

  <h4>
    <img src="/Background (5).png" alt="" />
    REBRANDING SERVICES
  </h4>
  <p>
    Refreshing outdated identities to align with modern trends.
  </p>
</div>

              {/* Secondary Image */}
              <div className="brand-secondary-img">
                <img src="/service-details-image (7).png" alt="Service Detail" />
              </div>
            </div>
          </div>

          {/* ── SIDEBAR (RIGHT) ── */}
          <aside className="brand-sidebar">

{/* Services List */}
<div className="brand-sidebar-widget brand-services-list">
  <h3>SERVICES</h3>

  <ul>
    {SIDEBAR_SERVICES.map((svc) => (
      <li
        key={svc.slug}
        className={svc.active ? "active" : ""}
      >
        <Link href={`/${svc.slug}`} className="service-link">
          {svc.label}
        </Link>
      </li>
    ))}
  </ul>
</div>         

            {/* Get A Quote Form */}
            <div className="brand-sidebar-widget brand-quote-form">
              <h3>GET A QUOTE</h3>
              <form>
                <input type="text"  placeholder="Name"    required />
                <input type="email" placeholder="Email"   required />
                <textarea           placeholder="Message" required />
                <button type="submit" className="brand-submit-btn">
                  Send Message <span className="brand-arrow">→</span>
                </button>
              </form>
            </div>

            {/* Help Box */}
            <div className="brand-sidebar-widget brand-help-box">
              <div className="brand-help-icon">
                <img src="/question.png" alt="Help" />
              </div>
              <h3>DO YOU NEED ANY HELP?</h3>
              <div className="brand-contact-info">
                <p>+91 9840264453</p>
                <p>www.push.digital</p>
              </div>
            <Link href="/contact">  <button className="brand-contact-btn">
                Contact With Us <span className="brand-arrow">→</span>
              </button>
              </Link>
            </div>


          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Branding