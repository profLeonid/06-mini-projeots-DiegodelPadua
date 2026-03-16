function calcularDesconto() {
    const inputs = document.querySelectorAll("input");
    const resultado = document.querySelector(".resultado");
  
    const preco = Number(inputs[0].value);
    const desconto = Number(inputs[1].value);
  
    if (preco <= 0 || desconto < 0 || isNaN(preco) || isNaN(desconto)) {
      resultado.innerHTML = "Informe valores válidos.";
      resultado.style.color = "#d1d5db";
      return;
    }
  
    const valorEconomizado = preco * (desconto / 100);
    const precoFinal = preco - valorEconomizado;
  
    resultado.innerHTML =
      `Valor economizado: R$ ${valorEconomizado.toFixed(2)}<br>` +
      `Preço final: R$ ${precoFinal.toFixed(2)}`;
  
    if (desconto <= 5) {
      resultado.style.color = "#14532d";
    } else if (desconto <= 10) {
      resultado.style.color = "#713f12";
    } else {
      resultado.style.color = "#7f1d1d";
    }
  }