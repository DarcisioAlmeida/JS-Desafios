/*
  Exercicio referentes ao Bootcamp Impulso React Web Developer pela Digital Innovation One.
  // Coleções Chaveadas - map e set
    Set - Caracteristicas:
      - são estruturas que armazenam apenas valores unicos
    Set.add = adiciona, informa a chave e o valor
    Set.has = checa um valor - acessa
    Set.delete = deleta 

  // Diferença Map vs Array
    - Possui valores unicos;
    - Em vez de propriedade length, consulta-se o numero pela propriedade size;
    - Não possui metodos map, filter, reduce etc...
*/  
/*  Atividade 2: Sets
  - Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos.
*/
function uniqueElements(array) {
	let unique = new Set(array);
	return [...unique]; // adiciona spread para adicionar novo array
}

const arr = [30, 30, 40, 5, 223, 2049, 3034, 5];

console.log(uniqueElements(arr));