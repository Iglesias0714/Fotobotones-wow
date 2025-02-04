// Inicializar AOS
AOS.init({
    duration: 1000, // Duración de las animaciones
    once: true, // Las animaciones solo se ejecutan una vez
  });
  
  // Añade un evento para que los enlaces del menú hagan scroll suave
  document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Efecto de carga inicial
  window.addEventListener('load', () => {
    document.body.classList.add('loaded');
  });