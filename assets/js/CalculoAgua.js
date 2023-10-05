function calcularAgua() {
    var consumo = parseFloat (document.getElementById('cons').value)

    var consumoDiario = consumo * 35

    document.getElementById("resultadoAgua").innerHTML = "";

    if (isNaN(consumoDiario)) {
       document.getElementById("resultadoAgua").innerHTML += "<p>Por favor, escreva um valor válido! 'Ex: 1.00'</p>"

    } else

    document.getElementById('resultadoAgua').innerHTML += "<p>O seu consumo de água ideal e de aproximadamente " + consumoDiario.toFixed(2).replace(".",",") + "</p>"
}