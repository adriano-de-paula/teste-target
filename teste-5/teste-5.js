/*
    5) Escreva um programa que inverta os caracteres de um string.

    IMPORTANTE:
    a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
    b) Evite usar funções prontas, como, por exemplo, reverse;
*/

// Obtém os elementos do DOM
const form = document.getElementById('form');
const inputString = document.getElementById('inputString');
const result = document.getElementById('result');

// Função para inverter a string
function inverterString(str) {
    let inverted = '';
    for (let i = str.length - 1; i >= 0; i--) {
        inverted += str[i];
    }
    return inverted;
}

// Adiciona o listener para o evento de submit do formulário
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o comportamento padrão do formulário

    const stringParaInverter = inputString.value;
    const stringInvertida = inverterString(stringParaInverter);
    result.textContent = `Nome invertida: ${stringInvertida}`;
});
