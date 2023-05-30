Array.prototype.reduce2 = function (callback) {
    let acumulador = this[0];
    for (let i = 1; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this);
    }
    return acumulador;
}
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const resultado = numeros.reduce2((acc, atual) => {
    return atual + acc;
});

console.log(resultado);