// Quando chave eo valor tem mesmo nome pode deixar apenas um nome. Ex: dia: dia -> dia
// Retirar nome function do metodo do objeto
function criarData(dia, mes, ano) {
    return {
        dia,
        mes,
        ano,
        exibirData() {
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