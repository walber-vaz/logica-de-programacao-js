let preco = 19.90;
let desconto = 0.4;
let precoDesconto = preco * (1 - desconto);

// Ordem de precedência => ()
console.log(precoDesconto);

let nomeProduto = "Caderno";
let categoria = "Papelaria";

console.log(`Produto ${nomeProduto}, categoria ${categoria}
preço do produto R$${preco}, desconto ${desconto}% => Total: R$${precoDesconto}`);