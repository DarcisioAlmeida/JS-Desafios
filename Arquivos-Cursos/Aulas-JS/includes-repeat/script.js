/*
  # funções: Includes e Reapet
    Include
      - serve tanto para string como arrays
      - include verifica dentro do array/string se existe o solicitado - caso afirmativo (true), negativo (false)
    Repeat
      - serve para repetir um determinado valor quantos vezes quiser
      - usado para prototipar 
*/
  // uso em array
    let listaMercado = ['ovo', 'café', 'leite', 'bolacha', 'arroz', 'feijao', 'macarrao']
    console.log(listaMercado.includes('carne')) // false
    console.log(listaMercado.includes('leite')) // true

  // uso em string
    let nome = 'Darcisio'
    console.log(nome.includes('D')) // true
    console.log(nome.includes('C')) // false - difere maiusculas de minisculas
  
    // uso repeat  
    console.log(nome.repeat(3)) // repetiu a variavel nome 3x