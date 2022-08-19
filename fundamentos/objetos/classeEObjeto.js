class Data {
    // dia = 1
    // mes = 1
    // ano = 1970
    
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    };

    exibirData() {
        return `${this.dia}/${this.mes}/${this.ano}`
    };
};

const d1 = new Data();
const d2 = new Data(02, 12, 2022);

console.log(d1);
console.log(d2);
console.log(d2.exibirData());