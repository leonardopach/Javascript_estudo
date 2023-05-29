const pessoa = {
    nome: 'Ana',
    idade: 2,
    peso: 13
}
console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`);
});

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: "01/02/2019"
});

pessoa.dataNascimento = "01/01/2017";
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));
