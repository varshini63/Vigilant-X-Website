// src/components/Queries.js
import React from 'react';

const Queries = () => {
  return (
    <section id="queries" className="section">
      <div className="queries-layout">
        <div className="left-section">
          <div className="contact-section">
            <h3 className="contact-title">Contact Us</h3>
            <div className="social-links">
              <a href="#" target="_blank" className="social-link linkedin-icon">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="mailto:vigilance@vnrvjiet.in" className="social-link email-icon">
                <i className="fa-solid fa-envelope"></i>
              </a>
              <a href="#" target="_blank" className="social-link instagram-icon">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div className="pricing-info-section">
            <h4 className="pricing-title">Registration Fees</h4>
            <div className="pricing-cards">
              <div className="pricing-card vnr-student">
                <div className="price-badge">₹100</div>
                <p className="student-type">VNR VJIET Students</p>
              </div>
              <div className="pricing-card external-student">
                <div className="price-badge">₹150</div>
                <p className="student-type">Non VNR VJIET Students</p>
              </div>
            </div>
            <p className="pricing-note">* Includes access to all events, workshops, and refreshments</p>
          </div>
        </div>
        
        <div className="venue-section">
          <h3 className="venue-title">Event Venue</h3>
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.344880720254!2d78.38282767493841!3d17.53875928337448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8e0ab28e0975%3A0x7b048b2858fdee94!2sVallurupalli%20Nageswara%20Rao%20Vignana%20Jyothi%20Institute%20of%20Engineering%20%26Technology!5e0!3m2!1sen!2sin!4v1758607214052!5m2!1sen!2sin"
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          <p className="venue-address">VNR VJIET, Bachupally, Hyderabad, Telangana 500090</p>
        </div>
      </div>
    </section>
  );
};

export default Queries;
