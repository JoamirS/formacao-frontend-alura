console.log("Trabalhando com condicionais");

const listaDeDestinos = new Array("Salvador", "São Paulo", "Rio de Janeiro");
console.log(listaDeDestinos);

listaDeDestinos.push("São Luís");
console.log(listaDeDestinos);

const idadeComprador = 21;
console.log("Destinos possíveis:");
console.log(listaDeDestinos);

if (idadeComprador >= 18) {
    console.log("Comprador maior de idade");
    console.log("Destinos possíveis para você: ");
    console.log(listaDeDestinos);
} else {
    console.log("Você não está apto a realizar compras por ser menos de idade.")
}