 export class ContaCorrente {
    agencia;
    cliente;
    saldo;
    
    sacar(valor){
        if (this.saldo >= valor){
            this.saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0){
            return;
        }
        this.saldo += valor;
    }

    transferir(valorTransferencia, contaDestino){
        const valorSacado = this.sacar(valorTransferencia);
        contaDestino.depositar(valorSacado)
    }
}