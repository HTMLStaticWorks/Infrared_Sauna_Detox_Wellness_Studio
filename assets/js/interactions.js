// Theme Toggle
const themeToggleBtns = document.querySelectorAll('.theme-toggle');
const root = document.documentElement;
const savedTheme = localStorage.getItem('theme') || 'light';

root.setAttribute('data-theme', savedTheme);

themeToggleBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const currentTheme = root.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
});

// RTL Toggle
const rtlToggleBtns = document.querySelectorAll('.rtl-toggle');
const savedDir = localStorage.getItem('dir') || 'ltr';

root.setAttribute('dir', savedDir);

rtlToggleBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const currentDir = root.getAttribute('dir');
    const newDir = currentDir === 'ltr' ? 'rtl' : 'ltr';
    root.setAttribute('dir', newDir);
    localStorage.setItem('dir', newDir);
  });
});

// Scroll Reveal
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-up').forEach(el => {
  observer.observe(el);
});

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Modal System
class Modal {
  constructor() {
    this.modal = document.getElementById('global-modal');
    this.content = document.getElementById('modal-dynamic-content');
    this.closeBtn = this.modal?.querySelector('.close-modal');
    
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }
    
    if (this.modal) {
      this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal) this.close();
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal?.classList.contains('active')) {
        this.close();
      }
    });
  }

  open(htmlContent) {
    if (!this.modal) return;
    this.content.innerHTML = htmlContent;
    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  close() {
    if (!this.modal) return;
    this.modal.classList.remove('active');
    setTimeout(() => {
      this.content.innerHTML = '';
      document.body.style.overflow = '';
    }, 300);
  }
}

window.ModalManager = new Modal();
