const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const contactForm = document.getElementById('contactForm');

navToggle?.addEventListener('click', () => {
  siteNav?.classList.toggle('active');
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('.site-header');
  if (!header) return;
  header.classList.toggle('scrolled', window.scrollY > 20);
});

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Merci pour votre message ! Nous revenons vers vous sous 24 heures.');
  contactForm.reset();
});
