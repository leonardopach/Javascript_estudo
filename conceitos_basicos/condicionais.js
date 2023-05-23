let idade = 18;

if (idade >= 18) {
    console.log("Maior de idade")
} else {
    console.log("Menor de idade")
}

if (1 == "1") {
    console.log("Sim, 1 == '1'");
} else {
    console.log("Não");
}

if (1 === "1") {
    console.log("Sim, 1 === '1'");
} else {
    console.log("Não");
}

let valor = "F".toLowerCase();
switch (valor) {
    case "m":
        console.log("Masculino");
        break;
    case "f":
        console.log("Feminino");
        break;
    default:
        console.log("Desconhecido");
        break;
}