import React from 'react';

const About = () => {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About VJ Garuda Vigilance</h2>
      <div className="about-content">
        <p>VJ Garuda Vigilance stands as the premier cybersecurity club of VNR VJIET, embodying our commitment to fostering a robust culture of digital security awareness and ethical hacking practices. Our mission extends beyond traditional boundaries as we train the next generation of cybersecurity professionals through immersive hands-on workshops, competitive CTF challenges, and real-world security simulations.</p>
        <br />
        <p>Founded with the vision of creating cyber-aware professionals, our club has evolved into a thriving community of passionate security enthusiasts, researchers, and future industry leaders. </p>
      </div>
      <div className="cyber-features">
        <div className="feature-box">
          <div className="feature-icon">🏆</div>
          <h3>Prize Pool ₹30,000+</h3>
          <p>Compete for exciting cash prizes, premium security tools, and exclusive internship opportunities across multiple challenging events</p>
        </div>
        <div className="feature-box">
          <div className="feature-icon">🔐</div>
          <h3>Real-World Skills</h3>
          <p>Gain practical experience in penetration testing, digital forensics, incident response, and advanced security methodologies</p>
        </div>
        <div className="feature-box">
          <div className="feature-icon">🌐</div>
          <h3>Network & Connect</h3>
          <p>Join an elite community of passionate security enthusiasts, industry mentors, and future cybersecurity leaders worldwide</p>
        </div>
      </div>
    </section>
  );
};

export default About;