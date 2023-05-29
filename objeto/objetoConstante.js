const pessoa = { nome: "Leonardo" };
pessoa.nome = "Lucas";
console.log(pessoa);

// não pode
// pessoa = { nome: "Ana" };
// console.log(pessoa);

Object.freeze(pessoa);

pessoa.nome = "Pedro";
console.log(pessoa);

const pessoaConstante = Object.freeze({ nome: "Pedro" });
pessoaConstante.nome = "Lucas";
console.log(pessoaConstante);