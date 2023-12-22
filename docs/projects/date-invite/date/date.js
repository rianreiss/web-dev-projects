function yes() {
    alert("Love u <3")
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