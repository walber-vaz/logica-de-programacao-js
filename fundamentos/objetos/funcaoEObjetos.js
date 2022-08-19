function criarData(dia, mes, ano) {
    return {
        dia: dia,
        mes: mes,
        ano: ano,
        exibirData: function () {
            return `${this.dia}/${this.mes}/${this.ano}`
        }
    };
};


const d1 = criarData(01, 01, 2022);
const d2 = criarData(02, 02, 2022);
const d3 = criarData(03, 03, 2022);

console.log(d1.exibirData());
console.log(d2.exibirData());
console.log(d3.exibirData());