//forma literal
function fun1() { }

// armazenar em uma variavel
const fun2 = function () { }

// armazenar em um array
const array = [function (a, b) { return a + b; }, fun1, fun2];

const obj = {};
obj.falar = function () { return "Opa" }
console.log(obj.falar());

// passar funcção como param
function run(fun) {
    fun();
}

run(function () {
    console.log("Executando...");
})

// um função pode returnar/conter um função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c);
    }
}

soma(2, 3)(5);
const cincoMaix = soma(2, 3);
cincoMaix(4);