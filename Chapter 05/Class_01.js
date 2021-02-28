class Client {
    name;
    CPF;
}

class Account {
    agency;
    balance;
    
    withdrawMoney(value){
        if (this.balance = value){
            this.balance -= value;
        }
    }
}

const clientOne = new Client();
clientOne.name = "Ricardo";
clientOne.CPF = 05605605600;

const clientTwo = new Client();
clientTwo.name = "Alice";
clientTwo.CPF = 05205205200;

const joamirAccount = new Account;
joamirAccount.balance = 0;
joamirAccount.agency = 1001;

console.log(clientOne);
console.log(clientTwo)
