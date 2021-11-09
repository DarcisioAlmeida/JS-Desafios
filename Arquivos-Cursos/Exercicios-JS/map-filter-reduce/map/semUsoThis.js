// Forma mais simples e eficaz é sem uso de this

const array = [1, 2, 3, 4, 5];

console.log(array.map((item) => item * 2));

console.log(array);

// Outra forma com função

function mapSemThis(arr) {
  return arr.map(function(item){
    return item * 2
  })
}

const numeros= [2, 4, 6, 8, 10, 12, 20]
console.log(mapSemThis(numeros))
console.log(numeros) // array original não alterado.