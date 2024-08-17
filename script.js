document.addEventListener('DOMContentLoaded', function() {
  const menuHamburguesa = document.querySelector('.menu-hamburguesa');
  const menuNav = document.querySelector('.menu-nav');

  menuHamburguesa.addEventListener('click', function() {
    menuNav.classList.toggle('open');
  });
});




