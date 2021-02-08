console.log("Trabalhando com listas");

const salvador = "Salvador";
const saoPaulo = "São Paulo";
const rioDeJaneiro = "Rio";

// Criando uma lista com os destinos possíveis, inserindo os valores das coonstantes nela.
const listaDeDestinos = new Array(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

// Inserindo um dado na lista após ela ser declarada.
listaDeDestinos.push("São Luís");
console.log(listaDeDestinos);

/* Removendo um item da lista através do comando splice. 2 é a posição do item que desejamos
deletar, e o 1 é a quantidade de items que queremos deletar a partir da posição escolhida.
*/
listaDeDestinos.splice(2, 1);
console.log(listaDeDestinos);

// Acessar um elemento específico da lista.

console.log(listaDeDestinos[1]);