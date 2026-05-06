"use client";
import React from "react";
import "./DigitalMarketing.css";
import { TopBar, Navbar, Footer } from "./App";
import Link from "next/link";

const SIDEBAR_SERVICES = [
  { label: "Digital Marketing", slug: "digital-marketing", active: true },
  { label: "Branding",          slug: "branding" },
  { label: "EL Printing",       slug: "el-printing" },
  { label: "Web Design & Development", slug: "web-design" },
  { label: "Advertising",       slug: "advertising" },
  { label: "Graphic Designing", slug: "graphic-designing" },
];


function Marketing() {
  return (
    <div className="dm-page">
      <TopBar />
      <Navbar />

      {/* ── HERO BANNER ── */}
      <section className="dm-hero">
        <div className="dm-hero-banner">
          <img src="/Page Banner (1).png" alt="Digital Marketing Banner" />
          <div className="dm-hero-overlay">
            <h1>DIGITAL MARKETING</h1>
            <p>Home — Services</p>
          </div>
        </div>
      </section>

      {/* ── TWO-COLUMN CONTENT ── */}
      <div className="dm-container">
        <div className="dm-wrapper">

          {/* ── MAIN CONTENT (LEFT) ── */}
          <div className="dm-main">

            {/* Main Image */}
            <div className="dm-main-img">
              <img src="/service-details-image (1).png" alt="Digital Marketing Overview" />
            </div>

            {/* Content Text */}
            <div className="dm-content-text">
              <h2>SERVICE OVERVIEW</h2>
              <p>
                We craft performance-driven strategies that blend creativity with analytics. 
                Our team builds <br /> data-driven strategies  across SEO, paid campaigns, social 
                media, and content <br /> marketing—ensuring  your brand reaches the right
                audience at the right time.
              </p>
              <div className="offer-box">
  <h3>what we offer?</h3>

  <h4>
    <img src="/Background (5).png" alt="" />
    SEO OPTIMATION
  </h4>
  <p>
    Improve visibility with keyword research, technical audits,
    and content alignment.
  </p>

  <h4>
    <img src="/Background (5).png" alt="" />
    SOCIAL MEDIA MARKETING
  </h4>
  <p>
    Engaging posts, Reels, and Campaigns tailored to your audience.
  </p>

  <h4>
    <img src="/Background (5).png" alt="" />
    CONTENT MARKETING
  </h4>
  <p>
    Blogs, Videos, and infographics designed to build authority and trust.
  </p>
</div>

              {/* Secondary Image */}
              <div className="dm-secondary-img">
                <img src="/service-details-image (2).png" alt="Service Detail" />
              </div>
            </div>
          </div>

          {/* ── SIDEBAR (RIGHT) ── */}
          <aside className="dm-sidebar">

            {/* Services List */}
            <div className="dm-sidebar-widget dm-services-list">
              <h3>SERVICES</h3>
              <ul>
                {SIDEBAR_SERVICES.map((svc) => (
                  <li key={svc.slug} className={svc.active ? "active" : ""}>
                    <Link href={`/${svc.slug}`}>
                      <button>{svc.label}</button>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get A Quote Form */}
            <div className="dm-sidebar-widget dm-quote-form">
              <h3>GET A QUOTE</h3>
              <form>
                <input type="text"  placeholder="Name"    required />
                <input type="email" placeholder="Email"   required />
                <textarea           placeholder="Message" required />
                <button type="submit" className="dm-submit-btn">
                  Send Message <span className="dm-arrow">→</span>
                </button>
              </form>
            </div>

            {/* Help Box */}
            <div className="dm-sidebar-widget dm-help-box">
              <div className="dm-help-icon">
                <img src="/question.png" alt="Help" />
              </div>
              <h3>DO YOU NEED ANY HELP?</h3>
              <div className="dm-contact-info">
                <p>+91 9840264453</p>
                <p>www.push.digital</p>
              </div>
             <Link href="/contact">  <button className="dm-contact-btn">
                Contact With Us <span className="dm-arrow">→</span>
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

export default Marketing;