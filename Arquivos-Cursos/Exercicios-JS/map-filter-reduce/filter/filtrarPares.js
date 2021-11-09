function filtrarPares(arr) {
	if (!arr || !arr.length) return;

	const filteredArr = arr.filter((item) => item % 2 === 0);

	return filteredArr;
}

console.log(filtrarPares([1, 2, 3, 4]));

//  Outra forma chamando uma função 

function filtrarImpares(array) {
  return array.filter(callback)
}

function callback(item){
  return item % 2 !== 0
} 

const myArray = [10, 12, 13, 15, 1, 7, 24, 51, 30]
console.log(filtrarImpares(myArray))