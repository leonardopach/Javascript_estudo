console.log(typeof Array, typeof new Array);

let aprovados = new Array("Bia", "Cargar", "Gabriel");
console.log(aprovados);

aprovados = ["Ana", "Carlos", "Lucas"];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

aprovados[3] = "silva";
console.log(aprovados);
aprovados.push("Pedro");
console.log(aprovados);
aprovados.sort();
console.log(aprovados);

aprovador = ["Bia", "Carlos", "Leonardo", "Lucas"];
aprovador.splice(0, 3, "Elementos1");
console.log(aprovador);