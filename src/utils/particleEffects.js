export const initializeCursorParticles = () => {
  let particles = [];
  let mouse = { x: 0, y: 0 };

  const handleMouseMove = (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    
    for(let i = 0; i < 3; i++) {
      particles.push({
        x: mouse.x + (Math.random() - 0.5) * 20,
        y: mouse.y + (Math.random() - 0.5) * 20,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        life: 30,
        element: null
      });
    }
  };

  const updateParticles = () => {
    particles.forEach((particle, index) => {
      if (!particle.element) {
        particle.element = document.createElement('div');
        particle.element.className = 'cursor-particle';
        document.body.appendChild(particle.element);
      }
      
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.life--;
      
      const opacity = particle.life / 30;
      particle.element.style.left = particle.x + 'px';
      particle.element.style.top = particle.y + 'px';
      particle.element.style.opacity = opacity;
      
      if (particle.life <= 0) {
        particle.element.remove();
        particles.splice(index, 1);
      }
    });
    
    requestAnimationFrame(updateParticles);
  };

  document.addEventListener('mousemove', handleMouseMove);
  updateParticles();

  return () => {
    document.removeEventListener('mousemove', handleMouseMove);
    particles.forEach(particle => {
      if (particle.element) {
        particle.element.remove();
      }
    });
    particles = [];
  };
};

export const createFloatingParticles = (containerId = 'particles', count = 50) => {
  const particlesContainer = document.getElementById(containerId);
  if (!particlesContainer) return () => {};

  for(let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 20 + 's';
    particle.style.animationDuration = (15 + Math.random() * 10) + 's';
    particlesContainer.appendChild(particle);
  }

  const changeParticleColors = setInterval(() => {
    const particles = document.querySelectorAll('.particle');
    particles.forEach(particle => {
      const hue = Math.random() * 360;
      particle.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
    });
  }, 5000);

  return () => {
    clearInterval(changeParticleColors);
    const particles = document.querySelectorAll('.particle');
    particles.forEach(particle => particle.remove());
  };
};

export const initializeScrollEffect = () => {
  let lastScrollY = window.scrollY;
  const heroImage = document.getElementById('heroImage');

  const handleScroll = () => {
    const scrollDelta = window.scrollY - lastScrollY;
    if (heroImage) {
      const currentRotation = parseInt(heroImage.dataset.rotation || 0);
      const newRotation = currentRotation + (scrollDelta * 0.5);
      
      heroImage.style.transform = `rotate(${newRotation}deg)`;
      heroImage.dataset.rotation = newRotation;
      
      heroImage.classList.add('paused');
      clearTimeout(heroImage.scrollTimeout);
      heroImage.scrollTimeout = setTimeout(() => {
        heroImage.classList.remove('paused');
      }, 150);
    }
    
    lastScrollY = window.scrollY;
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};

export const initializeDevToolsProtection = () => {
  const handleKeyDown = (e) => {
    if(e.ctrlKey && e.shiftKey && e.key === 'I'){
      e.preventDefault();
      alert('🔒 Developer Tools Disabled for Security!\n\n🛡️ VigilantX Security Protocol Active\n🚫 Unauthorized access detected');
    }
  };

  document.addEventListener('keydown', handleKeyDown);

  return () => {
    document.removeEventListener('keydown', handleKeyDown);
  };
};