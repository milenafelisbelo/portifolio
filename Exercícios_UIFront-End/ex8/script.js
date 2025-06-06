function calcularmedia() {
    const nota1 = Number(document.getElementById('nota1').value);
    const nota2 = Number(document.getElementById('nota2').value);
    const nota3 = Number(document.getElementById('nota3').value);
    const resultado = document.getElementById('resultado');

    const media = (nota1 + nota2 + nota3) / 3;

    if (media >= 6) {
        resultado.innerText = `Média: ${media.toFixed(2)}. Situação: Aprovado.;`
    } else if (media >= 4) {
        resultado.innerText = `Média: ${media.toFixed(2)}. Situação: Recuperação.;`
    } else {
        resultado.innerText = `Média: ${media.toFixed(2)}. Situação: Reprovado.;`
    }
}