/* 
  Códigos Sincrono vs Assincrono 
    - SÍNCRONO = 
      * é padrão JS | 
      * Executa linha por linha sempre | 
      * não vai para outra linha enquanto não finalizar requisição |
      * nunca uma linha é executada antes da anterior ser finalizada
      
    - ASSÍNCRONO = 
      * Executa linha por linha
      * é quando ele busca uma requisição | 
      * não espera finalizar a requisição para ir pra outra linha |
      * quando requisição é finalizada ele retorna a linha e da seu devido andamento
*/
// Código Síncrono
  let nome = 'Stella'
  let sobrenome = 'Almeida'
  let nomeCompleto = `${nome} ${sobrenome}`
  console.log(nomeCompleto)

// Código Assincrono
    // neste exemplo ele não vai ficar esperando pegar a temperatura para seguir o código //
  let nome2 = 'Stella'
  let sobrenome2 = 'Almeida'
  let nomeCompleto2 = `${nome} ${sobrenome}`
  let temperatura = maquina.pegarTemperatura() // Assincrono
  console.log(nomeCompleto2)