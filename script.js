document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('header nav');
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelectorAll('nav ul li a');

  // Alterna o menu ao clicar no botão de alternância
  if (nav && toggle) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }

  // Fecha o menu e faz scroll suave ao clicar em qualquer link
  links.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault(); // Impede o comportamento padrão do clique

      // Fecha o menu
      nav.classList.remove('active');

      // Obtém o alvo do link
      const targetId = link.getAttribute('href').slice(1); // Remove o "#" do href
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        smoothScroll(targetSection);
      }
    });
  });

  // Função para scroll suave
  function smoothScroll(target) {
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1000; // Tempo em milissegundos
    let startTime = null;

    function animationScroll(currentTime) {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);

      if (timeElapsed < duration) requestAnimationFrame(animationScroll);
    }

    // Função de easing (suavização)
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animationScroll);
  }
});
