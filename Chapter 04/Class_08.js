
class Cliente {
    constructor(nome, cpf){
        this.nome = nome;
        this.cpf = cpf;
    }
}

class ContaCorrente{
    constructor(agencia, saldo){
        this.agencia = agencia;
        this.#saldo = saldo;
    }

    sacar(valor){
        if(this.#saldo >= valor){
            this.#saldo -= valor;
            console.log("Valor sacado com sucesso.\n O valor sacado foi: " + valor);
            console.log("Seu saldo: " + this.#saldo);
        } else {
            console.log("Você não possui saldo suficiente para este saque.");
        }
    }

    depositar(valor){
        if (valor > 0 ){
            this.#saldo += valor;
        } else {
            console.log("Valor insuficiente")
        }
            
    }
}

let cliente1 = new Cliente("Joamir", 00100100101);

contaCorrenteJoamir = new ContaCorrente();
contaCorrenteJoamir.saldo = 1000;
contaCorrenteJoamir.agencia = 1010;

contaCorrenteJoamir.sacar(10);
contaCorrenteJoamir.depositar(100);
console.log(contaCorrenteJoamir);

