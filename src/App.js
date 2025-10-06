import React, { useState } from 'react';
import IntroScreen from './components/IntroScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyParticipate from './components/WhyParticipate';
import Timeline from './components/Timeline';
import Events from './components/Events';
import Coordinators from './components/Coordinators';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Modal from './components/Modal';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Main pass registration link
  const handleRegisterPass = () => {
    window.open('https://forms.gle/Xp38fLBp5jxPX8k9A', '_blank', 'width=800,height=600');
  };

  const handleShowEventDetails = (eventId) => {
    const eventDetails = {
      // View Details events - These show full information
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
        title: 'Valedictory Ceremony',
        time: '2:00 PM - 3:30 PM',
        details: 'The grand finale of VigilantX 2025! Join us for the prize distribution ceremony, recognition of outstanding participants, and celebration of all achievements throughout the event.',
        rules: [
          'All participants must attend',
          'Winners will be announced',
          'Certificate distribution'
        ]
      },
      
      // Registration events - These show "Coming Soon" message
      'non-cyber-ctf': {
        type: 'registration',
        title: 'CTF',
        time: '10:00 AM - 4:30 PM',
        prize: 'Prize Pool: ₹6,000'
      },
      'seminar-docker': {
        type: 'registration',
        title: 'Seminar (Docker/Kubernetes)',
        time: '10:30 AM - 1:30 PM'
      },
      'paper-presentation': {
        type: 'registration',
        title: 'Idea Presentation',
        time: '1:30 PM - 3:30 PM',
        prize: 'Prize Pool: ₹3,000'
      },
      'hacking-expo': {
        type: 'registration',
        title: 'Hacking Tools Expo',
        time: '10:00 AM - 4:30 PM'
      },
      'bug-bounty': {
        type: 'registration',
        title: 'Bug Bounty',
        time: '10:00 AM - 12:30 PM',
        prize: 'Prize Pool: ₹4,500'
      },
      'cyber-hunt': {
        type: 'registration',
        title: 'Cyber Hunt',
        time: '2:00 PM - 4:30 PM',
        prize: 'Prize Pool: ₹2,500'
      },
      'workshop': {
        type: 'registration',
        title: 'Workshop - Block Chain Technology',
        time: '9:30 AM - 12:30 PM'
      },
      'game-of-threats': {
        type: 'registration',
        title: 'Game of Threats',
        time: '10:00 AM - 3:00 PM',
        prize: 'Prize Pool: ₹2,500'
      },
      'debugging-contest': {
        type: 'registration',
        title: 'Cyber Coding Contest',
        time: '10:30 AM - 12:30 PM',
        prize: 'Prize Pool: ₹4,500'
      }
    };

    setSelectedEvent(eventDetails[eventId]);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div className="App">
      <IntroScreen />
      <ParticleBackground />
      <Navbar onRegisterClick={handleRegisterPass} />
      <Hero onRegisterClick={handleRegisterPass} />
      <About />
      <WhyParticipate />
      <Timeline />
      <Events onShowEventDetails={handleShowEventDetails} />
      <Coordinators />
      <Contact />
      <Footer />
      
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        eventData={selectedEvent}
      />
    </div>
  );
}

export default App;