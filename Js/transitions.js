// Simple link interception to show wipe transition before navigating
(function () {
  // Navigation helper with wipe animation
  function navigateWithWipe(href) {
    const overlay = document.createElement('div');
    overlay.className = 'page-transition';

    const wipe = document.createElement('div');
    wipe.className = 'wipe';

    overlay.appendChild(wipe);
    document.body.appendChild(overlay);

    // Trigger animation
    requestAnimationFrame(() => wipe.classList.add('active'));

    // After animation completes, navigate
    setTimeout(() => {
      window.location.href = href;
    }, 520);
  }

  // Intercept clicks on links
  document.addEventListener('click', function (e) {
    const a = e.target.closest('a');
    if (!a) return;

    const href = a.getAttribute('href');

    // Only intercept internal links (not external or anchors)
    if (href && !href.startsWith('http') && !href.startsWith('#')) {
      e.preventDefault();
      navigateWithWipe(href);
    }
  });
})();
