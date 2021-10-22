/*
  Thumbnails com JS
  * Procedimento com JS *
    - Pegar propria imagem antes do upload - quando selecionar via JS já pegar 
    - uso de Files - pegar arquivo
    - crio um URL.creatObjectURL pra mostrar a imagem através do JS como uma url
      - util pra mostrar a imagem antes de realizar upload 

    * Procedimento na página HTML *
      - ao clicar em escolher aquivo no HTML - escolher arquivo
      - selecione a imagem e ela carrega
      - ao clicar na imagem - vai mostrar no tamanho definido

*/

function mostrar() {
  let imagem = document.getElementById('imagem').files[0]

  let img = document.createElement('img')
  img.src = URL.createObjectURL(imagem)
  img.width = 400

  document.getElementById('area').appendChild(img)

}