// Arendondamento 
  // arredonda dependendo do numero < 5 > 
  let novoValor = Math.round(3.952)
  console.log(novoValor)

  // arredonda sempre pra baixo
  novoValor = Math.floor(4.898)
  console.log(novoValor)

  // arendonda sempre pra cima
  novoValor = Math.ceil(14.1245)
  console.log(novoValor)

// Minimo e Maximo 
  // min - define qual é o menor numero
  novoValor = Math.min(45, 69, 13, 8, 5)
  console.log(novoValor)

  // max - define qual o maior numero
  novoValor = Math.max(125, 13, 2, 458, 90)
  console.log(novoValor)

  // random - define numero aleatorio entre 0 e 1 - geralmente é usada com outra função
  novoValor = Math.random()
  console.log(novoValor)

  /*
    1. Math.floor - arredonda para baixo e impede de passar de 100
    2. Math.random - calcula numero aleatorio entre 0 e 1 e multiplica por 100 
  */
  novoValor = Math.floor(Math.random() * 100)  
  console.log(novoValor)