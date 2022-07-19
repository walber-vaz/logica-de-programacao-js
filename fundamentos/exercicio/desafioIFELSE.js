const a = 10;
const b = 28;
const op = '%'; // + - * / %

let res;

if (op === '*') {
  res = a * b;
} else if (op === '+') {
  res = a + b;
} else if (op === '-') {
  res = a - b;
} else if (op === '/') {
  res = a / b;
} else {
  res = a % b;
}

console.log(res);
