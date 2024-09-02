/*
    2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

    IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/

function isFibonacci(num) {
    let a = 0;
    let b = 1;

    if (num === a || num === b) {
        return true;
    }

    let c = a + b;
    while (c <= num) {
        if (c === num) {
            return true;
        }
        a = b;
        b = c;
        c = a + b;
    }

    return false;
}

function verificarFibonacci() {
    const numero = parseInt(document.getElementById('numeroInput').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(numero)) {
        resultado.textContent = "Por favor, insira um número válido.";
        return;
    }

    if (isFibonacci(numero)) {
        resultado.textContent = `O número ${numero} pertence à sequência de Fibonacci.`;
        resultado.style.color = 'green';
    } else {
        resultado.textContent = `O número ${numero} não pertence à sequência de Fibonacci.`;
        resultado.style.color = 'red';
    }
}
