document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Logic
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeMenuBtn = document.querySelector('.close-menu');
  
  // Create backdrop if it doesn't exist
  let backdrop = document.querySelector('.backdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'backdrop';
    document.body.appendChild(backdrop);
  }

  function toggleMenu() {
    mobileMenu.classList.toggle('active');
    backdrop.classList.toggle('active');
    
    if (mobileMenu.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
  }

  if (closeMenuBtn) {
    closeMenuBtn.addEventListener('click', toggleMenu);
  }

  if (backdrop) {
    backdrop.addEventListener('click', toggleMenu);
  }

  // Set active nav link
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu .nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });
});
