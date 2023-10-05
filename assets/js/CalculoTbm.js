const homem = document.querySelector('.btnHomem')
const mulher = document.querySelector('.btnMulher')
const conteudoDiv = document.querySelector('#input-tbm')
let kg, altura, idadeP

function tbmCorporal() {
    kg = parseFloat(document.querySelector('#quilo').value)
    altura = parseFloat(document.querySelector('#tam').value)
    idadeP = parseFloat(document.querySelector('#idade').value)

    var somaH = ((66 + 13.7 * kg) + (5 * altura * 100) - (6.8 * idadeP)).toFixed(2)
    var somaM = ((655 + 9.6 * kg) + (1.8 * altura * 100) - (4.7 * idadeP)).toFixed(2)

    document.querySelector('#ResultadoTbm').innerHTML = ''

    if (isNaN(somaH) || isNaN(somaM)) {
        document.querySelector("#ResultadoTbm").innerHTML += "<p> Por favor, escreva um valor válido! 'Ex: 1.00'</p>"
        return
    }else{
        document.getElementById('ResultadoTbm').innerHTML = 'Agora escolha o seu gênero'

        setTimeout(function(){
            document.getElementById('ResultadoTbm').innerHTML = ''
        }, 3000)
    }
}

function resultadoHomem() {
    if (!isNaN(kg) && !isNaN(altura) && !isNaN(idadeP)) {
        const somaH = (66 + 13.7 * kg) + (5 * altura * 100) - (6.8 * idadeP)
        document.querySelector('.resultadoHomem').innerHTML = "<p> A sua taxa de metabolismo basal do homem é de: " + somaH.toFixed(2) + "</p>"
    } else {
        document.querySelector("#ResultadoTbm").innerHTML += "<p> Por favor, preencha todos os campos com valores válidos!</p>";
    } 
}

function resultadoMulher() {
    if (!isNaN(kg) && !isNaN(altura) && !isNaN(idadeP)) {
        const somaM = (655 + 9.6 * kg) + (1.8 * altura * 100) - (4.7 * idadeP)
        document.querySelector('.resultadoMulher').innerHTML = "<p> A sua taxa de metabolismo basal da mulher é de: " + somaM.toFixed(2) + " </p>"
    } else{
        document.querySelector("#ResultadoTbm").innerHTML += "<p> Por favor, preencha todos os campos com valores válidos!</p>"
    }
}

homem.addEventListener("click", resultadoHomem)
mulher.addEventListener("click", resultadoMulher)