function sempreRetornaUm() {
  return 1;
};

function textoOuNumero(retornaTexto) {
  // if (retornaTexto) {
  //   return "Sou um texto";
  // } else {
  //   return 123;
  // }
  return retornaTexto ? "Sou texto" : 123;
}

console.log(textoOuNumero(false));