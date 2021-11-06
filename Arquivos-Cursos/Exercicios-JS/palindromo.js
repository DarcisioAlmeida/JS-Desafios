/* 
  # Bootcamp - Impulso React Web Developer - Digital Innovation One # 
  Palindromo : 
  - Consiste em verificar se palavras tem o mesmo significado quando lidas ao contrário.
  - Palavra ou frase que se pode ler, indiferentemente da esquerda para direita ou vice-versa.
    - exemplos: ovo | ama | raiar |
*/
// Exercicio - Verifique entre duas maneiras diferentes se uma string é uma palindromo //

// Situação 1 //
  function verificaPalindromo(string){
    if(!string) return "string inexistente"
    
    return string.split("").reverse().join("") === string;
  }
  console.log(verificaPalindromo("ovo")) // true
  console.log(verificaPalindromo("teto")) // false
  console.log(verificaPalindromo()) // string inexistente.

// Situação 2 //
  // compara apenas o item inicial e item final - string.length / 2
  function verificaPalindromo2 (string){
    if(!string) return "string inexistente";
    for(let i = 0; i < string.length / 2; i++){
      if(string[i] !== string[string.length - 1 - i]){
        return false
      }
    }
    return true
  }
  console.log(verificaPalindromo2("teste")) // false
  console.log(verificaPalindromo2("ama")) // true
 