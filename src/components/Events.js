import React from 'react';

const Events = ({ onShowEventDetails }) => {
  return (
    <section id="events" className="section">
      <h2 className="section-title">Event Schedule</h2>
      <div className="events-grid">
        <div className="event-card special-event" onClick={() => onShowEventDetails('opening')}>
          <span className="event-day">Day 1</span>
          <h3 className="event-title">Inauguration Ceremony</h3>
          <p className="event-time">9:30 AM - 10:30 AM</p>
          <p className="event-description">Keynote speeches from industry leaders and event inauguration with live demonstrations</p>
          <button className="event-register">View Details</button>
        </div>
        
        <div className="event-card" onClick={() => onShowEventDetails('non-cyber-ctf')}>
          <span className="event-day">Day 1</span>
          <h3 className="event-title">CTF</h3>
          <p className="event-time">10:00 AM - 4:30 PM</p>
          <p className="event-prize">Prize Pool: ₹6,000</p>
          <p className="event-description">Brain-teasing logic puzzles, mathematical challenges, and creative problem-solving riddles</p>
          <button className="event-register">Register</button>
        </div>
        <div className="event-card" onClick={() => onShowEventDetails('seminar-docker')}>
          <span className="event-day">Day 1</span>
          <h3 className="event-title">Seminar (Docker/Kubernetes)</h3>
          <p className="event-time">10:30 AM - 1:30 PM</p>
          <p className="event-description">A seminar exploring the fundamentals and practical applications of Docker and Kubernetes for containerization and orchestration.</p>
          <button className="event-register">Register</button>
        </div>
        
        <div className="event-card" onClick={() => onShowEventDetails('paper-presentation')}>
          <span className="event-day">Day 1</span>
          <h3 className="event-title">Idea Presentation</h3>
          <p className="event-time">1:30 PM - 3:30 PM</p>
          <p className="event-prize">Prize Pool: ₹3,000</p>
          <p className="event-description">Present your innovative research on cutting-edge cybersecurity topics and emerging threats</p>
          <button className="event-register">Register</button>
        </div>
        
        <div className="event-card" onClick={() => onShowEventDetails('hacking-expo')}>
          <span className="event-day">Day 2</span>
          <h3 className="event-title">Hacking Tools Expo</h3>
          <p className="event-time">10:00 AM - 4:30 PM</p>
          <p className="event-description">Live demonstrations of advanced security tools, penetration testing frameworks, and exploit techniques</p>
          <button className="event-register">Register</button>
        </div>

        <div className="event-card" onClick={() => onShowEventDetails('bug-bounty')}>
          <span className="event-day">Day 2</span>
          <h3 className="event-title">Bug Bounty</h3>
          <p className="event-time">10:00 AM - 12:30 PM</p>
          <p className="event-prize">Prize Pool: ₹4,500</p>
          <p className="event-description">Discover vulnerabilities, exploit systems ethically, and demonstrate advanced red team methodologies</p>
          <button className="event-register">Register</button>
        </div>

        <div className="event-card" onClick={() => onShowEventDetails('cyber-hunt')}>
          <span className="event-day">Day 2</span>
          <h3 className="event-title">Cyber Hunt</h3>
          <p className="event-time">2:00 PM - 4:30 PM</p>
          <p className="event-prize">Prize Pool: ₹2,500</p>
          <p className="event-description">Digital treasure hunt with cryptographic puzzles, OSINT challenges, and cybersecurity clues</p>
          <button className="event-register">Register</button>
        </div>
        
        
        
        <div className="event-card" onClick={() => onShowEventDetails('workshop')}>
          <span className="event-day">Day 3</span>
          <h3 className="event-title">Workshop - Block Chain Technology</h3>
          <p className="event-time">9:30 AM - 12:30 PM</p>
          <p className="event-description">Comprehensive hands-on blockchain security and containerization workshop with expert guidance</p>
          <button className="event-register">Register</button>
        </div>
        
        <div className="event-card" onClick={() => onShowEventDetails('game-of-threats')}>
          <span className="event-day">Day 3</span>
          <h3 className="event-title">Game of Threats</h3>
          <p className="event-time">10:00 AM - 3:00 PM</p>
          <p className="event-prize">Prize Pool: ₹2,500</p>
          <p className="event-description">Strategic cybersecurity simulation game with real-world threat scenarios and defense strategies</p>
          <button className="event-register">Register</button>
        </div>
        
        <div className="event-card" onClick={() => onShowEventDetails('debugging-contest')}>
          <span className="event-day">Day 3</span>
          <h3 className="event-title">Cyber Coding  Contest</h3>
          <p className="event-time">10:30 AM - 12:30 PM</p>
          <p className="event-prize">Prize Pool: ₹4,500</p>
          <p className="event-description">Identify and fix critical bugs in security-sensitive code with time-pressure challenges</p>
          <button className="event-register">Register</button>
        </div>
        
        <div className="event-card valedictory-card" onClick={() => onShowEventDetails('valedictory')}>
          <span className="event-day">Day 3</span>
          <h3 className="event-title">Valedictory Ceremony</h3>
          <p className="event-time">2:00 PM - 3:30 PM</p>
          <p className="event-description">Grand finale with prize distribution, recognition ceremony, and celebration of achievements</p>
          <button className="event-register">View Details</button>
        </div>
      </div>
    </section>
  );
};

export default Events;