function somaNumeros(arr) {
	if (!arr || !arr.length) return;
	const soma = arr.reduce((prev, curr) => prev + curr);

	return soma;
}

console.log(somaNumeros([1, 1, 1, 3]));

// Outra forma - entendendo reduce

function somaNum(array){
  return array.reduce(function(prevent, current){
    console.log({prevent})
    console.log({current})
    return prevent + current
  })
}
const array = [1, 3]
console.log(somaNum(array))