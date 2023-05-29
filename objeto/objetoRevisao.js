const produto = new Object;
produto.name = "Cadeira";
produto["Marca do Produto"] = "Generica"
produto.preco = 3.50;

console.log(produto);
delete produto.preco;
delete produto["Marca do Produto"];
console.log(produto);

const carro = {
    modelo: "Fusca",
    valor: 2000,
    proprietario: {
        nome: "João",
        idade: 30,
        endereco: {
            logradouro: "Rua ABC",
            numero: 123
        }
    },
    condutores: [{
        nome: "João",
        idade: 30
    }, {
        nome: "Maria",
        idade: 20
    }],
    calcularValorSeguro: function () {

    }
}

console.log(carro.proprietario['endereco']["logradouro"]);
console.log(carro.condutores[0].nome); 