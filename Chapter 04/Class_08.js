
class Cliente {
    constructor(nome, cpf){
        this.nome = nome;
        this.cpf = cpf;
    }
}

class ContaCorrente{
    constructor(agencia, saldo){
        this.agencia = agencia;
        this.saldo = saldo;
    }

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
            return valor;
        } else {
        }
    }

    depositar(valor){
        if (valor <= 0 ) {
            return;
        }
        this.saldo += valor;
    }
}

let cliente1 = new Cliente("Joamir", 00100100101);

contaCorrenteJoamir = new ContaCorrente();
contaCorrenteJoamir.saldo = 1000;
contaCorrenteJoamir.agencia = 1010;

contaCorrenteJoamir.sacar(10);
contaCorrenteJoamir.depositar(100);
console.log(contaCorrenteJoamir);

