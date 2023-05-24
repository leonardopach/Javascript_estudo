const pessoa = {
    nome: 'Ana',
    idade: 25,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 123
    }
}

const { nome, idade } = pessoa;

console.log(nome, idade);

const { nome: n, idade: i } = pessoa;

console.log(n, i);

const { endereco: { logradouro, numero } } = pessoa;
console.log(logradouro, numero);

const [n1, n2, n3] = [1, 2, 3];
console.log(n1, n2, n3);

const [, [, nota]] = [[, 8, 8], [9, 6, 8]];

console.log(nota);

let valor1 = 10;
let valor2 = 20;

[valor1, valor2] = [valor2, valor1]

console.log(valor1, valor2);

function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

const obj = { max: 50, min: 30 };
console.log(rand(obj));
console.log(rand({ min: 100 }));
console.log(rand({}));

function randArray([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min];
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(randArray([10]));
console.log(randArray([10, 50]));
