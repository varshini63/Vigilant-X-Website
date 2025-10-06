import React, { useEffect, useState } from 'react';

const Hero = ({ onRegisterClick }) => {
  const [countdown, setCountdown] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  const [terminalIndex, setTerminalIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const terminalCommands = [
    { q: "$ whoami", a: "root@vigilantx-2025" },
    { q: "$ cat /etc/vigilantx/mission.txt", a: "🎯 Securing the digital frontier, one byte at a time.\n🔐 Training tomorrow's cybersecurity warriors today." },
    { q: "$ ls -la /events/", a: "drwxr-xr-x CTF_Competition\ndrwxr-xr-x Bug_Bounty_Hunt\ndrwxr-xr-x Security_Workshops\ndrwxr-xr-x Cyber_Hunt_2025\ndrwxr-xr-x Game_of_Threats" },
    { q: "$ nmap -sV vigilantx.vnrvjiet.in", a: "PORT     STATE    SERVICE     VERSION\n22/tcp   open     ssh         OpenSSH 8.2\n80/tcp   open     http        nginx 1.18\n443/tcp  open     https       nginx 1.18\n1337/tcp open     elite       VigilantX-Portal" },
    { q: "$ echo $PRIZE_POOL", a: "💰 Total Prize Pool: ₹30,000+\n🏆 Biggest cyber event in the region!" },
    { q: "$ date && uptime", a: "📅 October 17, 2025 | National Cyber Security Awareness Month\n⚡ System uptime: 365 days of vigilance" },
    { q: "$ ps aux | grep security", a: "vigilant  1337  0.1  cybersec  /usr/bin/defend-the-realm\ngaruda    2025  0.2  ethical   /opt/hack-for-good\nguardian  3000  0.3  monitor   /bin/watch-threats" },
    { q: "$ cat /proc/cpuinfo | grep 'model name'", a: "model name: VJ Garuda Vigilance Cyber Processor v2025\nFeatures: ethical_hacking penetration_testing ctf_mastery" }
  ];

  // Countdown timer logic
  useEffect(() => {
    const targetDate = new Date('2025-10-22T09:30:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const timeLeft = targetDate - now;

      if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        setCountdown({
          days: String(days).padStart(2, '0'),
          hours: String(hours).padStart(2, '0'),
          minutes: String(minutes).padStart(2, '0'),
          seconds: String(seconds).padStart(2, '0')
        });
      } else {
        // Event has started or passed
        setCountdown({
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00'
        });
      }
    };

    // Update immediately
    updateCountdown();

    // Update every second
    const countdownInterval = setInterval(updateCountdown, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

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
            }, 3000);
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
      <h1 className="glitch-title">VigilantX 2025</h1>
      <div className="hero-top-section">
        <div className="countdown-container">
          <div className="countdown-timer">
            <div className="countdown-unit">
              <span className="countdown-number">{countdown.days}</span>
              <span className="countdown-label">Days</span>
            </div>
            <div className="countdown-separator">:</div>
            <div className="countdown-unit">
              <span className="countdown-number">{countdown.hours}</span>
              <span className="countdown-label">Hours</span>
            </div>
            <div className="countdown-separator">:</div>
            <div className="countdown-unit">
              <span className="countdown-number">{countdown.minutes}</span>
              <span className="countdown-label">Minutes</span>
            </div>
            <div className="countdown-separator">:</div>
            <div className="countdown-unit">
              <span className="countdown-number">{countdown.seconds}</span>
              <span className="countdown-label">Seconds</span>
            </div>
          </div>
        </div>
      </div>
      <p className="event-date">🗓️ Events Start on October 22nd, 2025</p>
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
          <button className="cta-button" onClick={onRegisterClick}>REGISTER FOR PASS</button>
        </div>
        <div className="hero-image">
          <div className="rotating-image scroll-controlled">
            <img src="./images/main.jpg" alt="VigilantX Logo" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;