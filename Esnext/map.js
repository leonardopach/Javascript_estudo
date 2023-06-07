const tecnologias = new Map();
tecnologias.set("react", { framework: false });
tecnologias.set("angular", { framework: true });

console.log(tecnologias.react);
console.log(tecnologias.get("react").framework);

const chaveVariadas = new Map([
    [function () { }, "Funcao"],
    [{}, "Objeto"],
    [123, "Numero"],

]);

chaveVariadas.forEach((vl, ch) => {
    console.log(ch);
});

console.log(chaveVariadas.has(123));
chaveVariadas.delete(123);
console.log(chaveVariadas.has(123));
console.log(chaveVariadas.size);
console.log(chaveVariadas);