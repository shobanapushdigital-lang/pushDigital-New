"use client";
import React from "react";
import "./Contact.css";
import { TopBar, Navbar, Footer } from "./App";
import { useState , useEffect } from "react";

function Contact() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [area, setarea] = useState("");
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (showMessage) {
      // clear form
      setname("");
      setemail("");
      setnumber("");
      setarea("");
      setMessage("");
      setIsChecked(false);

      // auto hide message
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  return (
    <div className="contact-page">
      <TopBar />
      <Navbar />

      {/* HERO BANNER */}
     <section className="contact-hero">
  <div className="contact-hero-banner">
    <img src="/Page Banner (1).png" alt="Contact Banner" />

    <div className="contact-hero-overlay">
      <h1>CONTACT US</h1>
      <p>Home — Contact</p>
    </div>
  </div>
</section>

<section className="address">
  <div className="address-wrapper">

    <div className="address-block">
      <img src="/Vector (2).png" alt="Address Icon" />
      <div className="address-content">
        <h4 className="address-title">ADDRESS:</h4>
        <p className="address-text">
          339/97, Lakshwanaswamy Salai,<br />
          K.K. Nagar, Chennai, Tamil Nadu 600068
        </p>
      </div>
    </div>

    <div className="address-block">
      <img src="/Vector (3).png" alt="Phone Icon" />
      <div className="address-content">
        <h4 className="address-title">PHONE:</h4>
        <p className="address-text">+91 98765 43210</p>
      </div>
    </div>

    <div className="address-block">
      <img src="/Vector (4).png" alt="Email Icon" />
      <div className="address-content">
        <h4 className="address-title">EMAIL:</h4>
        <p className="address-text">www.push.digital</p>
      </div>
    </div>

  </div>
</section>

      <section id="contact" className="contact-section">
      
                <div animation="slide-right">
                  <h2 className="contact-title">CONTACT US</h2>
                </div>
      
                <div className="contact-grid">
      
                  {/* LEFT COLUMN OF GRID */}
                  <div className="form-left" style={{ display: 'flex', flexDirection: 'column' }}>
      
                    <div animation="slide-right">
                      <div className="input-row">
                        <input type="text" placeholder="Your name" value={name} onChange={(e) => setname(e.target.value)} />
                        <input type="email" placeholder="Your email" value={email} onChange={(e) => setemail(e.target.value)} />
                      </div>
      
                      <div className="input-row">
                        <input type="text" placeholder="Your number" value={number} onChange={(e) => setnumber(e.target.value)} />
                        <input type="text" placeholder="Your area" value={area} onChange={(e) => setarea(e.target.value)} />
                      </div>
      
                      {/* TEXTAREA AND FLOATING BUTTON */}
                      <div style={{ position: 'relative' }}>
                        <textarea placeholder="How can we help you?" style={{ height: '180px', display: 'block' }} value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
      
                       <div
            animation="slide-left"
            className="contact-btn-reveal"
            style={{ position: "absolute", bottom: 0, right: 0, width: "100%" }}
          >
             <div className="contact-btn-reveal">
  {!showMessage ? (
    <button
      onClick={() => setShowMessage(true)}
      className="contact-btn1"
    >
      LEAVE A MESSAGE <span>→</span>
    </button>
  ) : (
    <div className="message-box">
      Thank you for your message!
    </div>
  )}
</div>
          </div>
                      </div>
                    </div>
      
                    {/* BOTTOM ROW: Checkbox on left, Purple color block on right */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
      
                      {/* CHECKBOX (Privacy Section) */}
                      <div style={{ paddingRight: '20px', paddingBottom: '20px' }}>
                        <div animation="slide-right">
                          <div className="checkbox" style={{ marginTop: '20px' }}>
                            <input type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
                            <p>
                              I agree to the privacy policy and give my permission to process my personal <br />
                              data for the purposes specified in the Privacy Policy.
                            </p>
                          </div>
                        </div>
                      </div>
      
                      {/* PURPLE COLOR BLOCK */}
                      <div animation="slide-left">
                        <div className="color" style={{ width: '100%', height: '100%', backgroundColor: '#DCA3FF' }}></div>
                      </div>
      
                    </div>
      
                  </div>
      
                  {/* RIGHT COLUMN OF GRID (Empty) */}
                  <div className="form-right"></div>
      
                </div>
                </section>
              <section>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.9498010286247!2d80.19736357572383!3d13.03886731339863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266d9ed77393d%3A0x33a93d590d17f1b8!2sPush%20Digital!5e0!3m2!1sen!2sin!4v1777982889754!5m2!1sen!2sin" 
                 width="600"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"></iframe>
              </section>

      <Footer />
    </div>
  );
}

export default Contact;