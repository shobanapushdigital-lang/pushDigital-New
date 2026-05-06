"use client";
import React from "react";
import "./Graphic-designing.css";
import { TopBar, Navbar, Footer } from "./App";
import Link from "next/link";

const SIDEBAR_SERVICES = [
  { label: "Digital Marketing", slug: "digital-marketing" },
  { label: "Branding", slug: "branding" },
  { label: "EL Printing", slug: "el-printing" },
  {label: "Web Design & Development",
    slug: "web-design"},
  { label: "Advertising", slug: "advertising" },
  { label: "Graphic Designing", slug: "graphic-designing",active: true, },
];


function  GraphicDesigning() {
  return (
    <div className="graphic-designing-page">
      <TopBar />
      <Navbar />

      {/* ── HERO BANNER ── */}
      <section className="graphic-designing-hero">
        <div className="graphic-designing-hero-banner">
          <img src="/Page Banner (1).png" alt="Graphic Designing Banner" />
          <div className="graphic-designing-hero-overlay">
            <h1>GRAPHIC DESIGNING</h1>
            <p>Home — Services</p>
          </div>
        </div>
      </section>

      {/* ── TWO-COLUMN CONTENT ── */}
      <div className="graphic-designing-container">
        <div className="graphic-designing-wrapper">

          {/* ── MAIN CONTENT (LEFT) ── */}
          <div className="graphic-designing-main">

            {/* Main Image */}
            <div className="graphic-designing-main-img">
              <img src="/Link (8).png" alt="Graphic Design Overview" />
            </div>

            {/* Content Text */}
            <div className="graphic-designing-content-text">
              <h2>SERVICE OVERVIEW</h2>
              <p>
                Design that speaks your brands language. From logos and brochures to social media creatives, we bring ideas to life with precision and flair. Our designers blend creativity with quick 
                turnaround times to ensure your visuals always make a lasting impression.
              </p>
              <div className="offer-box">
  <h3>what we offer?</h3>

   <h4>
    <img src="/Background (5).png" alt="" />
    LOGO DESIGN 
  </h4>
  <p>
   Unique marks that define your identity.
  </p>

  <h4>
    <img src="/Background (5).png" alt="" />
    MARKETING COLLATERALS
  </h4>
  <p>
    Flyers, Brochures, and posters with impact.
  </p>

  <h4>
    <img src="/Background (5).png" alt="" />
    DEGITAL CREATIVES
  </h4>
  <p>
    Social media posts, ads, and infographics.
  </p>
</div>

              {/* Secondary Image */}
              <div className="graphic-designing-secondary-img">
                <img src="/service-details-image (8).png" alt="Service Detail" />
              </div>
            </div>
          </div>

          {/* ── SIDEBAR (RIGHT) ── */}
          <aside className="graphic-designing-sidebar">

{/* Services List */}
<div className="graphic-designing-sidebar-widget graphic-designing-services-list">
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
            <div className="graphic-designing-sidebar-widget graphic-designing-quote-form">
              <h3>GET A QUOTE</h3>
              <form>
                <input type="text"  placeholder="Name"    required />
                <input type="email" placeholder="Email"   required />
                <textarea           placeholder="Message" required />
                <button type="submit" className="graphic-designing-submit-btn">
                  Send Message <span className="graphic-designing-arrow">→</span>
                </button>
              </form>
            </div>

            {/* Help Box */}
            <div className="graphic-designing-sidebar-widget graphic-designing-help-box">
              <div className="graphic-designing-help-icon">
                <img src="/question.png" alt="Help" />
              </div>
              <h3>DO YOU NEED ANY HELP?</h3>
              <div className="graphic-designing-contact-info">
                <p>+91 9840264453</p>
                <p>www.push.digital</p>
              </div>
              <Link href="/contact">  <button className="graphic-designing-contact-btn">
                Contact With Us <span className="graphic-designing-arrow">→</span>
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

export default  GraphicDesigning;