/*
  Object - Keys | Values | Entries 
    * Funciona tanto para Objetos com Arrays 
    * Mostra em formato de array 
      - keys : mostra quantidade de chaves que contém - seus indices 
      - values: mostra conteudo do array/objeto - seus valores
      - entries: mostra o index e o valor de cada item do array/objeto
*/

// Uso em Array
  let listaMercado = ['ovo', 'café', 'leite', 'bolacha', 'arroz', 'feijao', 'macarrao']
  console.log(Object.keys(listaMercado))
  console.log(Object.values(listaMercado))
  console.log(Object.entries(listaMercado))

// Uso em Objetos
  let pessoa = {
    nome: 'Darcisio',
    sobrenome: 'Almeida',
    idade: 45,
    sexo: 'masculino'
  }
  console.log(Object.keys(pessoa))
  console.log(Object.values(pessoa))
  console.log(Object.entries(pessoa))