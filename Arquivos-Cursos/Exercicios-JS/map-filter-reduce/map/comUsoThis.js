const orange = {
	price: 2,
};

const apple = {
	price: 1.5,
};

function mapArray() {
	const array = [1, 2, 3, 4, 5];

	return array.map(function (item) {
		return item * this.price;
	}, apple);
}

console.log(mapArray());


// Outra forma 
  const banana = {
    value: 2,
  }
  const pear = {
    value: 3,
  }

  function mapComThis(array, thisArg) {
    return array.map(function(item){
      return item * this.value;
    }, thisArg)
  }
  const numeros = [1, 2];

  console.log(" this -> banana", mapComThis(numeros, banana))
   console.log(" this -> pear", mapComThis(numeros, pear))

