// Menu responsivo
const nav = document.querySelector('header nav');
const toggle = document.createElement('div');
toggle.classList.add('nav-toggle');
toggle.innerHTML = '<i class="fas fa-bars"></i>';
document.querySelector('header .container').appendChild(toggle);

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});
