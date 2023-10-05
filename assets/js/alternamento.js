var divAberta = 1

function btnDiv(numero) {
    var imc = document.querySelector(".input-imc")
    var agua = document.querySelector(".input-agua")
    var tbm = document.querySelector(".input-tbm")

    if (numero === 1 && divAberta !== 1) {
        imc.style.display = "block";
        agua.style.display = "none";
        tbm.style.display = "none";
        divAberta = 1;
    } else if (numero === 2 && divAberta !== 2) {
        imc.style.display = "none";
        agua.style.display = "block";
        tbm.style.display = "none";
        divAberta = 2;
    } else if (numero === 3 && divAberta !== 3) {
        imc.style.display = "none";
        agua.style.display = "none";
        tbm.style.display = "block";
        divAberta = 3;
    }
}