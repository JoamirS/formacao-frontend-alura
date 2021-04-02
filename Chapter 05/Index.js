import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js"

const clienteUm = new Cliente("Joamir", 29765158327);
const contaDoJoamir = new ContaCorrente(clienteUm, 1001);

const clienteDois = new Cliente("Bruce", 80166205311);
const contaDoBruce = new ContaCorrente(clienteDois, 2002);

contaDoJoamir.depositar(100);
contaDoJoamir.sacar(10);
contaDoJoamir.depositar(500);

let valorParaTrasferir = 50;
contaDoJoamir.transferir(valorParaTrasferir, contaDoBruce);

console.log(contaDoJoamir);
console.log(contaDoBruce);
