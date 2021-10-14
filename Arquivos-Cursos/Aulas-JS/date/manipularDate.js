// Manipular Date //

  let d = new Date()
  let novoValor = d.getFullYear() // informa qual ano
  console.log(novoValor)
  
  novoValor = d.getUTCMonth() // lembrando que mês JS pega a partir do zero (0 - janeiro ....|... 9 - Outubro)
  console.log(novoValor)
  
  novoValor = d.getDay() // pega dia da semana - começa pelo 0 -domingo
  console.log(novoValor)

  novoValor = d.getDate()// pega dia 
  console.log(novoValor)

  
