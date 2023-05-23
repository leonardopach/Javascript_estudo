let num = [1, 2, 3, 4, 5, 6, 7];

let somar = num.map(el => el * 2);

let reduzir = somar.reduce((so, el) => so + el);

const result = num.map(el => el * 3).reduce((cont, el) => cont + el);

console.log(reduzir);
console.log(result);