

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let triple = num.map(el => { return el * 3 });

let pares = triple.filter(el => {
    return el % 2 === 0
});

console.log(triple);
console.log(`Pares: ${pares}`);

const alunos = [
    { nome: "Pedro", nota: 8.5 },
    { nome: "Maria", nota: 10 },
    { nome: "Fernanda", nota: 9.5 },
    { nome: "Ricardo", nota: 7.3 }
];

let passou = alunos.filter(el => {
    return el.nota > 8;
})

console.log(passou);