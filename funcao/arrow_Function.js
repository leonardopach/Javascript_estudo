let dobro = function (a) {
    return 2 * a;
}

console.log(dobro(5));

const triple = (a) => {
    return 3 * a;
}

dobro = a => 4 * a;

console.log(dobro(5));
console.log(triple(5));

function Pessoa() {
    this.idade = 0;

    setInterval(() => {
        this.idade++;
        console.log(this.idade);
    }, 1000);
}

let comparaComThis = function (param) {
    console.log("Function: ", this === param);
}

comparaComThis(global);

const obj = {};
comparaComThis = comparaComThis.bind(obj);
comparaComThis(global);
comparaComThis(obj);

let comparaComThisArrow = param => console.log("arrow Function: ", this === param);

comparaComThisArrow(global);
comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow(module.exports);
comparaComThisArrow(obj);