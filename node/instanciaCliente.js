const contadoA = require("./instanciaUnica");
const contadoB = require("./instanciaUnica");

const contadoC = require("./instanciaNova")();
const contadoD = require("./instanciaNova")();

contadoA.inc();
contadoA.inc();
console.log(contadoB.valor);

contadoC.inc();
contadoC.inc();
console.log(contadoD.valor);
console.log(contadoC.valor);