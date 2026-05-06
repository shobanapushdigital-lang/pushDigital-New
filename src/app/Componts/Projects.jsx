"use client";
import React from "react";
import "./Projects.css";
import { TopBar, Navbar, Footer } from "./App";

function Projects() {
  return (
    <div className="Projects-page">
      <TopBar />
      <Navbar />

      {/* HERO */}
      <section className="Projects-hero">
        <div className="Projects-hero-banner">
          <img src="/Page Banner (1).png" alt="Projects Banner" />

          <div className="Projects-hero-overlay">
            <h1>PROJECTS</h1>
            <p>Home — Projects</p>
          </div>
        </div>
      </section>

      {/* PROJECT 1 */}
      <section className="img1">
        <img className="link" src="/Link.png" alt="" />

        <div className="EXHIBITIONS">
          <div className="uni">
            <h2 className="united">UNITED EXHIBITIONS</h2>
          </div>

          <div className="btn-group">
            <button className="advertiding">ADVERTISING</button>
            <button className="billboard">BILLBOARD</button>
            <button className="marketing">MARKETING</button>
          </div>
        </div>

        <p className="digital">Digital Marketing</p>
      </section>

      {/* PROJECT 2 */}
      <section className="img2">
        <img className="link" src="/Link (2).png" alt="" />

        <div className="EXHIBITIONS">
          <div className="uni">
            <h2 className="united">ELDD</h2>
          </div>

          <div className="btn-group">
            <button className="advertiding">BILLBOARD</button>
            <button className="billboard">CAMPAIGN</button>
            <button className="marketing">CREATIVE</button>
          </div>
        </div>

        <p className="digital">Marketing Collaterals</p>
      </section>

      {/* PROJECT 3 */}
      <section className="img3">
        <img className="link" src="/Link (1).png" alt="" />

        <div className="EXHIBITIONS">
          <div className="uni">
            <h2 className="united">REYAL</h2>
          </div>

          <div className="btn-group">
            <button className="advertiding">DIGITAL</button>
            <button className="billboard">CREATIVE</button>
            <button className="marketing">AGENCY</button>
          </div>
        </div>

        <p className="digital">Brochure Design</p>
      </section>

      {/* PROJECT 4 */}
      <section className="img4">
        <img className="link" src="/Link (3).png" alt="" />

        <div className="EXHIBITIONS">
          <div className="uni">
            <h2 className="united">VALENTINO</h2>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Projects;