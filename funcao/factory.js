const prod1 = {
    nome: "Nome",
    preco: 45
}

// factory simples
function criarPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome
    }
}

console.log(criarPessoa("ana", "Maria"));

function criarProduto(nome, preco, qtd) {
    return {
        nome,
        preco,
        qtd
    }
}

console.log(criarProduto("Caneta", 7.99, 10));