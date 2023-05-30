function MeuObjeto() { }
console.log(MeuObjeto.prototype);

const obj1 = new MeuObjeto;
const obj2 = new MeuObjeto;
console.log(obj1.__proto__ === obj2.__proto__);
console.log(MeuObjeto.prototype === obj1.__proto__);

MeuObjeto.prototype.nome = "Roberto";
MeuObjeto.prototype.falar = function () {
    console.log(`Meu nome é ${this.nome}`);
}

obj1.falar();
obj2.nome = "Leonardo";
obj2.falar();