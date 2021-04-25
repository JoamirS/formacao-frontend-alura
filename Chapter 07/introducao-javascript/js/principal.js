var titulo = document.querySelector(".titulo");
console.log(titulo);
console.log(titulo.textContent);

titulo.textContent = "Nutricionista Aparecida";

var paciente = window.document.getElementsByClassName("primeiro-paciente");
var tdPeso = window.document.querySelector(".info-peso");
var peso = tdPeso.textContent;
var tdAltura = window.document.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = window.document.querySelector(".info-imc");

var pesoEValido = true;
var alturaEvalida = true;

if (peso < 0 || peso > 1000){
    console.log("Peso inválido");
    pesoEValido = false;
    tdImc.textContent = "Peso inválido"
}

if (altura < 0 || altura > 3.00){
    console.log("Altura inválida");
    alturaEvalida = false;
    tdImc.textContent = "Altura Inválida"
}

if (alturaEvalida && pesoEValido){
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}

