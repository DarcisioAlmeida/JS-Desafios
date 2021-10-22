/* 
  Thumbnails FileReader
    * Procedimento JS *
      - Alternativa ao url create - thumbnails com JS
      - uso de FileReader - leitor de arquivo
      - uso callback para criar e mostrar a imagem 
      - ReadAsDataURL - vai ler e executar callback do arquivo 

    * Procedimento na página HTML *
      - ao clicar em escolher aquivo no HTML - escolher arquivo
      - selecione a imagem e ela carrega
      - ao clicar na imagem - vai mostrar no tamanho definido

*/
function mostrar(){
  let reader = new FileReader();
  let imagem = document.getElementById('imagem').files[0]

  reader.onloadend = function(){
    let img = document.createElement('img')
    img.src = reader.result
    img.width = 300

    document.getElementById('area').appendChild(img)
  }
  reader.readAsDataURL(imagem)
}