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
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';
});

// Hover effect for cursor
document.querySelectorAll('a, button, .neon-box').forEach(element => {
  element.addEventListener('mouseenter', () => {
    cursor.classList.add('hover');
  });
  element.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
});

// Serialized RGB Wave Effect for Buttons
const buttons = document.querySelectorAll('.btn-neon');
let delay = 0;

buttons.forEach((button, index) => {
  button.style.animationDelay = `${delay}s`;
  delay += 0.5; // Add delay for each button to create a wave effect
});
