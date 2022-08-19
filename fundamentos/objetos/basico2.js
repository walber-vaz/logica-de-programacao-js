const produto = {
    nome: 'Ipad',
    preco: 5600,
    desconto: 0.15,
    precoComDesconto: function() {
        // this -> e equivalente a falar produto.preco, se refere ao objeto.
        return this.preco * (1 - this.desconto);
    }
};

console.log(`Valor final do produto: ${produto.nome} R$${produto.precoComDesconto()}.`);