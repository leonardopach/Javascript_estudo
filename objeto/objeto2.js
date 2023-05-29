const obj1 = {};
console.log(obj1);

console.log(typeof Object, typeof new Object);
const obj2 = new Object;
console.log(obj2);

// Funções construtoras
function Produto(nome, preco, desconto) {
    this.nome = nome;
    this.preco = preco;
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }
    this.getNome = () => {
        return nome
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15);
console.log(p1.getPrecoComDesconto());
const p2 = new Produto("leonardo");
console.log(p2.getNome());

// Função Factory
function criarProduto(nome, preco, desconto) {
    return {
        nome,
        preco,
        getPrecoComDesconto: () => {
            return preco * (1 - desconto)
        },
        getNome: () => {
            return nome
        }
    }
}

const p3 = criarProduto('Caneta', 7.99, 0.15);
console.log(p3.getPrecoComDesconto());
console.log(p3.getNome());

// Object.create
const filha = Object.create(null);
filha.nome = 'Filha';
console.log(filha.nome);

// funcao retorna JSON
const fromJSON = JSON.parse('{ "info": "Sou um JSON" }');
console.log(fromJSON.info);