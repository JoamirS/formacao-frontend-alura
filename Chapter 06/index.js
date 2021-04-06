import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./Conta/ContaCorrente.js"
import {ContaPoupanca} from "./Conta/ContaPoupanca.js";
import {Gerente} from "./Funcionario/Gerente.js"
import {Diretor} from "./Funcionario/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rogrigo", 10000, 12345678900);
diretor.cadastrarSenha("12345678");
const gerente = new Gerente("Ricardo", 5000, 64387730340);
gerente.cadastrarSenha("123456789");

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "12345678");
console.log(diretorEstaLogado);
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "12345678");
console.log(gerenteEstaLogado);
