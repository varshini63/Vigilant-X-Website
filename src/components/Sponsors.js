import React, { useEffect, useRef, useState } from 'react';

function Sponsors() {
  const sponsorsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      },
      { threshold: 0.1 }
    );

    if (sponsorsRef.current) {
      observer.observe(sponsorsRef.current);
    }

    return () => {
      if (sponsorsRef.current) {
        observer.unobserve(sponsorsRef.current);
      }
    };
  }, []);

  const goldSponsors = [
    {
      name: 'IVY Overseas',
      logo: './images/ivy_logo.jpg',
      category: 'Gold'
    }
  ];

  const silverSponsors = [
    {
      name: 'Lickees',
      logo: './images/Lickees_logo.jpg',
      category: 'Silver'
    }
  ];

  return (
    <section id="sponsors" className="section sponsors-section" ref={sponsorsRef}>
      <h2 className="section-title">Our Sponsors</h2>
      
      <div className="sponsors-container">
        <div className="sponsor-category">
          <h3 className="sponsor-category-title gold-title">Gold Sponsor</h3>
          <div className="sponsors-grid gold-grid">
            {goldSponsors.map((sponsor, index) => (
              <div key={index} className="sponsor-card gold-sponsor-card">
                <div className="sponsor-card-inner">
                  <div className="sponsor-front">
                    <div className="sponsor-logo-container">
                      <img src={sponsor.logo} alt={sponsor.name} className="sponsor-logo" />
                    </div>
                  </div>
                  <div className="sponsor-back">
                    <h4 className="sponsor-name">{sponsor.name}</h4>
                    <p className="sponsor-badge">{sponsor.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="sponsor-category">
          <h3 className="sponsor-category-title silver-title">Silver Sponsor</h3>
          <div className="sponsors-grid silver-grid">
            {silverSponsors.map((sponsor, index) => (
              <div key={index} className="sponsor-card silver-sponsor-card">
                <div className="sponsor-card-inner">
                  <div className="sponsor-front">
                    <div className="sponsor-logo-container">
                      <img src={sponsor.logo} alt={sponsor.name} className="sponsor-logo" />
                    </div>
                  </div>
                  <div className="sponsor-back">
                    <h4 className="sponsor-name">{sponsor.name}</h4>
                    <p className="sponsor-badge">{sponsor.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sponsors;