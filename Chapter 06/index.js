import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import {ContaPoupanca} from "./ContaPoupanca.js";
import {Conta} from "./Conta.js";

const cliente1 = new Cliente("Joamir", 11122233309);
const cliente2 = new Cliente("Harvey", 88822233309);

const contaCorrenteJoamir = new Conta(0, cliente1, 1001);
contaCorrenteJoamir.depositar(500);
contaCorrenteJoamir.sacar(100);

const contaPoupancaHarvey = new Conta(50, cliente2, 1002);

console.log(contaCorrenteJoamir);
console.log(contaPoupancaHarvey);