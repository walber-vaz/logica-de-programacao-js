// Operadores lógicos E OU
let temDinheiro = true;
let estaEnsolarado = true;
let carroEstaGaragem = true;

/**
 *      OPERADOR &&(E)
 *  Somente as duas operações sendo true que vai retorna: true
 */

let resultadoE = '#1 (AND) - vai pro shopping? ';
resultadoE += temDinheiro && estaEnsolarado;
console.log(resultadoE)


/**
 *      OPERADOR ||(OU)
 *  Retorna true se somente umas das operações for true
 */

let resultadoOU = '#2 (OR) - vai para shopping? ';
resultadoOU += estaEnsolarado || carroEstaGaragem;
console.log(resultadoOU);

/**
 *    OPERADOR !(NEGAÇÃO)
 */

console.log('Não verdadeiro: ' + !true);
console.log('Não falso: ' + !false);