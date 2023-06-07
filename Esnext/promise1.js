let a = 1;
console.log(a);


new Promise(cumprirPromessa => {
    cumprirPromessa(["Ana", "Bia", "Carlos"]);
})
    .then(valor => valor[0])
    .then(valor => valor[0])
    .then(console.log);