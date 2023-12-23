function insert(num) {
    // insere o item no mercado
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean() {
    // limpa o display
    document.getElementById('resultado').innerHTML = "";
}

function back() {
    // "backspace" apaga 1 item do display
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero.substring(0, numero.length -1);
}

function calcular() {
    // faz o calculo com a operação do display
    var numero = document.getElementById('resultado').innerHTML;

    if(numero) {
        document.getElementById('resultado').innerHTML = eval(numero);
    } else {
        document.getElementById('resultado').innerHTML = "...";
    }
}

document.addEventListener('keydown', function(event) {
    // Verifica se a tecla pressionada é um número de 0 a 9
    if (event.key >= '0' && event.key <= '9') {
        insert(event.key);
    } else if (event.key === '.' || event.key === ',') {
        insert(event.key === ',' ? '.' : event.key);
    } else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
        insert(' ' + event.key + ' ');
    } else if (event.key === 'c' || event.key === 'C') {
        clean();
    } else if (event.key === 'Enter') {
        // Execute a lógica de cálculo quando a tecla Enter for pressionada
        calcular();
    } else if (event.key === 'Backspace') {
        back();
    }
});