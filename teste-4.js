/*
    4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
    • SP – R$67.836,43
    • RJ – R$36.678,66
    • MG – R$29.229,88
    • ES – R$27.165,48
    • Outros – R$19.849,53

    Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora. 
*/

// Valores de faturamento por estado
const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

// Calcula o faturamento total
const faturamentoTotal = Object.values(faturamento).reduce((acumulador, valor) => acumulador + valor, 0);

// Calcula e exibe o percentual de cada estado
for (let estado in faturamento) {
    const percentual = (faturamento[estado] / faturamentoTotal) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
}

/*
    Usando o terminal vá até a pasta onde está salvo o arquivo 'teste-4.js' e execute ele da seguinte forma 'node teste-4.js'. No caso desse código o percentual de cada estado foi de:
    
    SP: 37.53%
    RJ: 20.29%
    MG: 16.17%
    ES: 15.03%
    Outros: 10.98%

*/