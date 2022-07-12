// Trocar os valores... a = 94, b = 7 
let a = 7;
let b = 94;

// Opção 1
// let tmp = a;
// a = b;
// b = tmp;

// Opção 2
[a, b] = [b, a];

console.log(`Os valores das variáveis: a => ${a} e b => ${b}`)