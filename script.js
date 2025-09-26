// Year + theme toggle + smooth scroll + mobile menu + basic form UX
(function(){
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const themeToggle = document.getElementById('themeToggle');
  const setTheme = (light) => {
    document.documentElement.classList.toggle('light', light);
    localStorage.setItem('theme', light ? 'light' : 'dark');
  };
  const saved = localStorage.getItem('theme');
  if (saved) setTheme(saved === 'light'); else setTheme(!prefersDark);
  themeToggle?.addEventListener('click', () => setTheme(!document.documentElement.classList.contains('light')));

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'}); }
    });
  });

  // Mobile menu
  const burger = document.getElementById('hamburger');
  const nav = document.getElementById('mainnav');
  burger?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Simple form UX
  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMsg');
  form?.addEventListener('submit', async (e) => {
    if (form.action.includes('YOUR_FORMSPREE_ID')){
      e.preventDefault();
      msg.textContent = '请先在 HTML 里把 YOUR_FORMSPREE_ID 替换成你的表单 ID。';
      return;
    }
    msg.textContent = '发送中…';
  });
})();