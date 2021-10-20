/*
  Uso de Fetch método Post com Async e Await
    API Fake - para testar e prototipar é usada para leitura de dados
    https://jsonplaceholder.typicode.com - Routs

    Fetch - use sempre por um servidor via protocolo http:
    -É uma função js que retorna uma promise com 2 parametros:
      1. url: qual é url da requisição - https://jsonplaceholder.typicode.com/posts
      2. opcional - são os métodos - post, get, put, delete
      // usando método opcional - Post
*/
async function inserirPost(){
  document.getElementById('posts').innerHTML = "Carregando..."

  let req = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify( {
      title: 'Titulo de teste',
      body: 'Corpo de teste',
      userId: 4
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    }
  })
  let json = await req.json()
  console.log(json)
}

/* nota: 
    Servidores https://jsonplaceholder.typicode.com/posts ficam apenas carregando para esta ação
*/