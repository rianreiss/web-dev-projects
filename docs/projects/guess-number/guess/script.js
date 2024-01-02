let btn = document.getElementById('btn');
let output = document.getElementById('info');
let gameDisplay = document.getElementById('game');
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
        
        gameDisplay.style.display = 'grid';

        getRange();

    }
};

function getRange () {

    let rangeInt = parseInt(range.value);
    number = Math.floor(Math.random() * rangeInt);
    console.log(number);
};

/*
range.addEventListener('change', function() {
    number = getRange();
    return number;
});
*/

btn.addEventListener('click', function() {

    let input = document.getElementById('input').value;

    if (isNaN(input)){
        alert('Please, insert a valid number.');

    } else if (input < 1 || input > selectedValue) {
        alert(`Please, insert a number in range 1 to ${selectedValue}.`);

    } else {
        attemps++;
        if (input == number) {
            alert('you won.');
            console.log(attemps);
        } else if (input < number) {
            alert('your guessing was lower than the number.');
        } else {
            alert('your guessing was higher than the number.');
        }
    }
});

function resetarPagina() {
    location.reload();
};

/*
while(running) {

    btn.addEventListener('click', function() {

        window.alert('teste');
        let input = document.getElementById('input').value;

        if (isNaN(input)){
            alert('Please, insert a valid number.');
        } else if (input < 1 || input > selectedValue) {
            alert(`Please, insert a number in range 1 to ${selectedValue}.`);
        } else {
            attemps++;
            if (input == number) {
                alert('you won.');
            } else if (input < number) {
                alert('your guessing was lower than the number.');
            } else {
                alert('your guessing was higher than the number.');
            }
        }
    });
}
*/