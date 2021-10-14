// Objeto Date = tudo que se relaciona com data // 
// Atenção para meses o JS começa pelo 0 - janeiro | 1 - Fevereiro
  let d = new Date();

  console.log(d) // data ataul do dispositivo
  console.log(d.toDateString()) // data resumida
  console.log(d.toUTCString()) // data sem fusohorario

// formas de gerar datas
  let dias = new Date('2022-03-01 15:42:18')
  console.log(dias.toString())