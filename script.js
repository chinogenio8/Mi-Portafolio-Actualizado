document.addEventListener('DOMContentLoaded', function() {
  // Menú hamburguesa
  const menuHamburguesa = document.querySelector('.menu-hamburguesa');
  const menuNav = document.querySelector('.menu-nav');
  
  menuHamburguesa.addEventListener('click', function() {
    menuNav.classList.toggle('open');
  });

  // Marcar enlace activo en el navbar
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('header nav ul li a');

  function setActiveLink() {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 150) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', setActiveLink);
  setActiveLink();

  // Inicializar ScrollReveal con configuración actualizada
  const sr = ScrollReveal({
    distance: '60px',
    duration: 1000,
    delay: 300,
    reset: true
  });

  // Animaciones para diferentes secciones con delay reducido
  sr.reveal('.img-personal', { 
    origin: 'left',
    scale: 0.9,
    delay: 200
  });

  sr.reveal('.sobre-mi', { 
    origin: 'right',
    delay: 300
  });

  sr.reveal('.botones', {
    origin: 'bottom',
    delay: 400
  });

  // Animación para las habilidades
  sr.reveal('.skill-item', {
    origin: 'bottom',
    interval: 100,
    delay: 200,
    distance: '20px'
  });

  // Animación para los proyectos
  sr.reveal('.proyecto-item', {
    origin: 'bottom',
    interval: 200,
    distance: '40px',
    scale: 0.95,
    delay: 200
  });

  // Animación para el formulario de contacto
  sr.reveal('.form-group', {
    origin: 'right',
    interval: 150,
    delay: 200,
    distance: '30px'
  });

  // Animación de typing para el título
  const titulo = document.querySelector('.sobre-mi h1');
  if (titulo) {
    const texto = titulo.textContent;
    titulo.textContent = '';
    let index = 0;

    function typeText() {
      if (index < texto.length) {
        titulo.textContent += texto.charAt(index);
        index++;
        setTimeout(typeText, 100);
      }
    }
    typeText();
  }

  // Animación suave para el scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
