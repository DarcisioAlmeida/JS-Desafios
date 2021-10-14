// Criando intervalos -  Set Interval - Relogio Digital

let = timer;
// iniciando
  function iniciar(){
    timer = setInterval(showTime, 1000)
  }
// para e limpa
  function finalizar(){
    clearInterval(timer)
  }
 
// aciona o intervalo de funcionamento
  function showTime(){
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    let txt = h+ ':' +m+ ':' +s ;
    document.querySelector('.demo').innerHTML = txt;
  }


