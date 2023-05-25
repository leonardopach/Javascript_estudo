function soma1(a, b, c) {
    a = a || 1;
    b = b || 1;
    c = c || 1;
    return a + b + c;
}

console.log(soma1());
console.log(soma1(3), soma1(1, 2, 3), soma1(2, 3, 4), soma1(0, 0, 0));

function soma2(a, b, c) {
    a = a !== undefined ? a : 1;
    b = 1 in arguments ? b : 1;
    c = isNaN(c) ? 1 : c;
    return a + b + c;
}

console.log(soma2(1, 2, 3), soma2(), soma2(2, 3, 4));

function somar3(a = 1, b = 1, c = 1) {
    return a + b + c;
}

console.log(somar3(1, 2, 3), somar3(), somar3(2, 3, 4));