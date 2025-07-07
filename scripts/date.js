document.addEventListener("DOMContentLoaded", () =>{
    const currentYear = new Date().getFullYear();

    const year = document.getElementById('currentyear');

    year.textContent = `${currentYear}-Jaures Guedou-Benin Republic`;
});


document.addEventListener("DOMContentLoaded", () => {
    const modify = new Date().getDate();
    const el = document.getElementById('lastModified');
    el.textContent = `Last Modification:${document.lastModified}`;
});


