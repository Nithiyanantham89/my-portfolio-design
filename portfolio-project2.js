// ── Smooth scroll for nav links ──────────────────────────────────────
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ── Mobile menu toggle ────────────────────────────────────────────────
const menuToggle = document.querySelector('.menu-toggle');
const navLinks   = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close menu when a nav link is clicked (mobile)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── Fade-in on scroll ─────────────────────────────────────────────────
const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ── Rotating role text ────────────────────────────────────────────────
const roles   = ['Web Developer', 'Data Analyst', 'Full Stack Developer', 'AI & ML Enthusiast'];
let roleIndex = 0;
const roleEl  = document.getElementById('role-text');

function rotateRole() {
  roleEl.classList.add('fade-out');

  setTimeout(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    roleEl.textContent = roles[roleIndex];
    roleEl.classList.remove('fade-out');
  }, 500);
}

setInterval(rotateRole, 2500);
