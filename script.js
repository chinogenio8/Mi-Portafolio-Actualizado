const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');   

  menu.classList.toggle('active');   

});