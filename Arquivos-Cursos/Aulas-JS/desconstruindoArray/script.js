/*
  Desconstruindo Array
    - e necessario dar um nome para Array - 
    - feita na ordem em que Array é criado
    - para pular item é somente deixar separado por virgula , 
*/
// Exemplo desconstruindo Array
  let info = ['Darcisio Almeida', 'Stella', 'Lorena', '@instagram'] ;
  let [nomeCompleto, nomeFilha, nomeFilha2, instagram] = info;
  console.log(nomeCompleto, nomeFilha, nomeFilha2, instagram)
  console.log(nomeFilha)

// Exemplo Descontruindo e pulando itens Array - basta colocar virgula
  let info2 = ['Darcisio Almeida', 'Stella', 'Lorena', '@facebook']
  let [nomeCompleto2, , , facebook] = info2
  console.log(nomeCompleto2, facebook)

// Descontruindo em função
  function criar(){
    let a = [1, 2, 3]
    return a
  }
  let [a, b , c] = criar()
  console.log(a, b, c)