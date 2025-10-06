import React from 'react';

const Modal = ({ isOpen, onClose, eventData }) => {
  if (!isOpen) return null;

  // Check if this is a "View Details" event or a "Register" event
  const isRegistrationEvent = eventData?.type === 'registration';

  return (
    <div className="modal" style={{ display: 'flex' }} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        
        {isRegistrationEvent ? (
          // Coming Soon Content
          <div className="coming-soon-container">
            <div className="coming-soon-icon">🚀</div>
            <h2 className="coming-soon-title">{eventData.title}</h2>
            <div className="coming-soon-message">
              <p className="pulse-text">Registrations Opening Soon!</p>
              <p className="sub-message">We're preparing something amazing for you.</p>
              <p className="stay-tuned">Stay tuned for the registration link.</p>
            </div>
            <div className="countdown-badge">
              <span className="badge-text">Get Ready</span>
            </div>
            <div className="event-quick-info">
              {eventData.time && <p className="info-item">⏰ {eventData.time}</p>}
              {eventData.prize && <p className="info-item prize-highlight">🏆 {eventData.prize}</p>}
            </div>
          </div>
        ) : (
          // Original View Details Content
          <>
            <h2 style={{ color: '#0ff', marginBottom: '20px' }}>{eventData?.title}</h2>
            {eventData?.image && (
              <img 
                src={eventData.image} 
                alt={eventData.title}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '10px',
                  marginBottom: '20px',
                  border: '2px solid #0ff'
                }}
              />
            )}
            <div style={{ textAlign: 'left', color: '#ccc' }}>
              {eventData?.details && <p style={{ marginBottom: '15px', lineHeight: '1.6' }}>{eventData.details}</p>}
              {eventData?.rules && (
                <>
                  <h3 style={{ color: '#0ff', marginTop: '20px' }}>Rules & Guidelines:</h3>
                  <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
                    {eventData.rules.map((rule, index) => (
                      <li key={index}>{rule}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;