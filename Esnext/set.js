// não aceita repeticação/ não indexada
const times = new Set();
times.add("Vasco");
times.add("São paulo").add("Palmeiras").add("Corinthias");
times.add("Flamengo");
times.add("Vasco");

console.log(times);

const nomes = ["Leonardo", "Gabriel", "Lucas", "Julia", "Lucas"];
const nomesSet = new Set(nomes);
console.log(nomesSet);
