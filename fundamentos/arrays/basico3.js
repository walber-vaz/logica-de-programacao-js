// Array e um objeto
// Tudo em JavaScript e um objeto

/**
 * Metodo em uma função que pertence ao um objeto
 * Atributos são dados de um objeto.
 */
console.log(typeof console);
console.log(typeof console.log);

const numeros = [1, 2, 3];

console.log(typeof numeros);

// Metodo que adionar novos elementos ao array
numeros.push(4);
numeros.push(5);
numeros.push(10.98);

console.table(numeros);

// Atributo length - mostra quatidade de elemento de um array
console.log(numeros.length);