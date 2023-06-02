// Object.values/ Object.entries / Object.keys
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj));
console.log(Object.entries(obj));


const nome = "Carla";
const pessoa = {
    nome,
    idade: 30,
    endereco() {
        return "Oi gente!!!";
    }
}

console.log(pessoa.nome);
console.log(pessoa.endereco());

// Class
class Animal { };
class Cachorro extends Animal {
    falar() {
        return "Cachorro";
    }
};

console.log(new Cachorro().falar());