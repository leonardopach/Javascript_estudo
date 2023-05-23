function escrever() {
    console.log("Hello moto");
}

setInterval(() => {
    escrever()
}, 1000);

setTimeout(escrever, 3000);

