// Essa função recebe como parametro
// uma função, numero, numero
function executar(fn, num1 = 0, num2 = 0) {
  if (typeof fn == 'function') {
    console.log(fn(num1, num2));
  };
};

function somar(a, b) {
  return a + b;
};

function subtrair(a, b) {
  return a - b;
};

function multi(a, b) {
  return a * b;
};

// Erro por que a função somar foi passada para função executar sem parametros.
// Agora se declara valores fixo na função executar passando para função somar.
executar(somar, 90, 50);
executar(subtrair, 90, 50);
executar(multi, 90, 50);