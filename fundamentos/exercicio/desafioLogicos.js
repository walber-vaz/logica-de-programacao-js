/**
 * CRIAR 2 EXPRESSÕES
 * que resultar em TRUE (Aritméticos/Relacionais/Lógicos)
 * que resultar em FALSE (Aritméticos/Relacionais/Lógicos)
 */

let num1 = 10;
let num2 = 45;

let somar = num1 + num2;
console.log(
  'Somar entre os números e maior que 40?',
  somar > 40 && somar < 100,
);

let subtracao = num1 - num2;
console.log(
  'Subtração entre os números e menor que 40?',
  subtracao < 40 || subtracao > 1,
);

let num3 = 15;
let num4 = 30;

let divisao = num3 / num4;
console.log(
  'Divisão entre os números e maior que 1?',
  divisao > 1 && divisao !== 0,
);

let multi = num3 * num4;
console.log(
  'Divisão entre os números e menor que 100?',
  multi < 100 || multi === 100,
);
