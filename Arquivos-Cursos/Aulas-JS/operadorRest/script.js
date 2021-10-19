/* 
  Operador Rest
  - Não muito usual
  - adicionado quando não sei quantos parametros serão enviados

*/
  /* Sem uso do Rest - linha 12 foi adicionado varios parametros mas ele mostra no console apenas     primeiro numero 5 
  */
  function adicionar(numeros){
    console.log(numeros)
  }
  adicionar(5)
  adicionar(5, 6, 7, 8, 9)

  /* 
    Com uso do Rest - basta adicionar (...) em parametros da função
    linha 23 foi adicionado varios parametros ele mostra todos - caso adicione mais ele mostra
  */
  function adicionar2(...numeros){
   console.log(numeros) 
  }
  adicionar2(5)
  adicionar2(5, 6, 7, 8, 9)  

  /* 
    Usando Spread e Rest Juntos
      1. criamos função adicionarNomes
      2. recebe os parametros(nomes, ...novosNomes(rest))
      3. cria variavel para receber nomes(...spread) e novosNomes(...rest) e retorna a variavel para função
      4. cria variavel outrosNomes e com função adicionarNomes que recebe nomes, ...rest)
      5. quando mostras no console a variavel outrosNomes pega função adicionarNomes e o return novoConjunto e mostra resultado de spread e rest.
  */
    function adicionarNomes(nomes, ...novosNomes){
      let novoConjunto = [
        ...nomes, // spread
        ...novosNomes // rest
      ];
      return novoConjunto;
    }

    let nomes = ['Lorena', 'Stella']
    let outrosNomes = adicionarNomes(nomes, 'Darcisio', 'Cassia', 'Estrela', 'Lua')

    console.log(outrosNomes)
    