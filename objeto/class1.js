class Avo {
    constructor(sobrenome, age) {
        this.sobrenome = sobrenome;
        this.age = age;
    }
}

class Pai extends Avo {
    constructor(sobrenome, age, profissao = "Professor") {
        super(sobrenome, age);
        this.profissao = profissao;
    }
}

class Filho extends Pai {
    constructor() {
        super("Silva", 12);
    }
}

const filho = new Filho();
console.log(filho);