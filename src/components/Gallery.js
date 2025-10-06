import React from 'react';

const Gallery = () => {
  return (
    <section className="carousel-section">
      <h2 className="section-title">Event Gallery</h2>
      <div className="carousel-container">
        <div className="carousel-item">🏆<br/>Winners<br/>Showcase</div>
        <div className="carousel-item">🔐<br/>Security<br/>Workshop</div>
        <div className="carousel-item">💻<br/>Hacking<br/>Demo</div>
        <div className="carousel-item">🎯<br/>CTF<br/>Challenge</div>
        <div className="carousel-item">🤝<br/>Networking<br/>Session</div>
      </div>
    </section>
  );
};

export default Gallery;