let bear = document.getElementById('bear');
let couple = document.getElementById('couple');
let text = document.getElementById('text');
let buttons = document.getElementById('buttons');


function yes() {

    bear.style.display = 'none';
    couple.style.display = 'block';
    text.innerHTML = 'Luv u bae <3';
    buttons.style.display = 'none';
}

function dodge(t) {
    var btn = t;

    btn.style.position = 'absolute';
    btn.style.bottom = posicaoAleatoria(10, 85);
    btn.style.left = posicaoAleatoria(15, 85);
}

function posicaoAleatoria(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}

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
        window.history.back();
    });

});
