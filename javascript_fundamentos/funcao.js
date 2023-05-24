// funcão sem retorno
function imprimirSomar(a, b, ...arg) {
    const result = arg.reduce((acc, curr) => acc + curr, 0);
    console.log(result);
    console.log(a + b);
}

imprimirSomar(3, 2, 5, 3, 4, 5, 6, 7, 8, 9, 10);

// funcão com retorno
function somar(a, b) {
    return a + b;
}

console.log(somar(10, 20));

// colocar uma função numa Variavel
const imprimirResult = function (a, b) { console.log("resultado: ", a + b); }

imprimirResult(10, 20);
// arrow function
const somarArrow = (a, b) => console.log("resultado função arrow : ", a + b);

somarArrow(10, 20);