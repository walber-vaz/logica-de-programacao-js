const notas = [7, 8, 3, 5, 10, 9, 8, 8];

let valores = '';

// foreach
// Se você colocar 'of' ele ira acessar os valores 
for (let nota of notas) {
  // Esta pegando os valores do indice do array e passando para valores.
  valores += nota + ' ';
};

console.table(`Valores dos indices do array => ${valores}`);

let indices = '';

// Se você usar 'in' ele ira acessar o indices.
for (let indice in notas) {
  indices += indice + ' ';
};

console.log(`Os indices do array => ${indices}`);