/*
    Criar um objeto data ele deve ter 3 atributos {dia, mes, ano}
    método exibir ele vai retorna dia/mes/ano
*/
const Data = {
    mes: 'Agosto',
    dia: 19,
    ano: 2022,
    dataCompleta: function () {
        return `Data: ${this.dia}/${this.mes}/${this.ano}`
    }
}

console.log(Data.dataCompleta());