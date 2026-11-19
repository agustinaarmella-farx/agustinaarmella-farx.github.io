// Animación al hacer scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// Resalta la sección activa en la barra flotante
const links = [...document.querySelectorAll('.dock a')];
const sections = links.map((a) => document.querySelector(a.getAttribute('href')));
const navObs = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      links.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });
sections.forEach((s) => s && navObs.observe(s));

// Botón "Copiar mail"
const btn = document.getElementById('copy');
btn?.addEventListener('click', async () => {
  const mail = document.getElementById('mail').textContent.trim();
  try { await navigator.clipboard.writeText(mail); btn.textContent = '¡Copiado!'; }
  catch { window.location.href = 'mailto:' + mail; }
  setTimeout(() => (btn.textContent = 'Copiar mail'), 1800);
});

document.getElementById('year').textContent = new Date().getFullYear();
