// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Initialize Particle.js
  particlesJS.load('particles-js', 'particles.json', function() {
    console.log('Particles.js loaded!');
  });
  
  // GSAP Animations
  gsap.from('#hero h2', { opacity: 0, y: -50, duration: 1, delay: 0.5 });
  gsap.from('#hero p', { opacity: 0, y: 50, duration: 1, delay: 1 });
  gsap.from('.btn-neon', { opacity: 0, scale: 0.5, duration: 1, delay: 1.5 });
  
  // ScrollTrigger Animations
  gsap.utils.toArray('section').forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: 'top 80%',
      onEnter: () => section.classList.add('visible'),
    });
  });
  
  // Custom Cursor
// Custom Cursor with Magnetic Effect
const cursor = document.querySelector('.cursor');
const particlesContainer = document.getElementById('particles-js');

document.addEventListener('mousemove', (e) => {
  // Move the custom cursor
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';

  // Magnetic effect on particles
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  particlesContainer.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
});

// Glow Effect on Buttons
document.querySelectorAll('.btn-neon, .neon-box').forEach(element => {
  element.addEventListener('mouseenter', () => {
    cursor.classList.add('hover');
    element.style.boxShadow = '0 0 20px #00ff88, 0 0 40px #007bff';
  });

  element.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
    element.style.boxShadow = '0 0 10px #00ff88, 0 0 20px #007bff';
  });
});
  
  // Background interaction with cursor
  document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    document.body.style.backgroundPosition = `${x * 100}% ${y * 100}%`;
  });
