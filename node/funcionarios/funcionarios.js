const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");

const chines = e => e.pais == "China";
const mulher = f => f.genero === "F";
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual;
}
axios.get(url).then((res => {
    const funcionarios = res.data;

    const func = funcionarios
        .filter(chines)
        .filter(mulher)
        .reduce(menorSalario);

    console.log(func);
}))
