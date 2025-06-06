function calcularReajuste() {
    const precoOriginal = Number(document.getElementById('precoo').value);
    const tipoRoupa = document.getElementById('roupas').value;
    const resultado = document.getElementById('resultado');

    if (!precoOriginal || precoOriginal <= 0) {
        resultado.innerText = "Por favor, insira um preço válido.";
        return;
    }

    let desconto = 0;
    if (tipoRoupa === 'calca') {
        desconto = precoOriginal * 15 / 100;
    } else if (tipoRoupa === 'camisa') {
        desconto = precoOriginal * 20 / 100;
    } else if (tipoRoupa === 'bermuda') {
        desconto = precoOriginal * 10 / 100;
    }

    const precoComDesconto = precoOriginal - desconto;

    resultado.innerText = `Desconto: R$ ${desconto.toFixed(2)}.  Total: R$ ${precoComDesconto.toFixed(2)}.;`
}