const alunos = new Array("Cristina", "Lucas", "Bianca", "Samuel", "Pedro");

console.log(alunos);
const numeros = [1, 2, 3, 4, 5, 6];

let valores = [...numeros, 7];

const recorte = valores.slice(0, 5);

valores[2] = 100;
console.log(numeros);
console.log(valores);
console.log(recorte);

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);

console.log(fruits);
fruits.sort();
console.log(fruits);
console.log(citrus);

let idades = [5, 1, 8, 12, 44, 87];
let numFloat = [5.2, 1.4, 8.5, 12.2, 44.1, 87.2];

idades.sort((a, b) => {
    return a - b;
});

numFloat.sort((a, b) => {
    return a - b;
});

numFloat.splice(2, 1);
console.log(numFloat);
console.log(idades);