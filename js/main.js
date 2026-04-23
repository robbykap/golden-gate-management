// =================================================================
// Golden Gate Management — client-side interactions
// =================================================================

(function () {
  'use strict';

  // ---------------- Mobile nav toggle ----------------
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // ---------------- Sticky nav on scroll ----------------
  const header = document.querySelector('.site-header');
  if (header) {
    const threshold = 80;
    const onScroll = () => {
      if (window.scrollY > threshold) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ---------------- Mark current page in nav ----------------
  const currentPath = window.location.pathname.replace(/\/index\.html$/, '/');
  document.querySelectorAll('.main-nav a').forEach((link) => {
    const href = link.getAttribute('href');
    if (!href) return;
    const linkPath = href.replace(/\/index\.html$/, '/');
    if (linkPath === currentPath) {
      const item = link.closest('.main-nav__item');
      if (item) item.setAttribute('aria-current', 'page');
    }
  });

  // ---------------- Auto-update footer year ----------------
  document.querySelectorAll('.copyright-year').forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
})();
