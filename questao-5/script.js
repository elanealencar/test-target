function inverterString() {
    const inputString = document.getElementById('inputString').value;
    let stringInvertida = ''; 

    for (let i = inputString.length - 1; i >= 0; i--) {
        stringInvertida += inputString[i];  
    }

    /*Esse código percorre a string de trás para frente, 
     pegando cada caractere e adicionando-o à variável stringInvertida. 
     Ao final do loop, a string está completamente invertida */


    document.getElementById('resultado').innerHTML = `String Invertida: ${stringInvertida}`;
}
