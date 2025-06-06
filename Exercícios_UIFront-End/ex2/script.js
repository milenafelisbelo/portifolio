function verificarTriangulo() {
    let ladoA = Number(document.getElementById('ladoA').value);
    let ladoB = Number(document.getElementById('ladoB').value);
    let ladoC = Number(document.getElementById('ladoC').value);
    let resultado = document.getElementById('resultado');

    if (!(ladoA > 0 && ladoB > 0 && ladoC > 0)) {
        resultado.innerHTML = "Por favor, insira valores válidos para todos os lados.";
        return;
    }

    if (ladoA === ladoB && ladoB === ladoC) {
        resultado.innerHTML = "O triângulo é EQUILÁTERO.";
    } else if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC) {
        resultado.innerHTML = "O triângulo é ESCALENO.";
    } else {
        resultado.innerHTML = "O triângulo é ISÓSCELES.";
    }
}