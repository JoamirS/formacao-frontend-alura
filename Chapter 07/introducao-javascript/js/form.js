var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#formulario-adiciona");

    alturaForm = form.altura.value;
    pesoForm = form.peso.value;
    gorduraForm = form.gordura.value;
    nomeForm = form.nome.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nomeForm;
    pesoTd.textContent = pesoForm;
    alturaTd.textContent = alturaForm;
    gorduraTd.textContent = gorduraForm;
    imcTd.textContent = calculaImc(peso, altura);

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
}
)