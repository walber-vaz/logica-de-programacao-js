// Função passando como parametro para outra função
function executar(fn) {
  // Verificando que foi passado como parametro para função e mesmo uma função
  if (typeof fn === 'function') {
    // Pegando o retorno da função e jogando dentro console.log
    console.log(fn());
  };
};

function bomDia() {
  return 'Bom dia';
};

// Para passar a função como parametro e so tira os ().
executar(bomDia);