// FUNÇÃO RELOGIO DIGITAL //

function relogio(){
    var data= new Date();
    var horas= data.getHours();
    var minutos= data.getMinutes();
    var segundos= data.getSeconds();

    // Configurando horario para 2 digitos //
        if(horas < 10){
            horas="0" +horas;
        }
        if(minutos < 10){
            minutos="0" +minutos;ddd
        }
        if(segundos < 10){
            segundos="0" +segundos;
        }
    var horario= horas+":" +minutos+":"+segundos;
    document.getElementById('rel').value=horario;
}

var tempo= setInterval(relogio,1000);