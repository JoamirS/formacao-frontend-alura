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

    var pesoEValido = true;
    var alturaEvalida = true;

    if (peso < 0 || peso > 1000) {
        console.log("Peso inválido");
        pesoEValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (altura < 0 || altura > 3.00) {
        console.log("Altura inválida");
        alturaEvalida = false;
        tdImc.textContent = "Altura Inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaEvalida && pesoEValido) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    console.log("Oi eu sou um botao");
}
)
