function insert(num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean() {
    document.getElementById('resultado').innerHTML = "";
}

function back() {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero.substring(0, numero.length -1);
}

function calcular() {
    var numero = document.getElementById('resultado').innerHTML;

    if(numero) {
        document.getElementById('resultado').innerHTML = eval(numero);
    } else {
        document.getElementById('resultado').innerHTML = "...";
    }
}