const nome = "leonardo";
const template = `
    Olá
    ${nome}`;
console.log(`Olá ${nome}, tudo bom?`);
console.log(template);

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up("Cuidado")}`);
