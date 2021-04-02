import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js"

const clienteUm = new Cliente();
clienteUm.nome = "Joamir";
clienteUm.CPF = 29765158327;

const contaDoJoamir = new ContaCorrente();
contaDoJoamir.agencia = 1001;
contaDoJoamir.saldo = 0;
contaDoJoamir.cliente = clienteUm;

const ClienteDois = new Cliente();
ClienteDois.nome = "Bruce";
ClienteDois.CPF = 80166205311;

const contaDoBruce = new ContaCorrente();
contaDoBruce.agencia = 2002;
contaDoBruce.saldo = 0;
contaDoBruce.cliente = ClienteDois;

contaDoJoamir.depositar(100);
contaDoJoamir.sacar(10);

contaDoJoamir.transferir(10, contaDoBruce);

console.log(contaDoJoamir);
console.log(contaDoBruce);
