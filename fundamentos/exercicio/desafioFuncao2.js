// criar função recebe parametros(nota) -> Retorna o conceito
function notasAlunos(nota) {
  if (nota === 10) {
    return 'A+';
  } else if (nota === 9) {
    return 'A';
  } else if (nota === 8) {
    return 'B+';
  } else if (nota === 7) {
    return 'B';
  } else if (nota === 6) {
    return 'C+';
  } else if (nota === 5) {
    return 'C';
  } else if (nota === 4) {
    return 'D+';
  } else if (nota === 3) {
    return 'D';
  } else if (nota === 2) {
    return 'E+';
  } else if (nota === 1) {
    return 'E';
  } else if (nota === 0) {
    return 'F';
  } else if (nota < 0) {
    return null;
  };
};

console.log(notasAlunos(-1));