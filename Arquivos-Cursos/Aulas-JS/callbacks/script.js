/* 
  CALLBAACK -
    I 'm gonna call you back = eu te ligo de volta
  # Entendendo conceito de Callback
  - é assincrona
  - é uma função que você cria e manda para outra execução 
  - obtem um resultado - executa quando algo acontece posteriormente
*/
// A função alertar somente vai funcionar quando executar a setTimeout // isso é um Callback
  function alertar(){
    console.log("Opa, e ai tudo bem?")
  }
  setTimeout(alertar, 2000)

/* 
  Este exemplo ele vai passar linha por linha 
  vai rodar o console.log final 
  somente depois finaliza as funções alerta e visualizar 
*/
  function visualizar(){
    console.log('Callback é assincrono executou depois')
  }
  let nome = 'Lorena'
  setTimeout(visualizar, 3000)
  let sobrenome = 'Almeida'
  console.log(`Executou o nome e sobrenome: ${nome} ${sobrenome} depois a função alertar e somente depois a função visualizar`)