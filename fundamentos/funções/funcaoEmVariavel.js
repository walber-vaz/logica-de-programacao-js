// Declaração de Função normal
// function somar(a, b) {
//   return a + b;
// };

// Função sem nome mais vai ser chamada pelo javascript
// (function (a, b) {
//   return a + b;
// })();

// Declaração de Funções dentro de variável
// (Armazenar uma função dentro de uma variável)
// Funçõo anômina
const somar = function (a, b) {
  return a + b;
};

console.log(somar(30, 56));