const numeros = [1, 2, 3, 4, 5];

numeros.forEach(function (e, i, array) {
    // Para cda elemento do array ele vai mostra o console.log
    // se voce passa parametro para função e chamar no console.log ele vai 
    // mostra os valores do elementos do array
    // e segundo parametro passado para forEach e o indice do array
    // terceiro parametro e o array completo
    console.log(e, i, array);
});

numeros.forEach((e) => {
    console.log(e);
});


// for(let n of numeros) {
//     console.log(n)
// }

// for (let i = 0; i < numeros.length; i++) {
//     const element = numeros[i];
//     console.log(element)
// }