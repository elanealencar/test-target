const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};


const faturamentoTotal = [...Object.values(faturamento)].reduce((total, valor) => total + valor, 0);

let resultado = '';
for (let estado in faturamento) {
    const percentual = (faturamento[estado] / faturamentoTotal) * 100;
    resultado += `${estado}: ${percentual.toFixed(2)}%<br>`;
}

document.getElementById('resultado').innerHTML = resultado;
document.getElementById('total').innerHTML = `Soma Total do Faturamento: R$ ${faturamentoTotal.toFixed(2)} = 100%`;

