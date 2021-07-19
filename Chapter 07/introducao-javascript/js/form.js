var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#formulario-adiciona");

    var paciente = obtermPacienteDoFormulario(form);

    var pacienteTr = montaTr(paciente);

    if (!validaPaciente(paciente)) {
        console.log("Paciente teste inválido");
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
    erroPeso = validaPeso(paciente.peso);

    if (erroPeso == false){
        mensagemErro(0);
    }

    erroAltura = validaAltura(paciente.altura);

    if (erroPeso == erroAltura) {
        return true;
    } else {
        return false;
    }
}

function mensagemErro(codigo){

    if (codigo == 0){
        var spanErro = document.querySelector("#mensagem-erro");
        spanErro.textContent = "Peso inválido";
        return;
    }
}
