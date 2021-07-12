var titulo = document.querySelector(".titulo");
titulo.textContent = "Nutricionista Aparecida";

var pacientesLista = window.document.querySelectorAll(".paciente");

for (var i = 0; i < pacientesLista.length; i++) {
    var paciente = pacientesLista[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEValido = validaPeso(peso);
    var alturaEvalida = validaAltura(altura);

    if (!pesoEValido) {
        console.log("Peso inválido");
        pesoEValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEvalida) {
        console.log("Altura inválida");
        alturaEvalida = false;
        tdImc.textContent = "Altura Inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaEvalida && pesoEValido) {
        var imc = calculaImc(peso, altura)
        tdImc.textContent = calculaImc(peso, altura);
    }
}

function validaPeso(peso){
    if (peso >= 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if (altura >= 0 && altura <= 3.0){
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}
