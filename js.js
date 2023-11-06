function sumar() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var resultado = numero1 + numero2;
    document.getElementById("resultado").textContent = resultado;
}

function restar() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var resultado = numero1 - numero2;
    document.getElementById("resultado").textContent = resultado;
}

function multiplicar() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var resultado = numero1 * numero2;
    document.getElementById("resultado").textContent = resultado;
}

function dividir() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    if (numero2 !== 0) {
        var resultado = numero1 / numero2;
        document.getElementById("resultado").textContent = resultado;
    } else {
        document.getElementById("resultado").textContent = "Error: División por cero.";
    }
}