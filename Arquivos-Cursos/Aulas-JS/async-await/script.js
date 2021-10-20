/*
  API Fake - para testar e prototipar é usada para leitura de dados
    https://jsonplaceholder.typicode.com - Resources

  Fetch - use sempre por um servidor via protocolo http:
    -É uma função js que retorna uma promise com 2 parametros: 
      1. url: qual é url da requisição - https://jsonplaceholder.typicode.com/users
     2. opcional - são os métodos - post, get, put, delete
*/
// ================================================================================= //
/* 
  Fazendo a requisição 
    1. pega id "posts" adiciona innerHTML aguardando a informação - carregando 
    2. cria req - await fetch - que vai aguardar(promise) a chamada para uma url - até finalizar 
    3. vai aguardar - await req.json (resultado) - até converter pra json
    4. Após resultados chama e aguarda a função montarBlog
    5.mostra na tela
*/
// ===================================================================================== //
/* 
  USO DE ASYNC E AWAIT 
    - async - ele obriga o codigo a esperar executar a função
    - quando adiciona o async informa que a função já tem o await
    - await - fica esperando e para execução - somente com resultado ele continua para proxima linha. 
    - usado para gerar menas linhas de código
  
*/
  // let loadUsers = async() => {} // outra forma de uso em variaveis
  async function loadUsers(){
    document.getElementById('users').innerHTML = "Carregando..."

    let req = await fetch('https://jsonplaceholder.typicode.com/users') // é uma promise
    let json = await req.json()
    montarBlog(json)
    // estas 3 linhas de codigo acima substitui a função fetch abaixo // 
    /*
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(function(resultado){
        return resultado.json() // retorna uma promise e transforma em json
      })
      .then(function(json){
        montarBlog(json)
      })
      .catch(function(error){
        console.log('Deu ruim, problema á vista!')
      })
    */
  }

  function montarBlog(lista){
    let html = ''

    for(let i in lista){
      html += '<h3>' +lista[i].name+ '</h3>'
      html += lista[i].address.zipcode+ '<br/>'
      html += '<hr/>'
    }
    document.getElementById('users').innerHTML = html
  }