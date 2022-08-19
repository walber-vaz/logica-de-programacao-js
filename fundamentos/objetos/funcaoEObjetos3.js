// Função construtora
function Data(dia = 1, mes = 1, ano = 2022) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
    this.exibirData = function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    };
};

/*
    Quando você criar uma função usar a chamada da função junto da palavra new
    Função Contrutora -> Cada chamada de função criar novo objeto.
*/

const d1 = new Data();
const d2 = new Data(9, 11, 2022);
const d3 = new Data(8, 10, 2022);

console.log(d1.exibirData());
console.log(d2.exibirData());
console.log(d3.exibirData());

console.log(d1);
console.log(d2);
console.log(d3);
