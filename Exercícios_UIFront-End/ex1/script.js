function calcularINSS() {
    let salario = Number(document.getElementById('salario').value);
    let resultado = document.getElementById('resultado');

    if (isNaN(salario) || salario <= 0) {
        resultado.innerHTML = "Por favor, insira um salário válido.";
        return;
    }

    let desconto = 0;

    if (salario <= 1212.00) {
        desconto = salario * 0.075; 
    } else if (salario <= 2427.35) {
        desconto = salario * 0.09; 
    } else if (salario <= 3641.03) {
        desconto = salario * 0.12; 
    } else if (salario <= 7087.22) {
        desconto = salario * 0.14
    } else {
        desconto = 7087.22 * 0.14; 
    }

    let salarioFinal = salario - desconto;

    resultado.innerHTML = `Desconto do INSS: R$${desconto.toFixed(2)}
    Salário final: R$${salarioFinal.toFixed(2)}`;
}