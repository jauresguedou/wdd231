


  document.addEventListener("DOMContentLoaded", () =>{
    const currentYear = new Date().getFullYear();

    const year = document.getElementById('currentyear');

    year.textContent = ` ©️${currentYear} Timbuktu Chamber of Commerce `;
});


document.addEventListener("DOMContentLoaded", () => {
    const modify = new Date().getDate();
    const el = document.getElementById('lastModified');
    el.textContent = `Last Modification:${document.lastModified}`;
});
const btn  = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-menu');

btn.addEventListener('click', () => {
  menu.classList.toggle('active');
  btn.classList.toggle('open');
  btn.setAttribute('aria-expanded', btn.classList.contains('open'));
});

