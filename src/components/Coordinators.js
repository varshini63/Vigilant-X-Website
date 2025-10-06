import React from 'react';

const Coordinators = () => {
  return (
    <section id="coordinators" className="section">
      <h2 className="section-title">Event Coordinators</h2>
      <h3 style={{textAlign:'center', margin:'30px 0', color:'#f0f'}}>Faculty Coordinators</h3>
      <div className="coordinators">
        <div className="coordinator-card">
          <h4>Convenor</h4>
          <h4>Dr. T. Sunil Kumar</h4>
          <p>Professor and HoD - Dept.of CSE-(CYS,DS) and AI&DS</p>
        </div>
        <div className="coordinator-card">
          <h4>Mrs. G. Mounika</h4>
          <p>Assistant Professor - Dept.of CSE-(CYS,DS) and AI&DS</p>
        </div>
        <div className="coordinator-card">
          <h4>Mrs. G. Usha Rani</h4>
          <p>Assistant Professor - Dept.of CSE-(CYS,DS) and AI&DS</p>
        </div>
      </div>
      <h3 style={{textAlign:'center', margin:'30px 0', color:'#f0f'}}>Student Coordinators</h3>
      <div className="coordinators">
        <div className="coordinator-card">
          <h4>V. Raghavendra Sai</h4>
          <p>ChairPerson - VJ Garuda Vigilance</p>
          <p>📱 +91-9059494181</p>
        </div>
        <div className="coordinator-card">
          <h4>K. Harsha Vardhan</h4>
          <p>President - VJ Garuda Vigilance</p>
          <p>📱 +91-8019252777</p>
        </div>
        
      </div>
    </section>
  );
};

export default Coordinators;