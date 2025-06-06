function calcularSalarioFinal() {
    let salario = Number(document.getElementById('salario').value);
    let filhos = Number(document.getElementById('filhos').value);
    let resultado = document.getElementById('resultado');

    if (!(salario && (salario) && (filhos) && salario > 0 && filhos >= 0)) {
        resultado.innerHTML = "Por favor, insira valores válidos.";
        return;
    }

    let salarioFamilia = 0;

    if (salario < 2000) {
        salarioFamilia = filhos * 45;
    }

    let salarioFinal = salario + salarioFamilia;

    resultado.innerHTML = `Salário final: R$ ${salarioFinal.toFixed(2)}`;
}
