let btn = document.getElementById('btn');
let gameDisplay = document.getElementById('game');
let output = document.getElementById('info');
let settings = document.getElementById('settings');
let number;

let range;
let selectedValue;

let attemps = 0;


function start() {
    range = document.getElementById('range');
    selectedValue = parseInt(range.value);

    if (selectedValue === 0) {

        alert('Por favor, selecione a variação que você quer jogar.');

    } else {

        let reset = document.getElementById('reset');
        reset.style.display = 'block'; // showing the reset button
        document.getElementById('start').style.display = 'none';
        settings.textContent = `Você está adivinhando um número de 1 a ${selectedValue}`;
        range.style.display = 'none';
        settings.style.borderBottom = '3px solid ' + '#fc354c';
        settings.style.textAlign = 'center';

        
        output.innerHTML = 'Consegue adivinhar?';
        
        gameDisplay.style.display = 'grid';

        getRange();

    }
};

function getRange () {

    let rangeInt = parseInt(range.value);
    number = Math.floor(Math.random() * rangeInt);
    console.log(number);
};


let resetBtn = document.getElementById('reset');

document.addEventListener('keydown', function(event) {
    // Verifica se a tecla pressionada é um número de 0 a 9
    if (event.key == 'Enter') {
        btn.click();
    }
});

var numeros = [];

btn.addEventListener('click', function() {

    let inputV = document.getElementById('input').value;

    if (isNaN(inputV)){
        alert(`Por favor, selecione um número válido.`);
        limparInput(inputV);

    } else if (inputV < 1 || inputV > selectedValue) {
        alert(`Por favor, selecione um valor de 1 a ${selectedValue}.`);
        limparInput(inputV);

    } else if (numeros.includes(inputV)) {
        alert(`Você já tentou esse número.`);
        limparInput(inputV);
    } else {
        attemps++;
        if (inputV == number) {
            output.innerHTML = `Você venceu!! (${number})`;
            input.select();
            numeros = [];
            btn.disabled = true;    
        } else if (inputV < number) {
            output.innerHTML = 'Maior que isso.';
            numeros.push(inputV);
            limparInput(inputV);
        } else {
            output.innerHTML = 'Menor que isso.';
            numeros.push(inputV);
            limparInput(inputV);
        }
        let guesses = document.getElementById('guesses');
        guesses.innerHTML = `Tentativas: ${attemps}`;
    }
});

function limparInput(newHolder) {
    let input = document.getElementById('input');
    input.value = "";
    input.focus();
    input.placeholder = `Atual: ${newHolder}`;
}

function resetarPagina() {
    location.reload();
};

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
