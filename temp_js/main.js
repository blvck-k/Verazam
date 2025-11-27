// Small helpers: reveal on scroll, form submission mock, set copyright years
(function () {
  // --- Set dynamic years in footer ---
  const years = document.querySelectorAll('[id^="year"]');
  years.forEach(y => {
    y.textContent = new Date().getFullYear();
  });

  // --- Reveal elements on scroll ---
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.15 }
  );
  reveals.forEach(r => io.observe(r));

  // --- Contact form handler (demo only) ---
  window.handleContact = function (e) {
    e.preventDefault();
    const status = document.getElementById('form-status');
    status.textContent = 'Thanks! Message captured (demo).';
  };
})();
