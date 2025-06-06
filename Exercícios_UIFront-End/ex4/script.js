function encontrarMaiorNumero() {
    let numero1 = Number(document.getElementById('numero1').value);
    let numero2 = Number(document.getElementById('numero2').value);
    let numero3 = Number(document.getElementById('numero3').value);
    let numero4 = Number(document.getElementById('numero4').value);
    let numero5 = Number(document.getElementById('numero5').value);
    let numero6 = Number(document.getElementById('numero6').value);
    let resultado = document.getElementById('resultado');

    if (!(numero1 && numero2 && numero3 && numero4 && numero5 && numero6)) {
        resultado.innerHTML = "Por favor, insira todos os números!";
        return;
    }

    let maiorNumero = Math.max(numero1, numero2, numero3, numero4, numero5, numero6);

    resultado.innerHTML = `O maior número digitado é: ${maiorNumero}`;
}