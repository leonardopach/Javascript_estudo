const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"];

pilotos.pop();
console.log(pilotos);

pilotos.push("Verstappen");
console.log(pilotos);

pilotos.shift(); // remove o primeiro elemento
console.log(pilotos);

pilotos.unshift("Paulo"); // adicionar na primeira posição 
console.log(pilotos);
// slice pode adionar e remover elemtnos 

// adicionar
pilotos.splice(2, 0, "Gol", "Massa");
console.log(pilotos);

//remover
pilotos.splice(2, 1);
console.log(pilotos);

const algunsPilotos = pilotos.slice(2); // retorna um novo array
console.log(algunsPilotos);