/*
  Desconstruindo ou Desestruturando Objetos 
    - aceesar informações do objeto e trnasformar em variavel
*/

let pessoa = {
  nome: 'Darcisio',
  sobrenome: 'Almeida',
  idade: 45,
  social: {
    facebook: 'Lorena',
    instagram: 'Stella'
  },
  nomeCompleto: function(){
    return `${this.nome} ${this.sobrenome}`;
  }
}
console.log(pessoa.nome)
console.log(pessoa.social.facebook)
console.log(pessoa.nomeCompleto())

/* 
  //forma tradicional de criar as variaveis 
    let nome = pessoa.nome;
    let sobrenome = pessoa.sobrenome;
    let idade = pessoa.idade;
    let instagram = pessoa.social.instagram;

    console.log(nome, sobrenome, idade, instagram)
*/
// Desconstruir o objeto e pegar as informações e criar variaveis
      // obj a descontruir é pessoa //
      // renomeia nome da variavel - nome:nomeSocial (basta colocar : e nome desejado)
      // pegar objeto dentro de outro objeto social:{instagram}
      /* pegar objeto dentro de outro objeto 
          let {facebbok, instagram} = pessoa.social // forma simples
      */
  
      let {nome:nomeSocial, sobrenome, idade, social:{instagram}} = pessoa; 
      console.log(nomeSocial, sobrenome, idade, instagram)
      
    /* Usando Funções */ 
      function pegarNomeCompleto(objeto) {
        return objeto.nome + ' ' + objeto.sobrenome
      }
      console.log(pegarNomeCompleto(pessoa))
    
      // Outras formas 
      function pegarNomeCompleto2(objeto) {
        let nome = objeto.nome;
        let sobrenome = objeto.sobrenome;
        return `${nome} ${sobrenome}`;
      }
      console.log(pegarNomeCompleto2(pessoa))
    
      // forma mais simples
      function pegarNomeCompleto3({nome, sobrenome}){
        return `${nome} ${sobrenome}`
      }
      console.log(pegarNomeCompleto3(pessoa))