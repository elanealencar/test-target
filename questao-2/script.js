

function verificarFibonacci() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultado = document.getElementById('resultado');
  
    if (isNaN(numero) || numero < 0) {
      resultado.textContent = "Erro: insira um número maior ou igual a 0";
      return;
    }
  
    let a = 0;
    let b = 1;
  
    if (numero === 0 || numero === 1) {
      resultado.textContent = `O número ${numero} pertence à sequência de Fibonacci`;
      return;
    }
  
    while (b <= numero) {
      let proximoNumero = a + b;
      a = b;
      b = proximoNumero;
  
      if (b === numero) {
        resultado.textContent = `O número ${numero} pertence à sequência de Fibonacci`;
        return;
      }
    }
  
    resultado.textContent = `O número ${numero} NÃO pertence à sequência de Fibonacci`;
  }
  