import React, { useEffect } from 'react';

const Timeline = () => {
  useEffect(() => {
    const timelineSection = document.querySelector('.timeline-section');
    const timelineItems = document.querySelectorAll('.timeline-item');

    const timelineObserverOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const timelineObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          
          timelineItems.forEach(item => {
            item.classList.remove('animate');
            item.style.opacity = '0';
            item.style.transform = 'translateY(50px)';
            item.style.animationPlayState = 'paused';
          });
          
          timelineItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('animate');
              item.style.animationPlayState = 'running';
            }, index * 200);
          });
        } else {
          entry.target.classList.remove('animate');
          timelineItems.forEach(item => {
            item.classList.remove('animate');
            item.style.opacity = '0';
            item.style.transform = 'translateY(50px)';
            item.style.animationPlayState = 'paused';
          });
        }
      });
    }, timelineObserverOptions);

    if (timelineSection) {
      timelineObserver.observe(timelineSection);
    }

    return () => {
      if (timelineSection) {
        timelineObserver.unobserve(timelineSection);
      }
    };
  }, []);

  return (
    <section id="timeline" className="timeline-section">
      <h2 className="section-title">Event Timeline</h2>
      <div className="timeline">
        <div className="circuit-pulse"></div>
        <div className="circuit-pulse"></div>
        <div className="circuit-pulse"></div>
        <div className="circuit-pulse"></div>

        <div className="timeline-item" style={{animationDelay: '0.2s'}}>
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3 style={{color: '#0ff', marginBottom: '15px'}}>DAY 1 - Opening Ceremony</h3>
            <p style={{color: '#f0f', fontWeight: 'bold'}}>October 22, 2025 | 9:30 AM</p>
            <p>Grand inauguration with keynote speeches from cybersecurity leaders, event briefings, and networking opportunities.</p>
          </div>
        </div>
        
        <div className="timeline-item" style={{animationDelay: '0.4s'}}>
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3 style={{color: '#0ff', marginBottom: '15px'}}>DAY 1 - Competitive Events Begin</h3>
            <p style={{color: '#f0f', fontWeight: 'bold'}}>October 22, 2025 | 10:00 AM - 4:30 PM</p>
            <p>Non-Cyber CTF challenges and Paper Presentations kick off the competition along with Seminar on Docker/Kubernetes.</p>
          </div>
        </div>
        
        <div className="timeline-item" style={{animationDelay: '0.6s'}}>
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3 style={{color: '#0ff', marginBottom: '15px'}}>DAY 2 - Hacking & Security</h3>
            <p style={{color: '#f0f', fontWeight: 'bold'}}>October 23, 2025 | 10:00 AM - 4:30 PM</p>
            <p>Hacking Tools Expo, Cyber Hunt, Bug Bounty & Red Teaming competitions with live demonstrations and expert guidance.</p>
          </div>
        </div>
        
        <div className="timeline-item" style={{animationDelay: '0.8s'}}>
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3 style={{color: '#0ff', marginBottom: '15px'}}>DAY 3 - Workshops & Finals</h3>
            <p style={{color: '#f0f', fontWeight: 'bold'}}>October 24, 2025 | 9:30 AM - 3:30 PM</p>
            <p>Blockchain workshops, Game of Threats, Cyber Coding contests, and grand finale ceremony.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;