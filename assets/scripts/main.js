// ===== Intersection Observer for scroll animations =====
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll(
    '.animate-on-scroll, .slide-in-left, .slide-in-right, .scale-up, .pop-in'
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  animatedElements.forEach((el) => observer.observe(el));

  // ===== Dark/Light Mode Toggle =====
  const toggle = document.getElementById('theme-toggle');
  const html = document.documentElement;

  // Check saved preference or default to dark
  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    html.classList.remove('dark');
  } else {
    html.classList.add('dark');
  }

  if (toggle) {
    toggle.addEventListener('click', () => {
      html.classList.toggle('dark');
      const isDark = html.classList.contains('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    });
  }

  // ===== Typewriter restart on visibility =====
  const typewriter = document.querySelector('.typewriter');
  if (typewriter) {
    typewriter.style.width = '0';
    const twObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            typewriter.style.animation = 'none';
            void typewriter.offsetHeight;
            typewriter.style.animation = '';
            twObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    twObserver.observe(typewriter);
  }
});
