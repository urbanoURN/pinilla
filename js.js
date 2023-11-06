function realizarOperacion(operacion) {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var resultadoSpan = document.getElementById("resultado");

    if (!isNaN(numero1) && !isNaN(numero2)) {
        var resultado;
        if (operacion === 'sumar') {
            resultado = numero1 + numero2;
        } else if (operacion === 'restar') {
            resultado = numero1 - numero2;
        } else if (operacion === 'multiplicar') {
            resultado = numero1 * numero2;
        } else if (operacion === 'dividir' && numero2 !== 0) {
            resultado = numero1 / numero2;
        } else {
            resultadoSpan.textContent = "Error: Operación no válida o división por cero.";
            return;
        }

        resultadoSpan.textContent = "Resultado: " + resultado;
    } else {
        resultadoSpan.textContent = "Error: Dígitos inválidos";
    }
}
