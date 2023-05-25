const soma = function (x, y) {
    return x + y;
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b));
}

imprimirResultado(2, 3);
imprimirResultado(2, 3, soma);
imprimirResultado(15, 5, function (x, y) {
    return x * y;
});
imprimirResultado(15, 5, (x, y) => x / y);

const pessoa = {
    falar() {
        console.log('Bom dia!');
    }
}

pessoa.falar();