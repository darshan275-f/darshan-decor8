// Basic form handler for contact page
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    contactForm.reset();
  });
}

// Scroll-based reveal animations for sections and product cards
function revealOnScroll() {
  const revealSections = document.querySelectorAll('.section-reveal');
  const productCards = document.querySelectorAll('.product-card');

  const reveal = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  };

  const options = {
    threshold: 0.15
  };

  const sectionObserver = new IntersectionObserver(reveal, options);
  revealSections.forEach(section => sectionObserver.observe(section));

  const cardObserver = new IntersectionObserver(reveal, options);
  productCards.forEach(card => cardObserver.observe(card));
}

document.addEventListener('DOMContentLoaded', revealOnScroll); 