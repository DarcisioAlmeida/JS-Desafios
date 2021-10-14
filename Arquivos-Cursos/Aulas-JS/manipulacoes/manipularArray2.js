//map = mapeia ou percorre o array e executa função em cada item  - gera novo array
  let lista = [45, 4, 9, 16, 25]
  let lista2 = []

  lista2 = lista.map(function(item){
    return item * 2
  })

  // melhor utilizar a função do que for, pois a função você pode reaproveitar // resultado é igual acima
  /*
    for (let i in lista){
      lista2.push(lista[i] * 2)
    }
  */
  let resMap = lista2
  console.log(resMap)
/* ====================================================================================================*/
// filter = filtra itens de um array 
  let lista3 = [45, 4, 9, 16, 25]
  let lista4 = []

  lista4 = lista3.filter(function(item){
    if (item < 20){
      return true
    } else {
      return false
    }
  })

  let resFilter = lista4
  console.log(resFilter)
/* ====================================================================================================*/
// every = verifica a condição de todos os itens de um array // ou todos são true ou são false
  let lista5 = [45, 4, 9, 16, 25]
  let lista6 = []

  lista6 = lista5.every(function(item){
    if (item < 20){
      return true
    } else {
      return false
    }
  })

  let resEvery = lista6
  console.log(resEvery)
/* ====================================================================================================*/
// some = verifica a condição de alguns itens de um array // caso tenha são true ou são false
  let lista7 = [45, 4, 9, 16, 25]
  let lista8 = []

  lista8 = lista7.some(function(item){
    return (item > 20)? true : false  // resumindo if e else por ternario forma mais simples em uma linha 
  })

  let resSome = lista8
  console.log(resSome)
