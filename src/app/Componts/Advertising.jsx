"use client";
import React from "react";
import "./Advertising.css";
import { TopBar, Navbar, Footer } from "./App";
import Link from "next/link";

const SIDEBAR_SERVICES = [
  { label: "Digital Marketing", slug: "digital-marketing" },
  { label: "Branding",          slug: "branding"  },
  { label: "EL Printing",       slug: "el-printing" },
  { label: "Web Design & Development", slug: "web-design" },
  { label: "Advertising",       slug: "advertising",active: true },
  { label: "Graphic Designing", slug: "graphic-designing" },
];


function Advertising() {
  return (
    <div className="advertising-page">
      <TopBar />
      <Navbar />

      {/* ── HERO BANNER ── */}
      <section className="advertising-hero">
        <div className="advertising-hero-banner">
          <img src="/Page Banner (1).png" alt="Advertising Banner" />
          <div className="advertising-hero-overlay">
            <h1>ADVERTISING</h1>
            <p>Home — Services</p>
          </div>
        </div>
      </section>

      {/* ── TWO-COLUMN CONTENT ── */}
      <div className="advertising-container">
        <div className="advertising-wrapper">

          {/* ── MAIN CONTENT (LEFT) ── */}
          <div className="advertising-main">

            {/* Main Image */}
            <div className="advertising-main-img">
              <img src="/Link (9).png" alt="Advertising Overview" />
            </div>

            {/* Content Text */}
            <div className="advertising-content-text">
              <h2>SERVICE OVERVIEW</h2>
              <p>
                We don’t just advertise- we create impact. Our campaigns combine design, media planning, and market insights to deliver results that resonate. whether it’s digital, print, or outdoor,
                 we help your brand step up and stand out with strategic storytelling.
              </p>
              <div className="offer-box">
  <h3>what we offer?</h3>

  <h4>
    <img src="/Background (5).png" alt="" />
    MEDIA PRINTING & BUYING
  </h4>
  <p>
    Strategic placement across digital and traditional channels.
  </p>

  <h4>
    <img src="/Background (5).png" alt="" />
    CREATIVE CAMPAIGNS
  </h4>
  <p>
   Bold visuals and messaging that resonate.
  </p>

  <h4>
    <img src="/Background (5).png" alt="" />
    PUBLIC RELATIONS
  </h4>
  <p>
    Building positive brand perception through storytelling.
  </p>
</div>

              {/* Secondary Image */}
              <div className="advertising-secondary-img">
                <img src="/service-details-image (6).png" alt="Service Detail" />
              </div>
            </div>
          </div>

          {/* ── SIDEBAR (RIGHT) ── */}
          <aside className="advertising-sidebar">

{/* Services List */}
<div className="advertising-sidebar-widget advertising-services-list">
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
            <div className="advertising-sidebar-widget advertising-quote-form">
              <h3>GET A QUOTE</h3>
              <form>
                <input type="text"  placeholder="Name"    required />
                <input type="email" placeholder="Email"   required />
                <textarea           placeholder="Message" required />
                <button type="submit" className="advertising-submit-btn">
                  Send Message <span className="advertising-arrow">→</span>
                </button>
              </form>
            </div>

            {/* Help Box */}
            <div className="advertising-sidebar-widget advertising-help-box">
              <div className="advertising-help-icon">
                <img src="/question.png" alt="Help" />
              </div>
              <h3>DO YOU NEED ANY HELP?</h3>
              <div >
                <p className="phone">+91 9840264453</p>
                <p className="advertising-contact-info ">www.push.digital</p>
              </div>
               <Link href="/contact"> <button className="advertising-contact-btn">
                Contact With Us → 
              </button> </Link>
              
            </div>

          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Advertising;