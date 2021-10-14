//find = procura um item no array - retorna item especifico que deseja - exemplo lista de usuarios //
  let lista = [45, 4, 9, 16, 25]
  let lista2 = []

  lista2 = lista.find(function(item){
    return (item == 16) ? true : false
    })

  let resFind = lista2
  console.log(resFind)
/* ====================================================================================================*/
// findIndex = procura um item no array e tras a sua posição //
  let lista3 = [45, 4, 9, 16, 25]
  let lista4 = []

  lista4 = lista3.findIndex(function(item){
    if (item == 16){
      return true
    } else {
      return false
    }
  })

  let resFindIndex = lista4
  console.log(resFindIndex)
/* ====================================================================================================*/
  // Exemplos =  find retorna tudo dentro do array // findIndex retorna apenas posição do array
  let listaUsuarios =  [
    {id:1, nome: 'Darcisio', sobrenome: 'Almeida'},
    {id:2, nome: 'Stella', sobrenome: 'Mota'},
    {id:3, nome: 'Lorena', sobrenome: 'Zampar'} 
  ]

  let pessoa = listaUsuarios.find(function(item){
    //return(item.id == 3) ? true : false;
    return(item.sobrenome) ? true : false
  })

  let resPessoa = pessoa;
  console.log(resPessoa)

/* ====================================================================================================*/
