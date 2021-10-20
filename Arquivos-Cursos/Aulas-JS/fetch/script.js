/*
  API Fake - para testar e prototipar é usada para leitura de dados
    https://jsonplaceholder.typicode.com - Resources
*/
/*
  Fetch - use sempre por um servidor via protocolo http:
    -É uma função js que retorna uma promise com 2 parametros: 
      1. url: qual é url da requisição - https://jsonplaceholder.typicode.com/posts
      2. opcional - são os métodos - post, get, put, delete
        caso não informe sempre será get
*/

/* 
  Fazendo a requisição 
    1. pega id "posts" adiciona innerHTML aguardando a informação  
    2. cria função e faz a chamada para uma url
    3. .then (resultado) - aguarda o resultado e converte pra json
    4. .then (json)- com o resultado em json pega o id "posts" entre novamente no innerHTML verifica a quantidade e mostra json.length
    5.mostra na tela
*/
  function loadPosts(){
    document.getElementById('posts').innerHTML = "Carregando..."

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(function(resultado){
        return resultado.json() // retorna uma promise e transforma em json
      })
      .then(function(json){
        document.getElementById('posts').innerHTML = json.length+ 'posts'
      })
      .catch(function(error){
        console.log('Deu ruim, problema á vista!')
      })
  }