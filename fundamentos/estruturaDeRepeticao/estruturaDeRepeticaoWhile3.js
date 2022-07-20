const futuro = Date.now() + 2000;
let quantidade = 0;

while (Date.now() < futuro) {
  quantidade++;
}

console.log(`Qtd: ${quantidade}`);
