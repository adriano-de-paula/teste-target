/*
    1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
    Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
    Imprimir(SOMA);
    Ao final do processamento, qual será o valor da variável SOMA?
*/

let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log(SOMA);

/*
    Usando o terminal vá até a pasta onde está salvo o arquivo 'teste-1.js' e execute ele da seguinte forma 'node teste-1.js'. No caso desse código o resultado deu 91.
*/