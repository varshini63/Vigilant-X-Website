import React, { useState, useEffect } from 'react';

const Navbar = ({ onRegisterClick }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const handleLinkClick = (e, sectionId) => {
        e.preventDefault();
        // Close mobile menu when a link is clicked
        closeMobileMenu();
        
        // Smooth scroll to section
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleRegisterClick = (e) => {
        e.preventDefault();
        closeMobileMenu();
        if (onRegisterClick) {
            onRegisterClick();
        }
    };

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            const nav = document.querySelector('nav');
            if (nav && !nav.contains(event.target) && isMobileMenuOpen) {
                closeMobileMenu();
            }
        };

        if (isMobileMenuOpen) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    return (
        <nav>
            <div className="nav-logos">
                <div className="logo-container">
                    <img src="./images/vnr_logo.png" alt="VNR VJIET" className="logo-img" />
                </div>
                <div className="logo-container">
                    <img src="./images/gv_logo.png" alt="Garuda Vigilance" className="logo-img" />
                </div>
            </div>
            
            {/* Mobile Menu Toggle Button */}
            <button 
                className="mobile-menu-toggle"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
            >
                <span style={{
                    transform: isMobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'rotate(0) translate(0, 0)',
                    transition: 'transform 0.3s ease'
                }}></span>
                <span style={{
                    opacity: isMobileMenuOpen ? '0' : '1',
                    transition: 'opacity 0.3s ease'
                }}></span>
                <span style={{
                    transform: isMobileMenuOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'rotate(0) translate(0, 0)',
                    transition: 'transform 0.3s ease'
                }}></span>
            </button>

            <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                <li><a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>Home</a></li>
                <li><a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>About</a></li>
                <li><a href="#timeline" onClick={(e) => handleLinkClick(e, 'timeline')}>Timeline</a></li>
                <li><a href="#events" onClick={(e) => handleLinkClick(e, 'events')}>Events</a></li>
                <li><a href="#coordinators" onClick={(e) => handleLinkClick(e, 'coordinators')}>Team</a></li>
                <li><a href="#queries" onClick={(e) => handleLinkClick(e, 'queries')}>Contact</a></li>
                <li><a href="#" onClick={handleRegisterClick} className="register-nav-btn">Register</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;