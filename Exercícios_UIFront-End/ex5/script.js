function ordenarNumeros() {
    const numeros = [
      parseInt(document.getElementById("numero1").value),
      parseInt(document.getElementById("numero2").value),
      parseInt(document.getElementById("numero3").value),
      parseInt(document.getElementById("numero4").value),
      parseInt(document.getElementById("numero5").value) 
    ];
  
    if (numeros.some(isNaN)) {
      document.getElementById("resultado").innerText = "Por favor, insira todos os 5 números inteiros.";
      return;
    }
  
    const numerosOrdenados = numeros.sort((a, b) => a - b);
  
    document.getElementById("resultado").innerText = `Números em ordem crescente: ${numerosOrdenados.join(", ")}`;
}