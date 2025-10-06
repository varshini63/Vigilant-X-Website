import React from 'react';

const IntroScreen = () => {
  return (
    <div className="intro-screen">
      <div className="shield"></div>
      <h1 className="intro-title">
        <span style={{"--dx": "-200px", "--dy": "-200px"}}>V</span>
        <span style={{"--dx": "200px", "--dy": "-200px"}}>i</span>
        <span style={{"--dx": "-200px", "--dy": "200px"}}>g</span>
        <span style={{"--dx": "200px", "--dy": "200px"}}>i</span>
        <span style={{"--dx": "-300px", "--dy": "0"}}>l</span>
        <span style={{"--dx": "300px", "--dy": "0"}}>a</span>
        <span style={{"--dx": "0", "--dy": "-300px"}}>n</span>
        <span style={{"--dx": "0", "--dy": "300px"}}>t</span>
        <span style={{"--dx": "250px", "--dy": "250px"}}>X</span>
      </h1>
    </div>
  );
};

export default IntroScreen;