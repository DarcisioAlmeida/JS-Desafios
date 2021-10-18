/* 
  Operador Spread 
    - muito utilizado nos frameworks - React | Vue | Angular
    - usado para complementar alguma coisa, ou seja, já tenho itens e vou adicionar mais.
    - importante sempre adicionar antes do nome da variavel os 3 pontos ...
    - muito usado em funções
*/
// Exemplo em Array
  let numeros = [1, 2, 3, 4]
  let novosNumeros = [...numeros, 5, 6, 10, 25]
  let semPontos = [numeros, 5, 6, 10, 25]

  console.log(numeros)
  console.log(novosNumeros)
  console.log(semPontos)

// Exemplo em objeto - vai juntar a informação de info em newInfo ( acrescentando ...info)
  let info = {
    nome: 'Darcisio',
    sobrenome: 'Almeida',
    idade: 45
  }
  
  let newInfo = {
    ...info,
    bairro: 'Tatuapé',
    cidade: 'São Paulo',
    pais: 'Brasil'
  }

  console.log(newInfo)

// Exemplo em uma função
  /* 1. criada função adicionarInfo
     2. dentro da função cria se novasInfo e adiciona ...info 
     3. retorna novaInfo com adição de Info
     4. mostra no console (adicionaInfo(info))
     5. substitui (.push) quando são varios itens
  */
  function adicionarInfo(info2){
    let novasInfo = {
      ...info2,
      status: 'online',
      cracha: 765,
      anoEntrada: 1995
    }
    return novasInfo
  }
  console.log(adicionarInfo({
    nome:'Lorena',
    sobrenome: 'Zampar',
    idade: 9
  })
  )
  
  
