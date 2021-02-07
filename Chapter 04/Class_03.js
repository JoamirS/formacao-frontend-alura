console.log("Operações Aritméticas")

console.log(10 + 8 * 2);

console.log((10 + 8) * 2);

console.log("Ano " + 2021);

/* O JavaScript não converte automaticamente um número para inteiro, quando é feita uma soma entre
dois números. Já quando é feita outro tipo de operação aritmética, não precisamos converter a String
utilizando a função Parse, por exemplo.
*/

console.log(parseInt("8") + parseInt("8"));
console.log("10" / "2");

// Quando eu realizo uma operação entre um número e uma String, ele retorna um NAN, isto é, Not a Number.

console.log("Ricardo" / "2");