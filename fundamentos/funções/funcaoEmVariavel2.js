function subtrair(a, b) {
  return a - b;
};

// Pode armazenar uma função ja declarada dentro de uma variável
const subtracao = subtrair;

// você pode chamar tanto subtracao quanto subtrair
console.log(subtrair(5, 2));
console.log(subtracao(5, 2));