import React from 'react';

const Gallery = () => {
  return (
    <section id="gallery" className="carousel-section">
      <h2 className="section-title">Event Gallery</h2>
      <div className="carousel-container-wide">
        <div className="carousel-item">
          <img src="./images/gallery/gallery-1.jpg" alt="Winners Showcase" />
        </div>
        <div className="carousel-item">
          <img src="./images/gallery/gallery-2.jpg" alt="Security Workshop" />
        </div>
        <div className="carousel-item">
          <img src="./images/gallery/gallery-3.jpg" alt="Hacking Demo" />
        </div>
        <div className="carousel-item">
          <img src="./images/gallery/gallery-4.jpg" alt="CTF Challenge" />
        </div>
        <div className="carousel-item">
          <img src="./images/gallery/gallery-5.jpg" alt="Networking Session" />
        </div>
        <div className="carousel-item">
          <img src="./images/gallery/gallery-6.jpg" alt="Bug Bounty Hunt" />
        </div>
        <div className="carousel-item">
          <img src="./images/gallery/gallery-7.jpg" alt="Cyber Hunt" />
        </div>
        <div className="carousel-item">
          <img src="./images/gallery/gallery-8.jpg" alt="Game of Threats" />
        </div>
        <div className="carousel-item">
          <img src="./images/gallery/gallery-9.jpg" alt="Docker Seminar" />
        </div>
        <div className="carousel-item">
          <img src="./images/gallery/gallery-10.jpg" alt="Idea Presentation" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;