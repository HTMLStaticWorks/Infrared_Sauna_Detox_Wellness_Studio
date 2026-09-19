class DashboardManager {
  constructor() {
    this.initCharts();
  }

  initCharts() {
    // Simple SVG/CSS animations for progress rings instead of a heavy chart library
    const rings = document.querySelectorAll('.progress-ring-circle');
    
    rings.forEach(ring => {
      const radius = ring.r.baseVal.value;
      const circumference = radius * 2 * Math.PI;
      const percent = ring.dataset.percent || 0;
      
      ring.style.strokeDasharray = `${circumference} ${circumference}`;
      ring.style.strokeDashoffset = circumference;
      
      const offset = circumference - (percent / 100) * circumference;
      
      setTimeout(() => {
        ring.style.transition = 'stroke-dashoffset 1.5s ease-in-out';
        ring.style.strokeDashoffset = offset;
      }, 500);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.includes('dashboard.html')) {
    new DashboardManager();
    
    // Check auth (commented out for demo purposes)
    // if(localStorage.getItem('lumora_auth') !== 'true') {
    //   window.location.href = 'login.html';
    // }

    // Logout handling
    const logoutBtn = document.getElementById('logout-btn');
    if(logoutBtn) {
      logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('lumora_auth');
        window.location.href = 'index.html';
      });
    }

    // Sidebar toggle for mobile
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.querySelector('.dashboard-sidebar');
    
    if (sidebarToggle && sidebar) {
      sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
      });
    }
  }
});
