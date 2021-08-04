var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#formulario-adiciona");

    var paciente = obtermPacienteDoFormulario(form);

    var pacienteTr = montaTr(paciente);

    var pacienteEmValidacaoNulo = validaPacienteNull(paciente);
    console.log(pacienteEmValidacaoNulo);

    if (pacienteEmValidacaoNulo.length > 0) {
        var selecionaMensagemErro = document.querySelector("#mensagem-erro");
        var criaUl = criaUlBranco();

        for (i = 0; i < pacienteEmValidacaoNulo.length; i++){
            var itemLi = criaLiBranco(pacienteEmValidacaoNulo[i]);
            criaUl.appendChild(itemLi);
            console.log(itemLi);
        }
        selecionaMensagemErro.innerHTML = criaUl;
        
        return;
    }


    // Criar uma função monta lista em branco, para que toda vez que um campo fique
    // em branco, criar uma li em HTML, para que fique um embaixo do outro.

    var pacienteEmValidacaoValor = validaPacienteValor(paciente);

    if (pacienteEmValidacaoValor == 1) {
        var selecionaMensagemErro = document.querySelector("#mensagem-erro");
        var tipoMensagemErro = mensagemErroValor(1);
        selecionaMensagemErro.textContent = tipoMensagemErro;
        return;
    } else if (pacienteEmValidacaoValor == 2) {
        var selecionaMensagemErro = document.querySelector("#mensagem-erro");
        var tipoMensagemErro = mensagemErroValor(2);
        selecionaMensagemErro.textContent = tipoMensagemErro;
        return;
    } else if (pacienteEmValidacaoValor == 3) {
        var selecionaMensagemErro = document.querySelector("#mensagem-erro");
        var tipoMensagemErro = mensagemErroValor(3);
        selecionaMensagemErro.textContent = tipoMensagemErro;
        return;
    }
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();
});

function criaLiBranco(dado){
    var li = document.createElement("li");
    li.textContent = dado;
    return li;
}

function criaUlBranco(){
    var ul = document.createElement("ul");
    return ul;
}

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

function validaPacienteValor(paciente) {
    codigoDoErro = 0
    erroPeso = validaPeso(paciente.peso);

    if (erroPeso == false) {
        codigoDoErro = 1;
    }

    erroAltura = validaAltura(paciente.altura);

    if (erroAltura == false) {
        codigoDoErro = 2;
    }

    if (erroPeso == false && erroAltura == false) {
        codigoDoErro = 3;
    }
    return codigoDoErro;
}

function validaPacienteNull(paciente) {
    listaComErros = [];

    if (paciente.nome.length == 0) {
        listaComErros.push('Nome não pode ser em branco.');
    }

    if (paciente.peso.length == 0) {
        listaComErros.push('Peso não pode ser em branco.');
    }

    if (paciente.altura.length == 0) {
        listaComErros.push('Altura não pode ser em branco.');
    }

    if (paciente.gordura.length == 0) {
        listaComErros.push('Gordura não pode ser em branco.');
    }

    return listaComErros;

}


function mensagemErroValor(codigo) {

    if (codigo == 1) {
        var spanErro = "Peso inválido";
        return spanErro;
    }

    if (codigo == 2) {
        var spanErro = "Altura inválida";
        return spanErro;
    }

    if (codigo == 3) {
        var spanErro = "Altura e peso são inválidos";
        return spanErro;
    }
}