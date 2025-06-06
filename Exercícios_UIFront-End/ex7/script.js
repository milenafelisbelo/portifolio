function calcularReajuste() {
    let salarioAtual = Number(document.getElementById('salario').value);
    let resultado = document.getElementById('resultado');

    if (!salarioAtual && salarioAtual <= 0) {
        resultado.innerHTML = "Por favor, insira um valor válido para o salário.";
        return;
    }

    let aumento = 0;

    if (salarioAtual >= 1500 && salarioAtual < 1750) {
        aumento = 15;
    } else if (salarioAtual >= 1750 && salarioAtual < 2000) {
        aumento = 12;
    } else if (salarioAtual >= 2000 && salarioAtual < 3000) {
        aumento = 9;
    } else if (salarioAtual >= 3000) {
        aumento = 6;
    }

    let reajuste = salarioAtual * (aumento / 100);
    let salarioFinal = salarioAtual + reajuste;

    resultado.innerHTML = `O aumento salarial foi de ${aumento}%. O novo salário é R$ ${salarioFinal.toFixed(2)}.`;
}