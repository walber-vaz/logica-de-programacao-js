const hora = 18;
let saudacao;

if (hora < 12) {
  saudacao = 'Boma dia';
} else {
  if (hora < 18) {
    saudacao = 'Boa tarde';
  } else {
    saudacao = 'Boa noite';
  }
}

console.log(saudacao);
