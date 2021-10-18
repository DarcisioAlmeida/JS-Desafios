/* Aprenda Arrow Function 
    1. Função Tradicional
    2. Função com uso de variavel
    3. Arrow Function
*/

// Tradicional - palavra function + nome função
  function somar(x, y){
  return x + y
  } 
  console.log(somar(10, 5))

// Uso de variavel - substitui nome da função atribui nome para variavel
    let somar2 = function(x, y) {
    return x + y
    }
    console.log(somar2(20, 45))

// Arrow Function - atribuir nome para variavel e substitui nome function por => após os atributos
    let somar3 = (x, y) => {
    return x + y
    }
    console.log(somar3(13, 18))

  // forma simplificada em unica linha exclui os colchetes e a palavra return
    let somar4 = (x, y) => x + y 
    console.log(somar4(8, 28))

  // mais simples - atribui nome de apenas um parametro
    let letrasNome = nome => nome.length
    console.log(letrasNome('Almeida'))

    // nota em arrow function não se usa metodo(.this)
