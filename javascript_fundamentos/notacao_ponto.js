const obj1 = {};
obj1.nome = "Bola";
// obj1['nome'] = "Bola2";
console.log(obj1);

function Obj(nome) {
    this.nome = nome;
    this.exec = function () {
        console.log("Executed");
    }
}

const obj2 = new Obj("cadeira");
const obj3 = new Obj("Mesa");
console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec();