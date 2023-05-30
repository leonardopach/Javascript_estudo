const ferrari = {
    modelo: 'F40',
    velMax: 324
};

const volvo = {
    modelo: 'V40',
    velMax: 200
};

console.log(ferrari.__proto__);
console.log(ferrari.__proto__ === Object.prototype);
console.log(volvo.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);

function MeuObjeto() { }
console.log(typeof Object, typeof MeuObjeto);
console.log(Object.prototype, MeuObjeto.prototype);

Object.prototype.attr0 = 'Z';
const avo = { attr1: "A" };
const pai = { __proto__: avo, attr2: "B" };
const filho = { __proto__: pai, attr3: "C" };

console.log(filho.attr1);
console.log(filho.attr2);
console.log(filho.attr3);
console.log(filho.attr0);

const carro = {
    velMax: 200,
    velAtual: 0,
    acelerar(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta;
        } else {
            this.velAtual = this.velMax;
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`;
    }
}

const ferrari2 = {
    modelo: 'F40',
    velMax: 324,
    velAtual: 100
}

const volvo2 = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari2, carro);
Object.setPrototypeOf(volvo2, carro);

console.log(volvo2.status());
console.log(ferrari2.status());
console.log(ferrari2);
console.log(volvo2);

volvo2.acelerar(103);
console.log(volvo2.status());

ferrari2.acelerar(120);
console.log(ferrari2.status());