for (let letra of "Leonardo") {
    console.log(letra);
}

const assuntos = ["leonardo", "Gabriel", "Lucas"];

for (let nomes of assuntos) {
    console.log(nomes);
}
for (let nomes in assuntos) {
    console.log(nomes);
}

const assuntoMap = new Map([
    ["Map", { abordado: true }],
    ["Set", { abordado: true }],
    ["Promise", { abordado: false }],
]);

for (let chave of assuntoMap.keys()) {
    console.log(chave);
}

for (let chave of assuntoMap.values()) {
    console.log(chave);
}

for (let [ch, vl] of assuntoMap.entries()) {
    console.log(ch, vl);
}