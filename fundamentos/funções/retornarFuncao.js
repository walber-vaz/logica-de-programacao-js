function retornaUmaFuncao() {
  function bomDia() {
    return "Bom, Dia!!";
  };

  return bomDia;
};

// Retornando uma função aparti de uma função.
console.log(retornaUmaFuncao); // Esta retornando a função retornaUmaFuncao
console.log(retornaUmaFuncao()); // Esta retornando função bomDia
console.log(retornaUmaFuncao()()); // Esta retornando a função bomDia dentro da função retornaUmaFuncao