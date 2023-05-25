const fabricantes = ["Mercedes", "Audi", "BMW"];

function imprimir(nome, indice) {
    console.log(`${indice + 1}) ${nome}`);
}

fabricantes.forEach(imprimir);

fabricantes.forEach((nome, indice) => {
    // console.log(`${indice + 1}) ${nome}`);
});
fabricantes.forEach(function (nome, indice) {
    // console.log(`${indice + 1}) ${nome}`);
});

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

// sem call back
let notasBaixas = [];
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i]);
    }
}

console.log(notasBaixas);

// com call back

const notasBaixas2 = notas.filter(nota => nota <= 7);
console.log(notasBaixas2);