// Arrow function
const soma = (a, b) => a + b;
console.log(soma(10, 5));

// Arrow function (this)
const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind({});
lexico1();
lexico2();

// Parametro default
function log(texto = "Noode") {
    console.log(texto);
}

log();
log("Sou mais forte");

// operador rest
function total(...numeros) {
    let total = 0;
    numeros.forEach(numero => total += numero);
    return total;
}

console.log(total(1, 2, 3, 4, 5));