/* controla os parametros digitados por um evento evento - mostra as informações do teclado
function digitou(e){
  console.log(e)
}
*/
/* Você pode definir parametros para quando usuario digita. Exemplo quando tecla enter (numero 13 do teclado) */
function digitou(e){
  if(e.keyCode == 13){
    let texto = document.getElementById('campo').value;
    console.log(texto)
  }

}