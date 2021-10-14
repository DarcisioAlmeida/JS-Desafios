let nome = "Darcisio Mota de Almeida"
let nome2 = "         Lorena e      Stella"
let bolo = 'ovo, massa, corante, farinha'

let resultado = nome.length // pega o comprimento da string inclusive espaços
let resultado2 = nome.slice(0,10) // pega o conteudo definido - inicio e fim
let resultado3 = nome.replace('Mota', 'Diniz') // altera o conteudo definido - pesquisa por x e substitui por y
let resultado4 = nome.charAt(15) // pega o caracter definido - caso seja espaço ele pega // hoje usar-se como array nome[15]
let resultado5 = nome2.trim() // remove espaços do inicio e fim de uma string
let resultado6 = nome.substr(3,5) // pega a quantidade definida após inicio
let resultado7 = nome.split(' ') // divida a string em um array conforme definido no parametro
let resultado8 = bolo.split(',')
let resultado9 = nome.toLowerCase() // transforma em minusculas
let resultado = nome.toUpperCase() // transforma em maiusculas

console.log(resultado)
console.log(resultado2)
console.log(resultado3)
console.log(resultado4)
console.log(resultado5)
console.log(resultado6)
console.log(resultado7)
console.log(resultado8)
