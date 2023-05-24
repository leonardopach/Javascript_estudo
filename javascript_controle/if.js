function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado');
    } else if (nota < 7 && nota > 5) {
        console.log('Recuperação');
    } else {
        console.log('Reprovado');
    }
}

soBoaNoticia(7);
soBoaNoticia(2);
soBoaNoticia(6);
soBoaNoticia(9);