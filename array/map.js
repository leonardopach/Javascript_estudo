Array.prototype.map2 = function (callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this));
    }
    return newArray;
}
const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.45}',
    '{"nome": "Kit de Lapis", "preco": 33.45}',
];

const resultadoJson = carrinho.map2(e => JSON.parse(e)).map(produto => produto.preco);
console.log(resultadoJson);

const numeros = [1, 2, 3, 4, 5];

let resultado = numeros.map(num => num * 2).map(e => `$R ${parseFloat(e).toFixed(2).replace(".", ",")}`);

console.log(resultado);