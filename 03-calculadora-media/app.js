function calcularMedia() {

    const inputs = document.querySelectorAll("input")
  
    const nota1 = Number(inputs[0].value)
    const nota2 = Number(inputs[1].value)
    const nota3 = Number(inputs[2].value)
  
    const resultado = document.querySelector(".resultado")
  
    if (
      nota1 < 0 || nota1 > 10 ||
      nota2 < 0 || nota2 > 10 ||
      nota3 < 0 || nota3 > 10
    ) {
      resultado.innerText = "Digite notas válidas entre 0 e 10"
      resultado.style.color = "#d1d5db"
      return
    }
  
    const media = (nota1 + nota2 + nota3) / 3
  
    let situacao = ""
    let cor = ""
  
    if (media >= 7) {
      situacao = "Aprovado"
      cor = "#14532d"
    } else if (media >= 5) {
      situacao = "Recuperação"
      cor = "#713f12"
    } else {
      situacao = "Reprovado"
      cor = "#7f1d1d"
    }
  
    resultado.innerHTML = `
      Média: ${media.toFixed(2)} <br>
      Situação: ${situacao}
    `
  
    resultado.style.color = cor
  }