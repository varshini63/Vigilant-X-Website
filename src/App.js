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
import Sponsors from './components/Sponsors';

function App() {
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleRegisterPass = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSducDXZbLt3QRDdxCpgloApmTsnYhWjLxva8YC3XvaxmoKU1Q/viewform?pli=1', '_blank', 'width=800,height=600');
  };

  const handleRegisterEvent = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSducDXZbLt3QRDdxCpgloApmTsnYhWjLxva8YC3XvaxmoKU1Q/viewform?pli=1', '_blank', 'width=800,height=600');
  };

  const handleShowEventDetails = (eventType) => {
    console.log('App.js - handleShowEventDetails called with:', eventType);
    setSelectedEvent(eventType);
    setShowEventModal(true);
  };

  const closeModal = () => {
    setShowRegistrationModal(false);
    setShowEventModal(false);
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
      <Gallery />
      <Sponsors />
      <Footer />
      
      <Modal
        show={showRegistrationModal}
        onClose={closeModal}
        type="registration"
        onRegister={handleRegisterEvent}
      />
      
      <Modal
        show={showEventModal}
        onClose={closeModal}
        type="event"
        eventType={selectedEvent}
        onRegister={handleRegisterEvent}
      />
    </div>
  );
}

export default App;