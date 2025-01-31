// GSAP Animations
gsap.from('.hero-text', { opacity: 0, y: -50, duration: 1, delay: 0.5 });
gsap.from('.hero-subtext', { opacity: 0, y: 50, duration: 1, delay: 1 });
gsap.from('.btn-primary', { opacity: 0, scale: 0.5, duration: 1, delay: 1.5 });

// ScrollTrigger Animations
gsap.utils.toArray('section').forEach((section) => {
  ScrollTrigger.create({
    trigger: section,
    start: 'top 80%',
    onEnter: () => section.classList.add('visible'),
  });
});

// Initialize Particle.js
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('Particles.js loaded!');
});

// Interactive Hover Effects for Work Items
document.querySelectorAll('.work-item').forEach((item) => {
  item.addEventListener('mouseenter', () => {
    gsap.to(item.querySelector('.work-overlay'), { opacity: 1, duration: 0.3 });
    gsap.to(item.querySelector('.work-img'), { scale: 1.1, duration: 0.3 });
  });

  item.addEventListener('mouseleave', () => {
    gsap.to(item.querySelector('.work-overlay'), { opacity: 0, duration: 0.3 });
    gsap.to(item.querySelector('.work-img'), { scale: 1, duration: 0.3 });
  });
});

// Cursor Interaction with Particles
const cursor = { x: 0, y: 0 };

document.addEventListener('mousemove', (e) => {
  cursor.x = e.clientX;
  cursor.y = e.clientY;

  // Update particle interaction
  particlesJS.interactivity.particles.move.attract.enable = true;
  particlesJS.interactivity.particles.move.attract.rotateX = cursor.x;
  particlesJS.interactivity.particles.move.attract.rotateY = cursor.y;
});
