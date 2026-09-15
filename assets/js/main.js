// Theme handling
(function () {
  const currentTheme = localStorage.getItem('theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  
  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }

  function updateToggleBtn(theme) {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
    btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  }

  document.addEventListener('DOMContentLoaded', () => {
    const activeTheme = document.documentElement.getAttribute('data-theme') || 'light';
    updateToggleBtn(activeTheme);

    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        updateToggleBtn(theme);
      });
    }

    // Projects category filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterBtns.length > 0 && projectCards.length > 0) {
      filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          filterBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');

          const category = btn.getAttribute('data-filter');

          projectCards.forEach(card => {
            if (category === 'all') {
              card.style.display = 'flex';
            } else if (category === 'recent') {
              const year = parseInt(card.getAttribute('data-year') || '0', 10);
              card.style.display = year >= 2024 ? 'flex' : 'none';
            } else {
              const cardCat = card.getAttribute('data-category');
              card.style.display = cardCat === category ? 'flex' : 'none';
            }
          });
        });
      });
    }
  });
})();
