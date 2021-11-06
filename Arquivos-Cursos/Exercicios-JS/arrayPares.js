/* 
  # Bootcamp - Impulso React Web Developer - Digital Innovation One # 
  - trocar numeros de array
*/
/* Exercicio - 
- Troque todos os elementos pares e diferentes de zero de um array pelo numero 0. 
- Se array for 0 retorne -1
*/

// Situação //
  function substituiPares(array) {
    if(!array) return -1 // null // 
    if(!array.length) return -1 // vazio undefined
    for(let i =0; i < array.length; i++){
      if(array[i] === 0){
        console.log("Este número já é zero!!");
      } else if (array[i] % 2 === 0) {
        console.log(`Substituindo ${array[i]} por 0 ...`);
        array[i] = 0;
      }
    }
    return array
  }

  let numeros = [1, 3, 5, 6, 8, 15, 18, 33, 23, 90, 80, 120, 3];
  console.log(substituiPares(numeros)) 
  
  let numeros2 = []  
  console.log(substituiPares(numeros2)) 


