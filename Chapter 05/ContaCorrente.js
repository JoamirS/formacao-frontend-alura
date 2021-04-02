import { Cliente } from "./Cliente.js";

 export class ContaCorrente {
    static totalDeContas = 0;
    agencia;
    _cliente;

    set cliente(novoValor){
        if (novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
            
    }

    get cliente(){
        return this._cliente;
    }

    _saldo = 0;

    get saldo(){
        return this._saldo;
    }

    constructor(cliente, agencia){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.totalDeContas++;
    }

    sacar(valor){
        if (this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0){
            return;
        }
        this._saldo += valor;
    }

    transferir(valorTransferencia, contaDestino){
        const valorSacado = this.sacar(valorTransferencia);
        contaDestino.depositar(valorSacado)
    }
}