/* 4 Principais funções de manipulação de Números 
    - toString
    - toFixed
    - parseInt
    - parseFloat
*/

let n = 10
let n2 = 12.5452654556
let n3 = '25'
let n4 = '30.88'

let res = n.toString(); // converte para string
let res2 = n2.toFixed(2)// arredonda casa decimais do numero - geralmente usa 2 casas
let res3 = parseInt(n3) + 5 // converte em uma string em numero
let res4 = parseFloat(n4) + 8// converte em uma string em numero e preserva as casa decimais

console.log(res)
console.log(res2)
console.log(res3)
console.log(res4)