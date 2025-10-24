import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [terminalIndex, setTerminalIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const terminalCommands = [
    { q: "$ cat /var/log/vigilantx/status.txt", a: "✅ EVENT STATUS: SUCCESSFULLY CONCLUDED\n🎉 VigilantX 2025 was a grand success!" },
    { q: "$ grep -i 'participants' event_stats.log", a: "👥 Total Participants: 200+\n🌟 Amazing turnout from across the region!" },
    { q: "$ cat /achievements/winners.txt", a: "🏆 Winners crowned across all competitions\n💰 Prize Pool of ₹20,000+ distributed\n🎯 CTF, Bug Bounty, and seminars completed" },
    { q: "$ tail -f /feedback/testimonials.log", a: "💬 'Best cybersecurity event I've attended!'\n⭐ 'Amazing learning experience'\n🔥 'Can't wait for VigilantX 2026!'" },
    { q: "$ ls -la /events/completed/", a: "✓ CTF_Competition [CONCLUDED]\n✓ Bug_Bounty_Hunt [CONCLUDED]\n✓ Security_Workshops [CONCLUDED]\n✓ Cyber_Hunt_2025 [CONCLUDED]\n✓ Game_of_Threats [CONCLUDED]" },
    { q: "$ echo $EVENT_HIGHLIGHTS", a: "🎤 Expert sessions from industry leaders\n🤝 Networking opportunities galore\n📚 Hands-on learning workshops\n⚡ Intense competition & collaboration" },
    { q: "$ cat /gratitude/thankyou.txt", a: "🙏 Thanks to all participants, sponsors & volunteers\n💙 Your support made VigilantX 2025 unforgettable\n🚀 See you at VigilantX 2026!" },
    { q: "$ date && uptime", a: "📅 October 23, 2025 | Event Successfully Concluded\n✨ Two days of cybersecurity excellence completed!" }
  ];

  useEffect(() => {
    const typeCommand = () => {
      const currentCommand = terminalCommands[terminalIndex].q;
      setDisplayedText('');
      setShowAnswer(false);
      setIsTyping(true);
      
      let charIndex = 0;
      const typeInterval = setInterval(() => {
        if (charIndex < currentCommand.length) {
          setDisplayedText(currentCommand.slice(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);
          setTimeout(() => {
            setShowAnswer(true);
            setTimeout(() => {
              setTerminalIndex((prev) => (prev + 1) % terminalCommands.length);
            }, 3500);
          }, 1000);
        }
      }, 100);
    };

    typeCommand();
  }, [terminalIndex]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="matrix-bg"></div>
      <div className="title-with-logo">
        <div className="main-event-logo">
          <img src="./images/vigilantx-logo.png" alt="VigilantX Main Logo" />
        </div>
        <h1 className="glitch-title">VigilantX 2025</h1>
      </div>
      
      {/* Success Banner */}
      <div className="success-banner">
        <div className="success-content">
          <span className="success-icon">🎉</span>
          <h2 className="success-title">EVENT SUCCESSFULLY CONCLUDED!</h2>
          <span className="success-icon">🎉</span>
        </div>
        <p className="success-subtitle">Thank you for making VigilantX 2025 a grand success!</p>
      </div>

      <p className="event-date">✨ Held on October 22-23, 2025 | A Memorable Experience ✨</p>
      
      <div className="hero-content">
        <div className="terminal">
          <div className="terminal-header">
            <div className="terminal-btn red"></div>
            <div className="terminal-btn yellow"></div>
            <div className="terminal-btn green"></div>
          </div>
          <div className="terminal-content">
            <div style={{ color: '#0ff', display: 'flex', alignItems: 'center' }}>
              {displayedText}
              {(isTyping || !showAnswer) && (
                <span style={{ 
                  borderRight: '2px solid #0ff', 
                  marginLeft: '2px',
                  opacity: showCursor ? 1 : 0,
                  transition: 'opacity 0.1s'
                }}>
                  &nbsp;
                </span>
              )}
            </div>
            {showAnswer && (
              <div style={{ color: '#fff', marginTop: '10px', whiteSpace: 'pre-wrap' }}>
                {terminalCommands[terminalIndex].a}
              </div>
            )}
          </div>
        </div>
        
        <div className="center-button">
          <button className="cta-button gallery-button" onClick={() => {
            const gallerySection = document.getElementById('gallery');
            if (gallerySection) {
              gallerySection.scrollIntoView({ behavior: 'smooth' });
            }
          }}>VIEW GALLERY</button>
          <button className="cta-button events-button" onClick={() => {
            const eventsSection = document.getElementById('events');
            if (eventsSection) {
              eventsSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}>EVENT HIGHLIGHTS</button>
        </div>
        
        <div className="hero-image">
          <div className="rotating-image scroll-controlled">
            <img src="./images/Modified_Final_Poster.jpg" alt="VigilantX Logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;