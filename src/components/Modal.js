import React from 'react';

const Modal = ({ show, onClose, type, eventType, onRegister }) => {
  const eventDetails = {
    'opening': {
      type: 'details',
      title: 'Inauguration Ceremony',
      time: '9:30 AM - 10:30 AM',
      details: 'Join us for the grand opening of VigilantX 2025! Experience keynote speeches from industry leaders, live demonstrations of cutting-edge cybersecurity tools, and the official launch of our three-day cybersecurity festival.',
      rules: [
        'Open to all participants',
        'Network with industry experts',
        'Get your event schedule and materials'
      ]
    },
    'valedictory': {
      type: 'details',
      title: 'Valedictory & Prize Distribution',
      time: '2:00 PM - 3:30 PM',
      details: 'The grand finale of VigilantX 2025! Join us for the prize distribution ceremony, recognition of outstanding participants, and celebration of all achievements throughout the event.',
      rules: [
        'All participants must attend',
        'Winners will be announced',
        'Certificate distribution'
      ]
    },
    'non-cyber-ctf': {
      title: '🧩 Flag-X CTF ',
      image: './images/non-cyber-ctf.png',
      hasRegistration: true,
      registrationUrl: 'https://forms.gle/dNX7HCj6HiFGSAFj7',
      details: `
      <h4>🎯 Challenge Categories:</h4>
      <ul style="text-align: left; margin: 20px 0;">
      <li>🔐 Cryptography</li>
      <li>🛡️ Web Security</li>
      <li>🔎 Forensics</li>
      <li>🖼️ Steganography</li>
      <li>🔧 Reverse Engineering</li>
      <li>🐛 Binary exploits</li>
      </ul>
      <h4>🔐 Rules:</h4>
      <ul style="text-align: left; margin: 20px 0;">
      <li>👥 Teams of 2–3 | Inter-college Teams Allowed</li>
      <li>❌ No DoS / Brute Force / External Help</li>
      <li>⚖ Organizer's decision is final</li>
      </ul>
      <h4>⏰ Schedule:</h4>
      <p>📅 October 22, 2025<br/>🕙 10:00 AM - 4:30 PM<br/>📍VNR VJIET Campus</p><br/>
      <h4>🏆 Prize Pool:</h4>
      <p>💰 Total Prize Pool Upto ₹4,000<br/></p><br/>
      
      <h4>👥 Student Coordinators:</h4>
      <p>🎯 Raghava - 9059494181<br/>🎯 Praneeth - 9550722677</p>`,
      description: '⚡ Jeopardy-style format  | Climb the leaderboard & prove your hacking skills!'
    },
    'seminar-docker': {
      title: '🐳 Docker/Kubernetes Seminar',
      hasRegistration: false,
      comingSoon: false,
      details: `
      <h4>📚 Instructions:</h4>
      <ul style="text-align: left; margin: 20px 0;">
      <li>💻 Bring your laptop (if practical)</li>
      <li>🪪 Carry your college ID card</li>
      <li>🐳 Install Docker Desktop (if possible)</li>
      <li>⏰ Be seated 10 mins before the seminar starts</li>
      </ul>
      <h4>⏰ Schedule:</h4>
      <p>📅 22 Oct 2025<br/>🕙 10:30 AM – 1:30 PM<br/>📍 College Auditorium</p><p>🌐 Mode: Offline (with Live Demo)<p/><br/>
      <h4>👥 Student Coordinators:</h4>
      <p>🎯 Yeshaswini - 9908613869<br/>🎯 Hemalatha - 9059623204<br/>🎯 Chandra Shekar - 8328202404</p>`,
      description: 'Step into the world of containerization & orchestration with an exciting, beginner-friendly session! 🚀<br/>Whether you are new to DevOps or have some experience, this seminar will help you grasp the fundamentals in a simple, interactive way '
    },
    'paper-presentation': {
      title: '📝 Idea Presentation',
      image: './images/paper-presentation.png',
      hasRegistration: true,
      registrationUrl: 'https://forms.gle/121g5busnEoydJ5w5',
      details: `
      <h4>📚 Presentation Topics:</h4>
      <ul style="text-align: left; margin: 20px 0;">
      <li>🤖 Any domain of your choice</li>
      </ul>
      <h4>🔐 Rules:</h4>
      <ul style="text-align: left; margin: 20px 0;">
      <li>Teams of up to 3 members. Inter-college teams are welcome! 👥</li>
      <li>Bring your PPT/PDF & laptop if needed 💻</li>
      <li>5–7 mins presentation + Q&A 🗣</li>
      <li>Original ideas only — no plagiarism 🚫</li>
      <li>Judges' decision is final ⚖</li>
      </ul>
      <h4>⏰ Schedule:</h4>
      <p>📅 22 Oct 2025<br/>🕐 10:00 AM – 1:00 PM<br/>📍VNR VJIET</p><br/>
      <h4>🏆 Prize Pool:</h4>
      <p>💰 Total Prize Pool: ₹1,500<br/>👥 Winners - 2 Teams<br/>🥇 1st Prize: ₹1,000<br/>🥈 2nd Prize: ₹500<br/></p><br/>
      <h4>👥 Student Coordinators:</h4>
      <p>🎯 Vaishnavi - 9108134359<br/>🎯 Chakri - 7671097946</p>`,
      description: 'Showcase your creativity, innovation & problem-solving skills! Form your team, present impactful ideas, and impress the judges to win exciting prizes 🏆'
    },
    'bug-bounty': {
      title: '🐛 Bug Bounty',
      image: './images/bug-bounty.jpg',
      hasRegistration: true,
      registrationUrl: 'https://forms.gle/d2yYRPP8Eh3SkyXt6',
      details: `
      <h4>🎯 Target Applications:</h4>
      <ul style="text-align: left; margin: 20px 0;">
      <li>🔸Web Exploitation</li>
      <li>🔸Penetration Testing</li>
      <li>🔸Proof-of-Concept Reporting</li>
      </ul>
      <h4>🔐 Rules:</h4>
      <ul style="text-align: left; margin: 20px 0;">
      <li>Teams of 2–3 | Inter-college Teams Allowed 👥</li>
      <li>Only provided targets are in-scope ✅</li>
      <li>No attacks on external infrastructure ❌</li>
      <li>Quality findings and early submissions score higher 🧩</li>
      <li>Organizer's decision is final ⚖</li>
      </ul>
      <h4>⏰ Schedule:</h4>
      <p>📅 23 Oct 2025<br/>🕙 10:00 AM - 12:30 PM<br/>📍 Cyber Lab, VNR VJIET</p><br/>
      <h4>🏆 Prize Pool:</h4>
      <p>💰 Total Prize Pool: ₹3,000<br/>👥 Winners - 2 Teams<br/>🥇 1st Prize: ₹2,000<br/>🥈 2nd Prize: ₹1,000<br/></p><br/>
      <h4>👥 Student Coordinators:</h4>
      <p>🎯 Sushanth - 8919652145<br/>🎯 Lalith - 8500283828</p>`,
      description: 'Step into the world of ethical hacking and prove your offensive security skills!Hunt for real vulnerabilities, report them, and earn bounties across severity tiers.'
    },
    'cyber-hunt': {
      title: '🕵️ Cyber Hunt Challenge',
      image: './images/cyber-hunt.png',
      hasRegistration: true,
      registrationUrl: 'https://forms.gle/ZppFELgyLMsczfi49',
      details: `
      <h4>🎯 Hunt Categories:</h4>
      <ul style="text-align: left; margin: 20px 0;">
      <li>🔍 OSINT (Open Source Intelligence)</li>
      <li>🔐 Cryptographic Puzzles</li>
      <li>🌐 Web-based Clues</li>
      <li>📱 Digital Footprint Analysis</li>
      </ul>
      <h4>⏰ Schedule:</h4>
      <p>📅 October 23, 2025<br/>🕐 1:30 PM - 4:00 PM<br/>📍VNR VJIET</p><br/>
      <h4>🏆 Prize Pool:</h4>
      <p>💰 Total Prize Pool: ₹1,500<br/>👥 Winners - 2 Teams<br/>🥇 1st Prize: ₹1,000<br/>🥈 2nd Prize: ₹500</p><br/>
      <h4>👥 Student Coordinators:</h4>
      <p>🎯 Prathamesh - 9381665353<br/>🎯 Chandu - 7036541434</p>`,
      description: 'Embark on a treasure hunt with cryptographic puzzles, OSINT challenges, and cybersecurity clues scattered across the digital realm.'
    },
    'workshop': {
      title: '🔗 Block Chain Technology Workshop',
      image: './images/workshop.jpg',
      hasRegistration: false,
      comingSoon: true,
      details: `
      <h4>📚 Workshop Modules:</h4>
      <ul style="text-align: left; margin: 20px 0;">
      <li>🔗 Blockchain fundamentals and security</li>
      <li>🐳 Docker container security</li>
      <li>☸️ Kubernetes security best practices</li>
      <li>🔒 Smart contract auditing</li>
      <li>🛠️ Practical lab sessions</li>
      </ul>
      <h4>⏰ Schedule:</h4>
      <p>📅 October 25, 2025<br/>🕘 9:30 AM - 12:30 PM<br/>📍 Workshop Hall, VNR VJIET</p>
      <h4>👥 Student Coordinators:</h4>
      <p>🎯 Yeshaswini - 9908613869<br/>🎯 Hemalatha - 9059623204<br/>🎯 Chandra Shekar - 8328202404</p>`,
      description: 'Comprehensive hands-on blockchain security and containerization workshop with expert guidance. Learn cutting-edge technologies and security practices.'
    },
    'game-of-threats': {
      title: '⚔️ Game of Threats',
      image: './images/game-of-threats.jpg',
      hasRegistration: true,
      registrationUrl: 'https://forms.gle/w6N8Aefat3P7puJMA',
      details: `
      <h4>📚 Instructions:</h4>
      <ul style="text-align: left; margin: 20px 0;">
      <li>Individuals Only. No teams.</li>
      <li>🪪Bring your student ID card</li>
      <li>💻Laptops will be provided </li>
      <li>⏳Stay alert & manage your time wisely</li>
      </ul>
      <h4>⏰ Schedule:</h4>
      <p>📅 October 23, 2025<br/>🕙 10:00 AM - 3:00 PM<br/>📍VNR VJIET</p><br/>
      <h4>🏆 Prize Pool:</h4>
      <p>💰 Total Prize Pool: ₹1,500<br/>👥 Winners - 2 Teams<br/>🥇 1st Prize: ₹1,000<br/>🥈 2nd Prize: ₹500</p><br/>
      <h4>👥 Student Coordinators:</h4>
      <p>🎯 Sreshta - 9966713666<br/>🎯 Haarika - 6302764629<br/></p>`,
      description: 'Test your logic, problem-solving & cyber intelligence in an exciting series of interactive rounds 🔐💥'
    },
    'debugging-contest': {
      title: '🐞 Cyber Coding Contest',
      image: './images/debugging-contest.png',
      hasRegistration: true,
      registrationUrl: 'https://forms.gle/Kw8xbAWyByEXLz3f9',
      details: `
      <h4>💻 Programming Languages:</h4>
      <ul style="text-align: left; margin: 20px 0;">
      <li>🐍 Python</li>
      <li>☕ Java</li>
      <li>⚡ C/C++</li>
      </ul>
      <h4>⚠ Rules:</h4>
      <ul style="text-align: left; margin: 20px 0;">
      <li>💻 Bring your own laptop & essentials</li>
      <li>🚫 Strict no plagiarism</li>
      <li>⚖ Judge's decision is final</li>
      </ul>
      <h4>⏰ Schedule:</h4>
      <p>📅 October 22, 2025<br/>🕙 1:30 PM - 04:30 PM<br/>📍VNR VJIET</p><br/>
      <h4>🏆 Prize Pool:</h4>
      <p>💰 Total Prize Pool: ₹3,000<br/>👥 Winners - 2 Teams<br/>🥇 1st Prize: ₹2,000<br/>🥈 2nd Prize: ₹1,000<br/></p><br/>
      
      <h4>👥 Student Coordinators:</h4>
      <p>🎯 Tilak - 9182567516<br/>🎯 Akshith - 9603839570</p>`,
      description: '🔸 Solve coding problems, debug tricky code & crack algorithmic puzzles of all levels!'
    }
  };

  const handleEventRegistration = () => {
    if (eventType && eventDetails[eventType] && eventDetails[eventType].registrationUrl) {
      window.open(eventDetails[eventType].registrationUrl, '_blank');
    }
  };

  if (!show) return null;

  if (type === 'registration') {
    return (
      <div className="modal" style={{ display: 'flex' }}>
        <div className="modal-content">
          <button className="close-btn" onClick={onClose}>&times;</button>
          <h2 style={{ color: '#0ff', marginBottom: '20px' }}>🎯 Complete Registration</h2>
          <p style={{ marginBottom: '30px' }}>Scan the QR code to complete payment and secure your spot!</p>
          <div className="qr-container">
            <div style={{ width: '200px', height: '200px', background: '#000', color: '#0ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', textAlign: 'center' }}>
              QR CODE<br />PAYMENT<br />GATEWAY
            </div>
          </div>
          <div className="payment-info">
            <p style={{ color: '#f0f', fontSize: '1.2rem', marginBottom: '10px' }}>💰 Registration Fees:</p>
            <p className="price">🎓 VNR Students: ₹100</p>
            <p className="price">🏫 Other Colleges: ₹150</p>
            <p style={{ marginTop: '15px', color: '#0ff', fontSize: '0.9rem' }}>* Includes access to all events, workshops, and refreshments</p>
          </div>
          <button onClick={onClose} className="cta-button">CLOSE</button>
        </div>
      </div>
    );
  }

  if (type === 'event' && eventType && eventDetails[eventType]) {
    const event = eventDetails[eventType];

    if (event.type === 'details') {
      return (
        <div className="modal" style={{ display: 'flex' }}>
          <div className="modal-content">
            <button className="close-btn" onClick={onClose}>&times;</button>
            <h2 style={{ color: '#0ff', marginBottom: '20px' }}>{event.title}</h2>
            <div style={{ textAlign: 'left', color: '#ccc' }}>
              {event.details && <p style={{ marginBottom: '15px', lineHeight: '1.6' }}>{event.details}</p>}
              {event.rules && (
                <>
                  <h3 style={{ color: '#0ff', marginTop: '20px' }}>Rules & Guidelines:</h3>
                  <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
                    {event.rules.map((rule, index) => (
                      <li key={index}>{rule}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
            <button className="cta-button" onClick={onClose} style={{ marginTop: '30px' }}>CLOSE</button>
          </div>
        </div>
      );
    }

    if (event.comingSoon) {
      return (
        <div className="modal" style={{ display: 'flex' }}>
          <div className="modal-content">
            <button className="close-btn" onClick={onClose}>&times;</button>
            <div className="coming-soon-container">
              <div className="coming-soon-icon">🚀</div>
              <h2 className="coming-soon-title">{event.title}</h2>
              <div className="coming-soon-message">
                <p className="pulse-text">Registrations Opening Soon!</p>
                <p className="sub-message">We're preparing something amazing for you.</p>
                <p className="stay-tuned">Stay tuned for the registration link.</p>
              </div>
              <div className="countdown-badge">
                <span className="badge-text">Get Ready</span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="modal" style={{ display: 'flex' }}>
        <div className="modal-content" style={{ maxWidth: '800px' }}>
          <button className="close-btn" onClick={onClose}>&times;</button>
          <h2 style={{ color: '#0ff', marginBottom: '20px' }}>{event.title}</h2>
          
          {event.image && (
            <div style={{ textAlign: 'center', margin: '20px 0' }}>
              <img src={event.image} alt={event.title} style={{ width: '100%', maxWidth: '400px', objectFit: 'contain', borderRadius: '15px', border: '2px solid #0ff', boxShadow: '0 0 20px rgba(0,255,255,0.3)' }} />
            </div>
          )}
          
          <div style={{ color: '#fff', lineHeight: '1.6' }} dangerouslySetInnerHTML={{ __html: event.details }} />
          <h4 style={{ color: '#f0f', margin: '20px 0 10px 0' }}>📝 Event Description:</h4>
          <p style={{ marginBottom: '20px' }} dangerouslySetInnerHTML={{ __html: event.description }} />
          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            {event.hasRegistration && (
              <button className="cta-button" onClick={handleEventRegistration} style={{ marginTop: '20px' }}>REGISTER FOR EVENT</button>
            )}
            <button className="cta-button" onClick={onClose} style={{ marginLeft: '10px', background: 'linear-gradient(45deg, #666, #999)' }}>CLOSE</button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default Modal;