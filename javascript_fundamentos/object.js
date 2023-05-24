const prod1 = {};

prod1.nome = "Celular Ulta megan";
prod1.estado = "Bahia";
prod1.preco = 2999.99;
prod1["Desconto"] = 0.50;

console.log(prod1);

const prod2 = {
    nome: "Caderno",
    preco: 2999,
    Desconto: 0.50,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
};

console.log(prod2);