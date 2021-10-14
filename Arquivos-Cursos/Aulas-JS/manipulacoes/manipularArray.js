let lista = ['Ovo', 'Farinha', 'Corante', 'Massa'];
let lista2 = ['Prato', 'Copo', 'Forno']

let res = lista.toString() // transforma em string
res = lista.join('-') // separa em string com item definido nos parenteses
res = lista.indexOf('Corante') // localiza a posição de um elemento no Array - caso seja -1 item não foi encontrado
console.log(res)
console.log(lista)
lista.pop() // remove o ultimo item array
lista.shift() // remove o primeiro item do array
console.log(lista)

lista.push('leite', 'agua') // adiciona itens ao array
console.log(lista)

lista[1] = 'Ovos' // alterado o item do array
lista[4] = 'fermento' // caso não tenha o indice no array ele acrescenta
lista[lista.length] = 'liquidificador' // acrescenta index ao final do array usando length // ideal usar push
console.log(lista)

lista.splice(1, 1) // qual item será removido e quantos itens // (sempre use dois parametros)
console.log(lista)

let res2 = lista.concat(lista2) // junta arrays 
console.log(res2)

lista.reverse() // reverte ordem dos itens 
console.log(lista)

lista.sort() // ordena os itens do array em ordem alfabetica
console.log(lista)