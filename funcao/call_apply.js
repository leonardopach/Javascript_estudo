function getPreco(impost = 0, moeda = 'R$') {
    return `${this.nome} - ${moeda} ${this.preco * (1 - this.desc) * (1 + impost)}`;
}

const produto = {
    nome: "Notebook",
    preco: 2499,
    desc: 0.15,
    getPreco
}
console.log(produto.getPreco());

const carro = { nome: "HB20", preco: 49990, desc: 0.20 };

console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

console.log(getPreco.call(carro, 0.17, "$"));
console.log(getPreco.apply(carro, [0.24, "$"]));