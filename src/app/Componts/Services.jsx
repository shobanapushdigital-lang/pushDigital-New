"use client";
import React, { useState } from 'react';
import './Services.css';
import { TopBar, Navbar, Footer } from './App';
import Link from 'next/link';

const SERVICES = [
  {
    num: '01',
    title: 'DIGITAL MARKETING',
    desc: 'We craft performance-driven digital strategies across SEO, Paid Media, Social, And Content Marketing.',
    img: '/service-details-image (1).png',
    slug: 'digital-marketing',
  },
  {
    num: '02',
    title: 'BRANDING',
    desc: 'We create unique designs using the best programs on the market, Bringing Life to your ideas to your brand.',
    img: '/Link (4).png',
    slug: 'branding',
  },
  {
    num: '03',
    title: 'EL PRINTING',
    desc: 'Electroluminescent Technology brings a futuristic glow to your marketing materials, we create Eye-catching displays that demand attention.',
    img: '/Link (5).png',
    slug: 'el-printing',
  },
  {
    num: '04',
    title: 'WEB DEVELOPMENT & DESIGN',
    desc: 'Our team specializes in creating clean, professional websites built to attract visitors and increase your conversion.',
    img: '/Link (7).png',
    slug: 'web-design',
  },
  {
    num: '05',
    title: 'ADVERTISING',
    desc: 'We provide Advertising, Design, Media Planning and buying, Market research, Digital and public relations services.',
    img: '/Link (9).png',
    slug: 'advertising',
  },
  {
    num: '06',
    title: 'GRAPHIC DESIGNING',
    desc: 'Logos, Flyers, Brochures…Whatever your business needs, we create fantastic design with quick turn around times.',
    img: '/Link (8).png',
    slug: 'graphic-designing',
  },
];

const CARDS_PER_PAGE = 6;

function Services() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(SERVICES.length / CARDS_PER_PAGE);
  const startIdx = (page - 1) * CARDS_PER_PAGE;
  const visibleServices = SERVICES.slice(startIdx, startIdx + CARDS_PER_PAGE);
  
  return (
    <div className="services-page">
      <TopBar />
      <Navbar />

      {/* ── HERO BANNER ── */}
      <section className="svc-hero">
        <div className="svc-hero-banner">
          <img src="/Page Banner (1).png" alt="Services Banner" />
          <div className="svc-hero-overlay">
            <h1>SERVICES</h1>
            <p>Home — Services</p>
          </div>
        </div>
      </section>

      {/* ── CARD GRID ── */}
      <section className="svc-grid-section">
        <div className="svc-grid-container">
          <div className="svc-grid">
            {visibleServices.map((svc) => (
              <div className="svc-card" key={svc.num}>

                {/* Number */}
                <div className="svc-card-num">{svc.num}</div>

                {/* Title + Desc */}
                <div className="svc-card-header">
                  <h2>{svc.title}</h2>
                  <p>{svc.desc}</p>
                </div>

       {/* Image with hover overlay */}

<Link href={`/${svc.slug}`} className="svc-card-img">
  <img src={svc.img} alt={svc.title} />
</Link>
              </div>
            ))}
          </div>

          {/* ── PAGINATION ── */}
          {totalPages > 1 && (
            <div className="svc-pagination">
              <button
                className="svc-page-btn svc-page-arrow"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                aria-label="Previous page"
              >
                ←
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  className={`svc-page-btn${page === p ? ' active' : ''}`}
                  onClick={() => setPage(p)}
                >
                  {p}
                </button>
              ))}
              <button
                className="svc-page-btn svc-page-arrow"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                aria-label="Next page"
              >
                →
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Services;