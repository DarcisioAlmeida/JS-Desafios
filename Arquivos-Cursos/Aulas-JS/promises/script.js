/*
  PROMISES
  - promessa quando vai fazer uma requisição assincrona
  - resultado temporario: pode ou nao ocorrer
  - 3 estados : pendente | finalizado | rejeitado
  - obrigatorio ter a funcao(resolve, reject) // resolve = deu certo | reject = deu errado
  - .then = quando tiver o resultado executa o que foi passado - resolve for executado e deu certo
  - .catch = quando tiver algum erro = reject foi acionado
*/
  function pegarTemperatura(){
    return new Promise(function(resolve, reject){
      console.log("pegando temperatura...")

      setTimeout(function(){
        resolve('40 na sombra')
      }, 2000)
    })
  }

  // USANDO A PROMISE
  console.log('Código antes!')
  let temp = pegarTemperatura()
  console.log('Codigo durante')
  temp.then(function(resultado){
    console.log("TEMPERATURA: " +resultado)
  })
  temp.catch(function(error){
    console.log("Eita deu erro aqui!")
  })
  console.log('Codigo depois!')