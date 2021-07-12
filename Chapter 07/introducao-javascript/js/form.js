var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#formulario-adiciona");

    var paciente = obtermPacienteDoFormulario(form);

    var pacienteTr = montaTr(paciente);

    if (!validaPaciente(paciente)) {
        console.log("Paciente inválido");
        return;
    };

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();
});

function obtermPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    var nomeTd = montaTd(paciente.nome, "info-nome");
    var pesoTd = montaTd(paciente.peso, "info-peso");
    var alturaTd = montaTd(paciente.altura, "info-altura");
    var gorduraTd = montaTd(paciente.gordura, "info-gordura");
    var imcTd = montaTd(paciente.imc, "info-peso");

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente) {

    var pesoEValido = 0;
    var alturaEvalida = true;

    if (validaPeso(paciente.peso)) {
        pesoEValido = true;
    } else {
        erroPeso = 1;
        mensagensDeErro(pesoEValido, erroPeso);
    }
}

function mensagensDeErro(boleano, valorErro) {
    switch (codigoErro = boleano + valorErro) {
        case 1:
            return console.log("Erro no peso");
    }
}

