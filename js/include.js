// Loads HTML partials into [data-include] elements. The value is a path
// relative to the current page, e.g. "partials/header.html" or "../partials/header.html".
// Requires serving over HTTP (file:// blocks fetch).

(function () {
  'use strict';

  const elements = document.querySelectorAll('[data-include]');

  const loads = Array.from(elements).map(async (el) => {
    const url = el.getAttribute('data-include');
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      el.innerHTML = await res.text();
    } catch (err) {
      console.error(`Failed to load partial ${url}:`, err);
      el.innerHTML = `<!-- failed to load ${url} -->`;
    }
  });

  // After all partials are in the DOM, load the main interaction script so
  // it can wire up the nav, slideshow, etc.
  Promise.all(loads).then(() => {
    const script = document.createElement('script');
    // Resolve main.js relative to this file's location
    const current = document.currentScript || document.querySelector('script[src*="include.js"]');
    const base = current ? current.src.replace(/include\.js.*$/, '') : '';
    script.src = base + 'main.js';
    document.body.appendChild(script);
  });
})();
