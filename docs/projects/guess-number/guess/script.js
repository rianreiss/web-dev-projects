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

        alert('Please, select the range you want to play.');

    } else {

        let reset = document.getElementById('reset');
        reset.style.display = 'block'; // showing the reset button
        document.getElementById('start').style.display = 'none';
        settings.textContent = `You're guessing a number in range 1 to ${selectedValue}`;
        range.style.display = 'none';
        settings.style.borderBottom = '3px solid ' + '#fc354c';
        settings.style.textAlign = 'center';

        
        output.innerHTML = 'Can you guess it?';
        
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
        alert(`Please, insert a valid number.`);
        limparInput(inputV);

    } else if (inputV < 1 || inputV > selectedValue) {
        alert(`Please, insert a number in range 1 to ${selectedValue}.`);
        limparInput(inputV);

    } else if (numeros.includes(inputV)) {
        alert(`You already guessed that number.`);
        limparInput(inputV);
    } else {
        attemps++;
        if (inputV == number) {
            output.innerHTML = `You won!! (${number})`;
            input.select();
            numeros = [];
            btn.disabled = true;    
        } else if (inputV < number) {
            output.innerHTML = 'Higher than that.';
            numeros.push(inputV);
            limparInput(inputV);
        } else {
            output.innerHTML = 'Lower than that.';
            numeros.push(inputV);
            limparInput(inputV);
        }
        let guesses = document.getElementById('guesses');
        guesses.innerHTML = `Guesses: ${attemps}`;
    }
});

function limparInput(newHolder) {
    let input = document.getElementById('input');
    input.value = "";
    input.focus();
    input.placeholder = `Last: ${newHolder}`;
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
