/*
  Definindo requisições
    - o que é?
      quando fazemos uma chamada e nos retorna algo
    - caracteristicas
      pagina web - cliente x servidor

  Definindo JSON
    - o que é json? 
    Javascript Objetc Notation = Json
    - sixta-se de objeto para fazer comunicação entre requisições,
    - responsável tanto para guardar como para enviar e receber informações,
    - objeto js onde armazena uma ou mais informações,
    - deve sempre ter nome e valor
    - separados por virgulas
    - podemos colocar array dentro objeto, objeto dentro objeto 
*/
// Armazenando na mesma variavel - json 
  // forma de comandos tudo na mesmo linha - acostume-se
  let pessoa = {nome: 'Darcisio', sobrenome: 'Almeida', idade: 90, caracteristicas:['legal', 'esperto', 'atencioso'], estetica:{altura: 900, peso: 10, largura: 100} }
  
  console.log(pessoa.idade)
  console.log(pessoa.caracteristicas[1])
  console.log(pessoa.estetica)
  console.log(pessoa.estetica.peso)

/* JSON Parse 
  - converte uma string em formato JSON // manipular json
  - pega uma string e transforme em json
*/
  let pessoa2 = JSON.parse('{"nome": "Darcisio", "idade": 80}')
  console.log(pessoa2)
  console.log(pessoa2.idade)

/* JSON stringify
    - contrario do parse - pega json e transforme em string
*/
  let pessoa3 = JSON.stringify({nome: 'Darcisio', sobrenome: 'Almeida', idade: 80})
  console.log(pessoa3)