const valores = [1, 2, 3, 4];

console.log(valores);
console.log(valores[0], valores[1], valores[2], valores[3]);

valores[4] = 10;
console.log(valores);
valores.push({ id: 3 }, false, null, "teste");
console.log(valores);

console.log(valores.pop());
delete valores[0];

console.log(valores);

console.log(typeof valores);