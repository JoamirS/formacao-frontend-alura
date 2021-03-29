import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js"

const clienteUm = new Cliente();
clienteUm.nome = "Joamir";
clienteUm.CPF = 29765158327;

const contaDoJoamir = new ContaCorrente();
contaDoJoamir.agencia = 1001;
contaDoJoamir.saldo = 0;
contaDoJoamir.depositar(500);

console.log(clienteUm.nome);
console.log(clienteUm.CPF);


console.log("A conta do Joamir possui R$ " + contaDoJoamir.saldo + " de Saldo");
