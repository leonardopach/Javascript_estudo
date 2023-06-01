const moduleA = require("./moduleA");
const moduleB = require("./moduleB");

console.log(moduleA.ateLogo);
console.log(moduleB.bomDia, moduleB.boaNoite());
console.log(moduleB);
console.log(moduleA);

const moduleRequire = require("./pastaA/PastaB/acessarModule");
console.log(moduleRequire.nome);

const https = require("http");
https.createServer((req, res) => {
    res.write("Bom dia");
    res.end();
}).listen(8080);