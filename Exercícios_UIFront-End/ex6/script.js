function compararNumeros() {
    const numero1 = parseInt(document.getElementById("numero1").value);
    const numero2 = parseInt(document.getElementById("numero2").value);
  
    if (isNaN(numero1) || isNaN(numero2)) {
      document.getElementById("result").innerText = "Por favor, insira dois números válidos.";
      return;
    }
  
    let maior, menor;
    if (numero1 > numero2) {
      maior = numero1;
      menor = numero2;
    } else if (numero1 < numero2) {
      maior = numero2;
      menor = numero1;
    } else {
      document.getElementById("resultado").innerText = "Os números são iguais.";
      return;
    }
  
    document.getElementById("resultado").innerHTML = `<p>Maior: ${maior} <br> Menor: ${menor}</p>
    `;
  }