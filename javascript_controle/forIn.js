const notas = [10, 9, 10, 8, 7, 5];

for (x in notas) {
    console.log(notas[x]);
}

const pessoa = {
    nome: 'Ana',
    idade: 20,
    peso: 80
};

for (atributo in pessoa) {
    console.log(`${atributo}: ${pessoa[atributo]}`);
}

externo: for (a in notas) {
    for (b in notas) {
        if (a == 2 && b == 3) break externo;
        console.log(`Par = ${a}, ${b}`);
    }
}