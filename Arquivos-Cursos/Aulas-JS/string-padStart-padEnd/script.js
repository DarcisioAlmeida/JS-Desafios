/*
  String, padStart, padEnd
    - são funções de manipulações de strings
    padStart - preenche no inicio
    padEnd - preenche ao final
      preenche informação com algum caractere definido.
      espaço conta como caracter 
  */

let telefone = '54'
console.log(telefone.padEnd(9, '*')) // 9 define a quantidade de caracteres // quando vazio qual informação será colocada '*'
console.log(telefone.padStart(9, ' - '))

// Exemplo pratico - Cartão de crédito //
  let cartao = '4565331877281234'
  let lastDigits = cartao.slice(-4) // pega os 4 ultimos numeros
  let cartaoOculto = lastDigits.padStart(16, '*')
  console.log(`Prezado Cliente, este é o número final de seu cartão ${cartaoOculto}`)

  let lastDigits2 = cartao.slice(0, 3) // pega os 3 numeros iniciais
  let cartaoOculto2 = lastDigits2.padEnd(16, '-')
  console.log(`Prezado Cliente, este é o número inicial de seu cartão ${cartaoOculto2}`)
