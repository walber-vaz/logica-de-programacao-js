const client = {
    codigo: 16532,
    nome: 'Ana',
    vip: true,
    endereco: {
        logadoro: 'Rua abc',
        numero: 123,
        complemento: 'Apto 1 bloco 1',
        pontosRef: [
            { nome: 'Hospital x', muitoProximo: true },
            { nome: 'Shopping y', muitoProximo: false }
        ]
    },
    nomeFilhos: [
        'Bia',
        'Pedro',
        'João'
    ]
};

console.log(client.endereco.logadoro)
console.log(client.endereco.pontosRef[0].muitoProximo)