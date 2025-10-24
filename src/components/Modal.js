import React from 'react';

const Modal = ({ show, onClose, type, eventType }) => {
  const eventDetails = {
    'opening': {
      type: 'details',
      title: 'Inauguration Ceremony',
      time: '9:30 AM - 10:00 AM',
      details: 'The grand opening of VigilantX 2025 featured keynote speeches from industry leaders, live demonstrations of cutting-edge cybersecurity tools, and the official launch of our three-day cybersecurity festival.',
      highlights: [
        'Inspiring keynote speeches from Faculty',
        'Official event launch ceremony'
      ],
      images: [
        './images/inauguration-1.jpg',
        './images/inauguration-2.jpg',
        './images/inauguration-3.jpg'
      ],
      driveLink: 'https://drive.google.com/drive/folders/1N4lnOEHblqjZhZGNOOMmhCxwX7dbD43d'
    },
    'valedictory': {
      type: 'details',
      title: 'Valedictory & Prize Distribution',
      time: '4:00 PM - 5:00 PM',
      details: 'The grand finale of VigilantX 2025! Prize distribution ceremony, recognition of outstanding participants, and celebration of all achievements throughout the event.',
      highlights: [
        'Prize distribution to all winners',
        'Recognition of outstanding participants',
        'Certificate distribution ceremony',
        'Celebration of achievements'
      ],
      images: [
        './images/valedictory-1.jpg',
        './images/valedictory-2.jpg',
        './images/valedictory-3.jpg'
      ],
      driveLink: 'https://drive.google.com/drive/folders/1HoYmAxAwGbdyIYOdLbW7Zze2er936dQ4'
    },
    'non-cyber-ctf': {
      title: '🧩 Flag-X CTF',
      image: './images/non-cyber-ctf.png',
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
      <h4>📋 Event Highlights:</h4>
      <ul style="text-align: left; margin: 20px 0;">
      <li>👥 Teams of 2–3 competed fiercely</li>
      <li>⚡ Jeopardy-style format kept everyone engaged</li>
      <li>🏆 Exciting leaderboard battles</li>
      </ul>
      <h4>⏰ Schedule:</h4>
      <p>📅 October 22, 2025<br/>🕙 10:00 AM - 4:30 PM<br/>📍E 403, E 430, P 401 & 402</p><br/>
      <h4>🏆 Prize Distribution:</h4>
      <p>💰 Total Prize Pool: ₹4,000<br/>🥇 Winners announced and celebrated!</p><br/>
      
      <h4>👥 Student Coordinators:</h4>
      <p>🎯 Raghava - 9059494181<br/>🎯 Praneeth - 9550722677</p>`,
      description: '⚡ Intense Jeopardy-style CTF competition where teams climbed the leaderboard and proved their hacking skills!',
      eventImages: [
        './images/ctf-event-1.jpg',
        './images/ctf-event-2.jpg',
        './images/ctf-event-3.jpg'
      ],
      driveLink: 'https://drive.google.com/drive/folders/1VIUBbAMiH34wLK-Y4D0FjQXp0kAfg0BK'
    },
    'seminar-docker': {
      title: '🐳 Docker/Kubernetes Seminar',
      image: './images/seminar-docker.png',
      details: `
      <h4>📚 Session Highlights:</h4>
      <ul style="text-align: left; margin: 20px 0;">
      <li>💻 Hands-on containerization demos</li>
      <li>🐳 Docker Desktop practical session</li>
      <li>☸️ Kubernetes orchestration basics</li>
      <li>🎓 Interactive Q&A</li>
      </ul>
      <h4>⏰ Schedule:</h4>
      <p>📅 22 Oct 2025<br/>🕙 10:30 AM – 12:30 PM<br/>📍 E 413</p><p>🌐 Mode: Offline with Live Demos<p/><br/>
      <h4>👥 Student Coordinators:</h4>
      <p>🎯 Yeshaswini - 9908613869<br/>🎯 Hemalatha - 9059623204<br/>🎯 Chandra Shekar - 8328202404</p>`,
      description: 'An exciting, beginner-friendly session on containerization & orchestration! Participants learned DevOps fundamentals in a simple, interactive way 🚀',
      eventImages: [
        './images/docker-event-1.jpg',
        './images/docker-event-2.jpg',
        './images/docker-event-3.jpg'
      ],
      driveLink: 'https://drive.google.com/drive/folders/1AeLaEo2MVEXZ-lfecXqsQNekO7l49H6l'
    },
    'paper-presentation': {
      title: '📝 Idea Presentation',
      image: './images/paper-presentation.png',
      details: `
      <h4>📚 Presentation Success:</h4>
      <ul style="text-align: left; margin: 20px 0;">
      <li>🤖 Innovative ideas across multiple domains</li>
      <li>👥 Brilliant team presentations</li>
      <li>🎤 Engaging Q&A sessions</li>
      <li>⚖ Expert judges evaluation</li>
      </ul>
      <h4>⏰ Schedule:</h4>
      <p>📅 22 Oct 2025<br/>🕐 1:30 PM – 3:30 PM<br/>📍E 526</p><br/>
      <h4>🏆 Prize Distribution:</h4>
      <p>💰 Total Prize Pool: ₹1,500<br/>👥 Winners: 2 Teams<br/>🥇 1st Prize: ₹1,000<br/>🥈 2nd Prize: ₹500<br/></p><br/>
      <h4>👥 Student Coordinators:</h4>
      <p>🎯 Vaishnavi - 9108134359<br/>🎯 Chakri - 7671097946</p>`,
      description: 'Teams showcased their creativity, innovation & problem-solving skills! Impactful ideas impressed the judges and winners took home exciting prizes 🏆',
      eventImages: [
        './images/paper-event-1.jpg',
        './images/paper-event-2.jpg',
        './images/paper-event-3.jpg'
      ],
      driveLink: 'https://drive.google.com/drive/folders/1Xv_xz1QeuwyCDB2k7c5welQ0z7kDGR9B'
    },
    'bug-bounty': {
      title: '🐛 Bug Bounty',
      image: './images/bug-bounty.jpg',
      details: `
      <h4>🎯 Competition Highlights:</h4>
      <ul style="text-align: left; margin: 20px 0;">
      <li>🔸 Web Exploitation challenges</li>
      <li>🔸 Penetration Testing scenarios</li>
      <li>🏆 Quality findings rewarded</li>
      </ul>
      <h4>⏰ Schedule:</h4>
      <p>📅 23 Oct 2025<br/>🕙 10:00 AM - 12:30 PM<br/>📍 E 417, E 430</p><br/>
      <h4>🏆 Prize Distribution:</h4>
      <p>💰 Total Prize Pool: ₹3,000<br/>👥 Winners: 2 Teams<br/>🥇 1st Prize: ₹2,000<br/>🥈 2nd Prize: ₹1,000<br/></p><br/>
      <h4>👥 Student Coordinators:</h4>
      <p>🎯 Sushanth - 8919652145<br/>🎯 Lalith - 8500283828</p>`,
      description: 'Ethical hackers proved their offensive security skills! Real vulnerabilities were discovered, reported, and bounties earned across severity tiers.',
      eventImages: [
        './images/bugbounty-event-1.jpg',
        './images/bugbounty-event-2.jpg',
        './images/bugbounty-event-3.JPG'
      ],
      driveLink: 'https://drive.google.com/drive/folders/1EEGrYUBdnI07wYdYqn00X9Elz0CW8QBl'
    },
    'cyber-hunt': {
      title: '🕵️ Cyber Hunt Challenge',
      image: './images/cyber-hunt.png',
      details: `
      <h4>🎯 Hunt Success:</h4>
      <ul style="text-align: left; margin: 20px 0;">
      <li>🔍 OSINT challenges solved</li>
      <li>🔐 Cryptographic puzzles decoded</li>
      <li>🌐 Web-based clues uncovered</li>
      <li>📱 Digital footprints analyzed</li>
      </ul>
      <h4>⏰ Schedule:</h4>
      <p>📅 October 23, 2025<br/>🕐 1:30 PM - 4:00 PM<br/>📍VNR VJIET</p><br/>
      <h4>🏆 Prize Distribution:</h4>
      <p>💰 Total Prize Pool: ₹1,500<br/>👥 Winners: 2 Teams<br/>🥇 1st Prize: ₹1,000<br/>🥈 2nd Prize: ₹500</p><br/>
      <h4>👥 Student Coordinators:</h4>
      <p>🎯 Prathamesh - 9381665353<br/>🎯 Chandu - 7036541434</p>`,
      description: 'A thrilling cybersecurity treasure hunt! Teams decoded clues, uncovered hidden trails, and solved cyber riddles to reach the ultimate flag 🏁💻',
      eventImages: [
        './images/cyberhunt-event-1.jpg',
        './images/cyberhunt-event-2.jpg',
        './images/cyberhunt-event-3.jpg'
      ],
      driveLink: 'https://drive.google.com/drive/folders/1GNQwAHiXv2gJ1AImY2cPLht_GBW3dDpO'
    },
    'workshop': {
      title: '🔗 Block Chain Technology Workshop',
      image: './images/workshop.jpg',
      details: `
      <h4>📚 Workshop Success:</h4>
      <ul style="text-align: left; margin: 20px 0;">
      <li>🔗 Blockchain fundamentals mastered</li>
      <li>🐳 Docker container security learned</li>
      <li>☸️ Kubernetes security implemented</li>
      <li>🔒 Smart contract auditing practiced</li>
      <li>🛠️ Hands-on lab sessions completed</li>
      </ul>
      <h4>⏰ Schedule:</h4>
      <p>📅 October 25, 2025<br/>🕘 9:30 AM - 12:30 PM<br/>📍 Workshop Hall, VNR VJIET</p>
      <h4>👥 Student Coordinators:</h4>
      <p>🎯 Yeshaswini - 9908613869<br/>🎯 Hemalatha - 9059623204<br/>🎯 Chandra Shekar - 8328202404</p>`,
      description: 'Comprehensive hands-on blockchain security and containerization workshop with expert guidance. Participants learned cutting-edge technologies and security practices.',
      eventImages: [
        './images/workshop-event-1.jpg',
        './images/workshop-event-2.jpg',
        './images/workshop-event-3.jpg'
      ],
      driveLink: 'https://drive.google.com/drive/folders/YOUR_WORKSHOP_FOLDER_ID'
    },
    'game-of-threats': {
      title: '⚔️ Game of Threats',
      image: './images/game-of-threats.jpg',
      details: `
      <h4>🎮 Game Highlights:</h4>
      <ul style="text-align: left; margin: 20px 0;">
      <li>🧠 Logic and problem-solving challenges</li>
      <li>🔐 Cyber intelligence tests</li>
      <li>⚡ Interactive competitive rounds</li>
      <li>🏆 Individual competition format</li>
      </ul>
      <h4>⏰ Schedule:</h4>
      <p>📅 October 23, 2025<br/>🕙 10:00 AM - 3:00 PM<br/>📍E 313</p><br/>
      <h4>🏆 Prize Distribution:</h4>
      <p>💰 Total Prize Pool: ₹1,500<br/>👥 Winners: 2 Participants<br/>🥇 1st Prize: ₹1,000<br/>🥈 2nd Prize: ₹500</p><br/>
      <h4>👥 Student Coordinators:</h4>
      <p>🎯 Sreshta - 9966713666<br/>🎯 Haarika - 6302764629<br/></p>`,
      description: 'Participants tested their logic, problem-solving & cyber intelligence in an exciting series of interactive rounds 🔐💥',
      eventImages: [
        './images/gameofthreats-event-1.jpg',
        './images/gameofthreats-event-2.jpg',
        './images/gameofthreats-event-3.jpg'
      ],
      driveLink: 'https://drive.google.com/drive/folders/1s_EwBwSktcAz2wdT8q8l_EWQrc3GTGjC'
    },
    'debugging-contest': {
      title: '🐞 Cyber Coding Contest',
      image: './images/debugging-contest.png',
      details: `
      <h4>💻 Contest Highlights:</h4>
      <ul style="text-align: left; margin: 20px 0;">
      <li>🐍 Python, ☕ Java, ⚡ C/C++ challenges</li>
      <li>🧩 Algorithmic puzzles solved</li>
      <li>🐛 Tricky code debugged</li>
      <li>🏆 Individual competition format</li>
      </ul>
      <h4>⏰ Schedule:</h4>
      <p>📅 October 22, 2025<br/>🕙 1:30 PM - 04:30 PM<br/>📍E 330, E 331</p><br/>
      <h4>🏆 Prize Distribution:</h4>
      <p>💰 Total Prize Pool: ₹3,000<br/>👥 Winners: 2 Participants<br/>🥇 1st Prize: ₹2,000<br/>🥈 2nd Prize: ₹1,000<br/></p><br/>
      
      <h4>👥 Student Coordinators:</h4>
      <p>🎯 Tilak - 9182567516<br/>🎯 Akshith - 9603839570</p>`,
      description: '🔸 Coders solved challenging problems, debugged tricky code & cracked algorithmic puzzles of all levels!',
      eventImages: [
        './images/coding-event-1.jpg',
        './images/coding-event-2.jpg',
        './images/coding-event-3.jpg'
      ],
      driveLink: 'https://drive.google.com/drive/folders/1YGqq5jxJEshs65SK1PBVulIVOsN4TDzu'
    }
  };

  const handleDriveLinkClick = (driveLink) => {
    window.open(driveLink, '_blank');
  };

  if (!show) return null;

  if (type === 'event' && eventType && eventDetails[eventType]) {
    const event = eventDetails[eventType];

    if (event.type === 'details') {
      return (
        <div className="modal" style={{ display: 'flex' }}>
          <div className="modal-content event-concluded-modal">
            <button className="close-btn" onClick={onClose}>&times;</button>
            <h2 style={{ color: '#0ff', marginBottom: '20px' }}>{event.title}</h2>
            <div className="event-concluded-badge">
              ✅ EVENT SUCCESSFULLY CONCLUDED
            </div>
            <div style={{ textAlign: 'left', color: '#ccc' }}>
              {event.details && <p style={{ marginBottom: '15px', lineHeight: '1.6' }}>{event.details}</p>}
              {event.highlights && (
                <>
                  <h3 style={{ color: '#0ff', marginTop: '20px' }}>Event Highlights:</h3>
                  <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
                    {event.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
            
            {event.images && (
              <div className="event-photo-gallery">
                <h3 style={{ color: '#f0f', marginTop: '30px', marginBottom: '20px', textAlign: 'center' }}>
                  📸 Event Moments
                </h3>
                <div className="event-photos-grid">
                  {event.images.map((img, index) => (
                    <div key={index} className="event-photo-card">
                      <img src={img} alt={`${event.title} - ${index + 1}`} />
                      <div className="photo-overlay">
                        <span className="photo-number">#{index + 1}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                {event.driveLink && (
                  <div className="drive-link-container">
                    <p className="drive-link-text">📷 Want to see more photos from this event?</p>
                    <button 
                      className="drive-link-button"
                      onClick={() => handleDriveLinkClick(event.driveLink)}
                    >
                      <span className="drive-icon">📁</span>
                      VIEW ALL PHOTOS ON GOOGLE DRIVE
                      <span className="arrow-icon">→</span>
                    </button>
                  </div>
                )}
              </div>
            )}
            
            <button className="cta-button" onClick={onClose} style={{ marginTop: '30px' }}>CLOSE</button>
          </div>
        </div>
      );
    }

    return (
      <div className="modal" style={{ display: 'flex' }}>
        <div className="modal-content event-concluded-modal" style={{ maxWidth: '900px' }}>
          <button className="close-btn" onClick={onClose}>&times;</button>
          <h2 style={{ color: '#0ff', marginBottom: '20px' }}>{event.title}</h2>
          
          <div className="event-concluded-badge">
            ✅ EVENT SUCCESSFULLY CONCLUDED
          </div>
          
          {event.image && (
            <div style={{ textAlign: 'center', margin: '20px 0' }}>
              <img src={event.image} alt={event.title} style={{ width: '100%', maxWidth: '400px', objectFit: 'contain', borderRadius: '15px', border: '2px solid #0ff', boxShadow: '0 0 20px rgba(0,255,255,0.3)' }} />
            </div>
          )}
          
          <div style={{ color: '#fff', lineHeight: '1.6' }} dangerouslySetInnerHTML={{ __html: event.details }} />
          <h4 style={{ color: '#f0f', margin: '20px 0 10px 0' }}>📝 Event Summary:</h4>
          <p style={{ marginBottom: '20px' }} dangerouslySetInnerHTML={{ __html: event.description }} />
          
          {event.eventImages && (
            <div className="event-photo-gallery">
              <h3 style={{ color: '#f0f', marginTop: '30px', marginBottom: '20px', textAlign: 'center' }}>
                📸 Event Moments
              </h3>
              <div className="event-photos-grid">
                {event.eventImages.map((img, index) => (
                  <div key={index} className="event-photo-card">
                    <img src={img} alt={`${event.title} - ${index + 1}`} />
                    <div className="photo-overlay">
                      <span className="photo-number">#{index + 1}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              {event.driveLink && (
                <div className="drive-link-container">
                  <p className="drive-link-text">📷 Want to see more photos from this event?</p>
                  <button 
                    className="drive-link-button"
                    onClick={() => handleDriveLinkClick(event.driveLink)}
                  >
                    <span className="drive-icon">📁</span>
                    VIEW ALL PHOTOS ON GOOGLE DRIVE
                    <span className="arrow-icon">→</span>
                  </button>
                </div>
              )}
            </div>
          )}
          
          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <button className="cta-button" onClick={onClose} style={{ background: 'linear-gradient(45deg, #0ff, #f0f)' }}>CLOSE</button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default Modal;