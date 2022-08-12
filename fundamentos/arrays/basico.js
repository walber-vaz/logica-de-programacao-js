const notas = [7.8, 6.7, 10, 9.5, 7.8, 5.8];

console.table(notas) // Mostrando os indices do array
console.log(notas[3]); // Acessando o array aparti de um indice
console.log(notas[8]); // Mostra um indice que não existir no array gera um 'undefined'

notas[4] = 8.7; // Trocando indice 4 do array
console.table(notas);