fetch('./dados.json')
  .then(response => response.json())
  .then(faturamentoMensal => {
    // Para filtrar dias com faturamento (faturamento maior que 0)
    const diasComFaturamento = faturamentoMensal.filter(dia => dia.valor > 0);

    // Para encontrar o menor valor de faturamento ocorrido em um dia do mês
    const menorValor = Math.min(...diasComFaturamento.map(dia => dia.valor));

    // Para encontrar o maior valor de faturamento ocorrido em um dia do mês
    const maiorValor = Math.max(...diasComFaturamento.map(dia => dia.valor));

    // Para calcular a média mensal de faturamento
    const somaFaturamento = diasComFaturamento.map(dia => dia.valor).reduce((total, valor) => total + valor, 0);
    const mediaMensal = somaFaturamento / diasComFaturamento.length;

    // Para contar os dias com faturamento acima da média
    const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaMensal).length;

    // Exibir os resultados na página
    document.getElementById('menor-valor').textContent = `R$ ${menorValor.toFixed(2)}`;
    document.getElementById('maior-valor').textContent = `R$ ${maiorValor.toFixed(2)}`;
    document.getElementById('dias-acima-media').textContent = `Em ${diasAcimaDaMedia} dias`;
  })

  .catch(error => {
    console.error('Erro ao carregar o arquivo JSON:', error);
    document.getElementById('menor-valor').textContent = 'Erro ao carregar dados';
    document.getElementById('maior-valor').textContent = 'Erro ao carregar dados';
    document.getElementById('dias-acima-media').textContent = 'Erro ao carregar dados';
  });