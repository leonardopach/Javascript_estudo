
let numero = 1;
{
    let numero = 2;
    console.log("dentro: ", numero);
}
console.log("fora: ", numero);

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

const funcs = [];

for (let i = 0; i < 10; i++) {
    funcs.push(() => console.log(i))
}

funcs[2]();
funcs[8]();