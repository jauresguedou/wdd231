const btn  = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-menu');

btn.addEventListener('click', () => {
  menu.classList.toggle('active');
  btn.classList.toggle('open');
  btn.setAttribute('aria-expanded', btn.classList.contains('open'));
});
