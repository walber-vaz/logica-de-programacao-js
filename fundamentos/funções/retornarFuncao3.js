function somar1(a , b) {
  return a + b;
};

console.log(somar1(5, 4));

// Tecnica Currying
// Currying é o processo de transformar uma função que espera vários argumentos em uma função que espera um único argumento e retorna outra função

// Principio da programação funcional em JavaScript

// função somar2 recebe apena valor do parametro a e return uma função anônima 
// a onde so vai receber o valor de b como parametro so depois que essa função 
// retorna que algoritmo de soma os parametros a + b.

function somar2(a) {
  return function (b) {
    return a + b;
  };
};

// esta passando para função somar2 como paramentro a = 5 e na reposta da somar2 
// e função anônima b = 4
console.log(somar2(5)(4));