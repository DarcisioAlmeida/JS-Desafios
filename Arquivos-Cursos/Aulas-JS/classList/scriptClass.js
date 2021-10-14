function azul() {
  limpar()
  document.getElementById("titulo").classList.add('azul')
}
function verde() {
  limpar()
  document.getElementById("titulo").classList.add('verde')
}
function vermelho() {
  limpar()
  document.getElementById("titulo").classList.add('vermelho')
}
function rosa() {
  limpar()
  document.getElementById("titulo").classList.add('rosa')
}

function limpar(){
  document.getElementById("titulo").classList.remove('azul')
  document.getElementById("titulo").classList.remove('verde')
  document.getElementById("titulo").classList.remove('vermelho')
  document.getElementById("titulo").classList.remove('rosa')
}