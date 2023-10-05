function imcCorporal() {

      var peso = parseFloat(document.getElementById("kg").value)
      var altura = parseFloat(document.getElementById("altura(m)").value)
      var imc = (peso / (altura * altura)).toFixed(2)

      document.getElementById("ResultadoImc").innerHTML = "";

      if (isNaN(altura) || isNaN(imc)) {
         document.getElementById("ResultadoImc").innerHTML += "<p>Por favor, escreva um valor válido! 'Ex: 1.00'</p>"

      } else {

         var mensagem = ""

         if (imc <= 18.5) {
            mensagem = "<p>Você está abaixo do peso ideal<p/>"

         } else if (imc <= 24.9) {
            mensagem = "<p>Você está no peso no ideal</p>"

         } else if (imc <= 29.9) {
            mensagem = "<p>Você está acima do peso ideal</p>"

         } else {
            mensagem = "<p>Você está com abesidade!</p>"
         }

         document.getElementById("ResultadoImc").innerHTML += mensagem + "Seu IMC é aproximadamente: " + imc;
      }
   } 