document.addEventListener("DOMContentLoaded", function() {
    const num1 = document.getElementById("numero1");
    const num2 = document.getElementById("numero2");
    const botoncal = document.getElementById("botoncal");
    const valorsuma = document.getElementById("valor");

    botoncal.addEventListener("click", function(){
        event.preventDefault();
        const numero1 = parseFloat(num1.value);
        const numero2 = parseFloat(num2.value);

        if (!isNaN(numero1) && !isNaN(numero2)) {
            const suma = numero1 + numero2;
            valorsuma.textContent = suma;
            num1.value = "";
            num2.value = "";
        } else {
            valorsuma.textContent = "Digitos invalidos";
        }
    });
});

