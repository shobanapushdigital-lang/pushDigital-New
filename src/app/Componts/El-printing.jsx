"use client";
import React from "react";
import "./El-printing.css";
import { TopBar, Navbar, Footer } from "./App";
import Link from "next/link";

const SIDEBAR_SERVICES = [
  { label: "Digital Marketing", slug: "digital-marketing" },
  { label: "Branding",          slug: "branding"  },
  { label: "EL Printing",       slug: "el-printing",active: true },
  { label: "Web Design & Development", slug: "web-design" },
  { label: "Advertising",       slug: "advertising" },
  { label: "Graphic Designing", slug: "graphic-designing" },
];


function ElPrinting() {
  return (
    <div className="el-printing-page">
      <TopBar />
      <Navbar />

      {/* ── HERO BANNER ── */}
      <section className="el-printing-hero">
        <div className="el-printing-hero-banner">
          <img src="/Page Banner (1).png" alt="EL Printing Banner" />
          <div className="el-printing-hero-overlay">
            <h1>EL PRINTING</h1>
            <p>Home — Services</p>
          </div>
        </div>
      </section>

      {/* ── TWO-COLUMN CONTENT ── */}
      <div className="el-printing-container">
        <div className="el-printing-wrapper">

          {/* ── MAIN CONTENT (LEFT) ── */}
          <div className="el-printing-main">

            {/* Main Image */}
            <div className="el-printing-main-img">
              <img src="/Link (5).png" alt="EL Printing Overview" />
            </div>

            {/* Content Text */}
            <div className="el-printing-content-text">
              <h2>SERVICE OVERVIEW</h2>
              <p>
                Electroluminescent technology brings light to your marketing. Using Electroluminescent(EL) Technology, we create glowing, futuristic displays that demand attention. Perfect for events, signage, and 
                advertising, our EL prints make your brand shine- literally-day or night.
              </p>
              <div className="offer-box">
  <h3>what we offer?</h3>

  <h4>
    <img src="/Background (5).png" alt="" />
    GLOWING POSTERS & SIGNAGE
  </h4>
  <p>
    Eye- Catching displays for events and retail.
  </p>

  <h4>
    <img src="/Background (5).png" alt="" />
   CUSTOM EL PANELS
  </h4>
  <p>
   Futuristic designs tailored to your brand.
  </p>

  <h4>
    <img src="/Background (5).png" alt="" />
    INTERACTIVE INSTALLATIONS
  </h4>
  <p>
    Engaging experiences that captivate audiences.
  </p>
</div>

              {/* Secondary Image */}
              <div className="el-printing-secondary-img">
                <img src="/service-details-image (4).png" alt="Service Detail" />
              </div>
            </div>
          </div>

          {/* ── SIDEBAR (RIGHT) ── */}
          <aside className="el-printing-sidebar">

{/* Services List */}
<div className="el-printing-sidebar-widget el-printing-services-list">
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
            <div className="el-printing-sidebar-widget el-printing-quote-form">
              <h3>GET A QUOTE</h3>
              <form>
                <input type="text"  placeholder="Name"    required />
                <input type="email" placeholder="Email"   required />
                <textarea           placeholder="Message" required />
                <button type="submit" className="el-printing-submit-btn">
                  Send Message <span className="el-printing-arrow">→</span>
                </button>
              </form>
            </div>

            {/* Help Box */}
            <div className="el-printing-sidebar-widget el-printing-help-box">
              <div className="el-printing-help-icon">
                <img src="/question.png" alt="Help" />
              </div>
              <h3>DO YOU NEED ANY HELP?</h3>
              <div className="el-printing-contact-info">
                <p>+91 9840264453</p>
                <p>www.push.digital</p>
              </div>
            <Link href="/contact">  <button className="el-printing-contact-btn">
                Contact With Us <span className="el-printing-arrow">→</span>
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

export default ElPrinting;