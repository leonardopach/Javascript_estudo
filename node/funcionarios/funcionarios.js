const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");

axios.get(url).then((res => {
    const funcionarios = res.data;

    const mulherChinesa = funcionarios.filter(e => e.pais == "China");
    const menorSalario = Math.min(...funcionarios.map((e) => e.salario));
    console.log(menorSalario.filter(mulherChinesa));
    // console.log(mulherChinesa);
    // console.log(funcionarios);
}))