const pai = { nome: "Pedro", corCabelo: "preto" };

const filho1 = Object.create(pai);

filho1.nome = "Lucas";
console.log(filho1.corCabelo);
console.log(filho1.nome);

const filho2 = Object.create(pai, {
    nome: { value: "Roberto", writable: false, enumerable: true },
});

console.log(filho2.nome);
filho2.nome = "Silva";
console.log(`${filho2.nome} tem cabelo ${filho2.corCabelo}`);

console.log(Object.keys(filho2));

for (let key in filho2) {
    filho2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`);
}