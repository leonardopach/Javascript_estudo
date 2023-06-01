const fs = require('fs');

const produto = {
    nome: 'Caneta',
    preco: 7.99,
    fragil: true
};

fs.writeFile(__dirname + "\\arquivoGerado.json", JSON.stringify(produto), err => {
    if (err) {
        console.error(err);
    } else {
        console.log("Arquivo salvo");
        const conteudo = fs.readFileSync(__dirname + "\\arquivoGerado.json");
        console.log(conteudo.toString());
    }
});

