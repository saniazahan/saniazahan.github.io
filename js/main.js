document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.topbar__toggle');
  const sidebar = document.querySelector('.sidebar');
  if (!toggle || !sidebar) return;

  toggle.addEventListener('click', () => {
    const isOpen = sidebar.classList.toggle('is-open');
    toggle.textContent = isOpen ? 'Close' : 'Menu';
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  sidebar.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      sidebar.classList.remove('is-open');
      toggle.textContent = 'Menu';
    });
  });
});
