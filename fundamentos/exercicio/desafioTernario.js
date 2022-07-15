const a = 8;
const b = 2;

const op = '*'; // + - / *

const result = op === '+' ? a + b : op === '-' ? a - b : op === '/' ? a / b : a * b;

console.log(result);