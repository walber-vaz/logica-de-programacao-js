function retornaUmaFuncao() {
  // Retornando uma função anômima dentro de outra função 
  return function () {
    return function () {
      return "Boa, tarde!";
    };
  };
};

console.log(retornaUmaFuncao);
console.log(retornaUmaFuncao());
console.log(retornaUmaFuncao()()); // Retorna resultado do retorno da função anônima dentro da função retornaUmaFuncao
console.log(retornaUmaFuncao()()());