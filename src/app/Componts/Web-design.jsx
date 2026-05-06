"use client";
import React from "react";
import "./Web-design.css";
import { TopBar, Navbar, Footer } from "./App";
import Link from "next/link";

const SIDEBAR_SERVICES = [
  { label: "Digital Marketing", slug: "digital-marketing" },
  { label: "Branding", slug: "branding" },
  { label: "EL Printing", slug: "el-printing" },
  {label: "Web Design & Development",
    slug: "web-design",active: true,},
  { label: "Advertising", slug: "advertising" },
  { label: "Graphic Designing", slug: "graphic-designing" },
];


function  Webdesign() {
  return (
    <div className="webdesign-page">
      <TopBar />
      <Navbar />

      {/* ── HERO BANNER ── */}
      <section className="webdesign-hero">
        <div className="webdesign-hero-banner">
          <img src="/Page Banner (1).png" alt="Web Design Banner" />
          <div className="webdesign-hero-overlay">
            <h1>WEB DESIGN & DEVELOPMENT</h1>
            <p>Home — Services</p>
          </div>
        </div>
      </section>

      {/* ── TWO-COLUMN CONTENT ── */}
      <div className="webdesign-container">
        <div className="webdesign-wrapper">

          {/* ── MAIN CONTENT (LEFT) ── */}
          <div className="webdesign-main">

            {/* Main Image */}
            <div className="webdesign-main-img">
              <img src="/Link (7).png" alt="Web Design Overview" />
            </div>

            {/* Content Text */}
            <div className="webdesign-content-text">
              <h2>SERVICE OVERVIEW</h2>
              <p>
                Your website is your digital storefront. We craft sleek, responsive, and conversion-focused websites that blend creativity with functionality.From UX 
                design to backend development, we ensure your site performs beautifully across all devices.
              </p>
              <div className="offer-box">
  <h3>what we offer?</h3>

   <h4>
    <img src="/Background (5).png" alt="" />
    UI/UX DESIGN
  </h4>
  <p>
    Clean, intuitive layouts for seamless navigation.
  </p>

  <h4>
    <img src="/Background (5).png" alt="" />
    RESPONSIVE DEVELOPMENT
  </h4>
  <p>
    Optimized for desktop, tablet, and mobile.
  </p>

  <h4>
    <img src="/Background (5).png" alt="" />
    E-COMMERCE SOLUTIONS
  </h4>
  <p>
    Secure, Scalable, platforms for online sales.
  </p>
</div>

              {/* Secondary Image */}
              <div className="webdesign-secondary-img">
                <img src="/service-details-image (3).png" alt="Service Detail" />
              </div>
            </div>
          </div>

          {/* ── SIDEBAR (RIGHT) ── */}
          <aside className="webdesign-sidebar">

{/* Services List */}
<div className="webdesign-sidebar-widget webdesign-services-list">
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
            <div className="webdesign-sidebar-widget webdesign-quote-form">
              <h3>GET A QUOTE</h3>
              <form>
                <input type="text"  placeholder="Name"    required />
                <input type="email" placeholder="Email"   required />
                <textarea           placeholder="Message" required />
                <button type="submit" className="webdesign-submit-btn">
                  Send Message <span className="webdesign-arrow">→</span>
                </button>
              </form>
            </div>

            {/* Help Box */}
            <div className="webdesign-sidebar-widget webdesign-help-box">
              <div className="webdesign-help-icon">
                <img src="/question.png" alt="Help" />
              </div>
              <h3>DO YOU NEED ANY HELP?</h3>
              <div className="webdesign-contact-info">
                <p>+91 9840264453</p>
                <p>www.push.digital</p>
              </div>
              <Link href="/contact">  <button className="webdesign-contact-btn">
                Contact With Us <span className="webdesign-arrow">→</span>
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

export default  Webdesign;