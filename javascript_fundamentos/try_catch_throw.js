function tratarErroELancar(erro) {
    // throw new Error('Erro');
    throw {
        name: erro.name,
        msg: erro.message,
        date: new Date()
    }
}

function ImprimirNome(obj) {
    try {
        console.log(obj.name.toUpperCase() + "!!!");
    } catch (e) {
        tratarErroELancar(e);
    }
}

const obj = { nome: "Leonardo" };
ImprimirNome(obj);