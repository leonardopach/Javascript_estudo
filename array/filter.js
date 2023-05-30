Array.prototype.filter2 = function (callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i]);
        }
    }
    return newArray;
}
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];


const resultado = numeros.filter2(e => { return e % 2 == 0 });
console.log(resultado);

let itens = [
    { nome: "Item 1", preco: 10.99, fragil: true },
    { nome: "Item 2", preco: 5.99, fragil: false },
    { nome: "Item 3", preco: 7.49, fragil: true },
    { nome: "Item 4", preco: 12.99, fragil: false },
    { nome: "Item 5", preco: 8.99, fragil: true },
    { nome: "Item 6", preco: 6.49, fragil: false },
    { nome: "Item 7", preco: 9.99, fragil: true },
    { nome: "Item 8", preco: 3.99, fragil: false },
    { nome: "Item 9", preco: 11.49, fragil: true },
    { nome: "Item 10", preco: 4.99, fragil: false }
];

const resultado2 = itens.filter2(e => e.preco >= 10).map(e => e.preco * 2);
console.log(resultado2);