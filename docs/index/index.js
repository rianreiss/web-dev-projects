document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.getElementById('nav');
  const back = document.getElementById('back');
  const toggleButton = document.getElementById('toggle-nav');

  // Mostrar/ocultar a barra de navegação ao clicar no botão
  toggleButton.addEventListener('click', function () {
    navbar.classList.toggle('hidden');
  });

  // Ocultar a barra de navegação quando clicar fora dela
  document.addEventListener('click', function (event) {
    const isClickInsideNavbar = navbar.contains(event.target);
    const isClickInsideToggleButton = toggleButton.contains(event.target);

    if (!isClickInsideNavbar && !isClickInsideToggleButton) {
      navbar.classList.add('hidden');
    }
  });

  back.addEventListener('click', function () {
    window.location.href = 'https://github.com/rianreiss/web-dev-projects';
  });

});
