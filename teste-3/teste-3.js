/*
    3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
    • O menor valor de faturamento ocorrido em um dia do mês;
    • O maior valor de faturamento ocorrido em um dia do mês;
    • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

    IMPORTANTE:
    a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
    b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
*/

// Carregar o arquivo JSON e processar os dados
fetch('teste-3.json')
    .then(response => response.json())
    .then(data => {
        // Filtra os dias com faturamento maior que 0
        const faturamentoValido = data.filter(dia => dia.valor > 0);

        // Calcula o menor e maior valor de faturamento
        const menorFaturamento = Math.min(...faturamentoValido.map(dia => dia.valor));
        const maiorFaturamento = Math.max(...faturamentoValido.map(dia => dia.valor));

        // Calcula a média mensal
        const mediaMensal = faturamentoValido.reduce((acumulador, dia) => acumulador + dia.valor, 0) / faturamentoValido.length;

        // Conta o número de dias com faturamento superior à média
        const diasSuperiorMedia = faturamentoValido.filter(dia => dia.valor > mediaMensal).length;

        // Atualiza a interface com os resultados
        document.getElementById('menor').textContent = menorFaturamento.toFixed(2);
        document.getElementById('maior').textContent = maiorFaturamento.toFixed(2);
        document.getElementById('diasSuperior').textContent = diasSuperiorMedia;
    })
    .catch(error => console.error('Erro ao carregar os dados:', error));
