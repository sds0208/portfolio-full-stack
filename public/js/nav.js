const bodyEl = document.body;

document.querySelector('.hamburger')
  .addEventListener('click', (e) => {
    e.currentTarget.closest('nav').classList.toggle('open');
    bodyEl.classList.toggle('mobile-nav-open');
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.currentTarget.closest('nav').classList.remove('open');
    bodyEl.classList.remove('mobile-nav-open');
  });
});