document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  const tabs = document.querySelectorAll('.auth-tab');
  const panels = document.querySelectorAll('.auth-panel');

  if (tabs.length > 0) {
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));
        
        tab.classList.add('active');
        document.getElementById(`${tab.dataset.target}-panel`).classList.add('active');
      });
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Demo logic
      localStorage.setItem('lumora_auth', 'true');
      window.location.href = 'dashboard.html';
    });
  }

  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Demo logic
      localStorage.setItem('lumora_auth', 'true');
      window.location.href = 'dashboard.html';
    });
  }
});
