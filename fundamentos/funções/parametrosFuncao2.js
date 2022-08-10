function somar(a = 0, b = 0, c = 0, d = 0) {
  return a + b + c + d;
}

// Como valor default para uma parametro não passado para função
// e so colocar igualmente um declaração de variavel 'd = 0'

// Se for passado mais parametro para função javascrit ignora os parametro
// passado a mais.
console.log(somar(1, 2, 3, 4, 5, 6));
console.log(somar(1, 2, 3, 4));
console.log(somar(1, 2, 3));
console.log(somar(1, 2));
console.log(somar(1));
console.log(somar());

console.log('Fim');