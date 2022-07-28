const nota1 = 7.8;
const nota2 = 3.1;
const nota3 = 6.7;

// Concule as 2 maiores media da aluno
// Aprovador nota for maior ou igual a 7
// Recuperação se nota for maior ou igual a 4 e menor 7
// Reprovadpr se nota for menor que 4

function menorNota(n1, n2) {
  return n1 <= n2 ? n1 : n2;
};

function media(n1, n2, n3) {
  const minimo = menorNota(n1, menorNota(n2, n3));

  if (minimo === n1) {
    return (n2 + n3) / 2;
  } else if (minimo === n2) {
    return (n1 + n3) / 2;
  } else {
    return (n1 + n2) / 2;
  };
};

function mediaEstatos(media) {
  if (media >= 7) {
    return "Aprovado";
  } else if (media >= 4 && media < 7) {
    return "Recuperação";
  } else if (media < 4) {
    return "Reprovado";
  };
};

const mediaFinal = media(nota1, nota2, nota3);
const estatos = mediaEstatos(mediaFinal);

console.log(`O resultado do aluno é: ${estatos}`);