
/*
    nivel 1 = modo facil sem muita interação com cpu
    nivel 2 = com logica para cpu atacar e defender 

    Posição: matriz 3x3 
    p1= 0,0 | p2= 0,1 | p3= 0,2
    p4= 1,0 | p5= 1,1 | p6= 1,2
    p7= 2,0 | p8= 2,1 | p9= 2,2

*/

var jogo = [] // guarda as posições dos jogo
var tabuleiro = [] // controla elementos
var quemJoga = 0 // 0 - jogador | 1 - CPU
var verifica;
var jogando = true; // joga andamento
var nivel = 2
var jogadaCpu = 1
var quemComeca = 1
var jogada = 0


// função criada para verificar o vencedor //
function verificaVitoria() {
    var l,c; 
    // linhas
        for(l = 0; l < 3; l++) {
            if((jogo[l][0] == jogo[l][1]) && (jogo[l][1] == jogo[l][2])) {
                return jogo[l][0];
            }
        }
    // colunas
        for(c = 0; c < 3; c++) {
            if((jogo[0][c] == jogo[1][c]) && (jogo[1][c] == jogo[2][c])) {
                return jogo[0][c];
            }
        }
    // Diagonais 
        if((jogo[0][0] == jogo[1][1]) && (jogo[1][1] == jogo[2][2])) {
        return jogo[0][0];
        }
        if((jogo[0][2] == jogo[1][1]) && (jogo[1][1] == jogo[2][0])) {
            return jogo[0][2];
        }
        return "";
}
// função criada para definir quem joga //
function jogar(p) {
    if((jogando)&&(quemJoga ==0)){
        switch(p){
            case 1:
                if(jogo[0][0] =="") {
                    jogo[0][0] = "X";
                    quemJoga = 1
                }
                break;  
            case 2:
                if(jogo[0][1] =="") {
                    jogo[0][1] = "X";
                    quemJoga = 1
                }
                break;    
            case 3:
                if(jogo[0][2] =="") {
                    jogo[0][2] = "X";
                    quemJoga = 1
                }
                break;    
            case 4:
                if(jogo[1][0] =="") {
                    jogo[1][0] = "X";
                    quemJoga = 1
                }
                break;    
            case 5:
                if(jogo[1][1] =="") {
                    jogo[1][1] = "X";
                    quemJoga = 1
                }
                break;    
            case 6:
                if(jogo[1][2] =="") {
                    jogo[1][2] = "X";
                    quemJoga = 1
                }
                break;    
            case 7:
                if(jogo[2][0] =="") {
                    jogo[2][0] = "X";
                    quemJoga = 1
                }
                break;  
            case 8:
                if(jogo[2][1] =="") {
                    jogo[2][1] = "X";
                    quemJoga = 1
                }
                break; 
            default: // case 9:
                if(jogo[2][2] =="") {
                    jogo[2][2] = "X";
                    quemJoga = 1
                }
                break;   
        }
        if(quemJoga == 1) {
            atualizaTabuleiro();
            verifica = verificaVitoria();
            if(verifica != "") {
                alert(verifica + "\nFoi o Vencedor");
                jogando = false;
            }
            jogada ++;
            cpuJoga();
        }
    }
}
// função criada para atualizar tabuleiro após jogada //
// l = linha | c = coluna
function atualizaTabuleiro() {
    for(var l = 0; l < 3; l++) {
        for(var c = 0; c < 3; c++) {
            if(jogo[l][c] == "X"){
                tabuleiro[l][c].innerHTML = "X";
                tabuleiro[l][c].style.cursor = "default"; 
            } else if(jogo[l][c] == "0"){
                tabuleiro[l][c].innerHTML = "0";
                tabuleiro[l][c].style.cursor = "default"; 
            } else {
                tabuleiro[l][c].innerHTML = "";
                tabuleiro[l][c].style.cursor = "pointer"; 
            }
        }
    }
}
// função criada para iniciar o jogo //
function iniciar() {
    jogando = true
    jogadaCpu = 1
    jogada = 0
    jogo = [
        ["", "", ""], // p1= 0,0 | p2= 0,1 | p3= 0,2
        ["", "", ""], // p4= 1,0 | p5= 1,1 | p6= 1,2
        ["", "", ""]  // p4= 2,0 | p5= 2,1 | p6= 2,2
    ];
    tabuleiro = [
        [document.getElementById("p1"), document.getElementById("p2"), document.getElementById("p3")],
        [document.getElementById("p4"), document.getElementById("p5"), document.getElementById("p6")],
        [document.getElementById("p7"), document.getElementById("p8"), document.getElementById("p9")]
    ];
    atualizaTabuleiro();
    if(quemComeca == 1) {
        quemComeca = 0;
        quemJoga = quemComeca;
        document.getElementById("dvQuemComeca").innerHTML = "Quem Começa: Jogador";
    } else {
        quemComeca = 1;
        quemJoga = quemComeca;
        document.getElementById("dvQuemComeca").innerHTML = "Quem Começa: CPU";
        cpuJoga();
    }
}

window.addEventListener("load", iniciar) 