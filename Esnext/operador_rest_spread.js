// operador rest(juntar)/ spread(espalhar)

// usar spread com objeto
const funcionario = { nome: "Maria", salario: 1234 };
const clone = { ativo: true, ...funcionario };
console.log(clone);

// usar spread com array
const grupoA = ["Joâo", "Bianca", "Carla", "Damasco"];
const grupoFinal = ["Final", ...grupoA, "Rafaela"];