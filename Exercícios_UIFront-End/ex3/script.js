function calcularReajuste() {
    let nome = document.getElementById('nome').value;
    let preco = Number(document.getElementById('preco').value);
    let resultado = document.getElementById('resultado');

    if (!(nome && (preco) && preco > 0)) {
        resultado.innerHTML = "Por favor, insira valores válidos.";
        return;
    }

    let aumento = 0;

    if (preco < 1000) {
        aumento = preco * 0.05;
    } else {
        aumento = preco * 0.07;
    }

    let novoPreco = preco + aumento;

    resultado.innerHTML = `Mercadoria: ${nome} <br> Novo preço: R$ ${novoPreco.toFixed(2)}`;
}