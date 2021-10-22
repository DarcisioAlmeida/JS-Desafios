/* 
  Trabalhando e fazendo upload de arquivos 
    - uso de método post 
    - uso FormData
    - uso body.append
    # vai dar erro pois a url nao existe para requisição #

    1. Pega o primeiro arquivo files[0] - para mais arquivo faz um for 
    2. inicia um elemento FormData
    3. passa um append no FormaData com nosso arquivo
    4. Depois enviar pro body da requisição 
    5. manda um Content-Type para conseguir receber esta arquivo
*/

async function enviar(){
  let arquivo = document.getElementById('arquivo').files[0]

  let body= new FormData()
  body.append('title', 'sei lá sei lá sei lá')
  body.append('arquivo', arquivo)

  let req = await fetch('https://meusite.com.br/upload',{
    method: 'POST',
    body: body,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })

}

