 //Função para scroll suave da tela para retorno ao inicio //
 function subirTela(){
  window.scrollTo({
      top:0,
      behavior: 'smooth'
  })
}

// função para mostrar ou ocultar botão //
function mostrarOcultar(){
  if(window.scrollY === 0){
      document.querySelector('.scrollbutton').style.display = 'none';
  } else {
      document.querySelector('.scrollbutton').style.display = 'block';
  }
}
/* não muito indicada pois fica contanto de 2 em 2 segundos
  setInterval(mostrarOcultar, 2000);
*/
// melhor solução - monitora scrool e se repete a todo momento
window.addEventListener('scroll', mostrarOcultar);

function clicou() {
  document.querySelector('.btnClick').innerHTML = ('Botão Clicado')
}