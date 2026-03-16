function calcularIMC() {
    const inputs = document.querySelectorAll("input");
    const nome = inputs[0].value.trim();
    const altura = Number(inputs[1].value);
    const peso = Number(inputs[2].value);
    const resultado = document.querySelector(".resultado");
  
    if (nome === "" || altura <= 0 || peso <= 0) {
      resultado.textContent = "Preencha corretamente nome, altura e peso.";
      resultado.style.color = "#d1d5db";
      return;
    }
  
    const imc = peso / (altura * altura);
  
    let classificacao = "";
    let cor = "";
  
    if (imc < 18.5) {
      classificacao = "Abaixo do peso";
      cor = "#1e3a5f";
    } else if (imc <= 24.9) {
      classificacao = "Peso normal";
      cor = "#14532d";
    } else if (imc <= 29.9) {
      classificacao = "Sobrepeso";
      cor = "#713f12";
    } else if (imc <= 34.9) {
      classificacao = "Obesidade grau I";
      cor = "#7f1d1d";
    } else if (imc <= 39.9) {
      classificacao = "Obesidade grau II";
      cor = "#6b0f0f";
    } else {
      classificacao = "Obesidade grau III";
      cor = "#450a0a";
    }
  
    resultado.innerHTML = `${nome}, seu IMC é:<br>${imc.toFixed(2)}<br>${classificacao}`;
    resultado.style.color = cor;
  }