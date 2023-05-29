class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    falar() {
        console.log(`Meu nome é ${this.nome}, idade ${this.idade}`);
    }
}

const pessoa1 = new Pessoa('João', 25);

pessoa1.falar();

const criarPessoa = (nome, idade) => {
    return {
        falar: () => console.log(`Meu nome é ${nome}, idade ${idade}`),
    }
}

const p2 = criarPessoa("João", 25);
p2.falar();