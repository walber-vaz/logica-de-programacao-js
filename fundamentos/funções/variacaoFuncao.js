// função com parametros e retorno.
function somar(a, b) {
  return a + b;
};

// let result = somar(30, 56);
console.log(somar(30, 56));

// função com parametros e sem retorno
function exibirMultiplicacao(a, b) {
  console.log(a * b);
};

exibirMultiplicacao(10, 21);

// funcção sem parametros e com retorno
function retornaDataAtual() {
  return new Date();
};

console.log(retornaDataAtual());

// funca sem parametros e sem retorno
function exibirHoraAtual() {
  console.log(new Date().getHours());
};

exibirHoraAtual();