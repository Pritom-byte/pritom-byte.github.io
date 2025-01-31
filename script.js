// Theme Switcher
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('change', () => {
  document.body.classList.toggle('light-theme');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
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

// Initialize Particle.js
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('Particles.js loaded!');
});
