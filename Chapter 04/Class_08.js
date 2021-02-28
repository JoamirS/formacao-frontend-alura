class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
            console.log("Valor sacado com sucesso.\n O valor sacado foi: " + valor);
            console.log("Seu saldo: " + this.saldo)
        } else {
            console.log("Você não possui saldo suficiente para este saque.")
        }
    }
}

const cliente1 = new Cliente();
cliente1.cpf = 00100100101;
cliente1.nome = "Joamir";

contaCorrenteJoamir = new ContaCorrente();
contaCorrenteJoamir.saldo = 0;
contaCorrenteJoamir.agencia = 1010;
contaCorrenteJoamir.sacar(10);
