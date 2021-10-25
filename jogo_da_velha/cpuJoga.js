// função criada para jogada da CPU //
function cpuJoga(){
    if(jogando){
        var l, c;
        if(nivel == 1) {
            do {
                l=Math.round(Math.random()*2);
                c=Math.round(Math.random()*2);
            } while(jogo[l][c] != "");
                jogo[l][c] = "0";
          // Aqui inicia nivel 2      
        } else if(nivel == 2){ 
            // ATAQUE - quando cpu tentando vencer 
            // jogadas linha 1
                if((jogo [0][0] == "0") && (jogo [0][1] == "0") && (jogo [0][2] == "")) {
                    jogo[0][2] = "0";
                } else if((jogo [0][0] == "0") && (jogo [0][2] == "0") && (jogo [0][1] == "")) {
                    jogo[0][1] = "0";
                } else if((jogo [0][1] == "0") && (jogo [0][2] == "0") && (jogo [0][0] == "")) {
                    jogo[0][0] = "0";
                } else
            // jogadas linha 2
                if((jogo [1][0] == "0") && (jogo [1][1] == "0") && (jogo [1][2] == "")) {
                    jogo[1][2] = "0";
                } else if((jogo [1][0] == "0") && (jogo [1][2] == "0") && (jogo [1][1] == "")) {
                    jogo[1][1] = "0";
                } else if((jogo [1][1] == "0") && (jogo [1][2] == "0") && (jogo [1][0] == "")) {
                    jogo[1][0] = "0";
                } else
            // jogadas linha 3
                if((jogo [2][0] == "0") && (jogo [2][1] == "0") && (jogo [2][2] == "")) {
                    jogo[2][2] = "0";
                } else if((jogo [2][0] == "0") && (jogo [2][2] == "0") && (jogo [2][1] == "")) {
                    jogo[2][1] = "0";
                } else if((jogo [2][1] == "0") && (jogo [2][2] == "0") && (jogo [2][0] == "")) {
                    jogo[2][0] = "0";
                } else
            // jogadas coluna 1 
                if((jogo [0][0] == "0") && (jogo [1][0] == "0") && (jogo [2][0] == "")) {
                    jogo[2][0] = "0";
                } else if((jogo [0][0] == "0") && (jogo [2][0] == "0") && (jogo [1][0] == "")) {
                    jogo[1][0] = "0";
                } else if((jogo [1][0] == "0") && (jogo [2][0] == "0") && (jogo [0][0] == "")) {
                    jogo[0][0] = "0";
                } else
            // jogadas coluna 2
                if((jogo [0][1] == "0") && (jogo [1][1] == "0") && (jogo [2][1] == "")) {
                    jogo[2][1] = "0";
                } else if((jogo [0][1] == "0") && (jogo [2][1] == "0") && (jogo [1][1] == "")) {
                    jogo[1][1] = "0";
                } else if((jogo [1][1] == "0") && (jogo [2][1] == "0") && (jogo [0][1] == "")) {
                    jogo[0][1] = "0";
                } else
            // jogadas coluna 3
                if((jogo [0][2] == "0") && (jogo [1][2] == "0") && (jogo [2][2] == "")) {
                    jogo[2][2] = "0";
                } else if((jogo [0][2] == "0") && (jogo [2][2] == "0") && (jogo [1][2] == "")) {
                    jogo[1][2] = "0";
                } else if((jogo [1][2] == "0") && (jogo [2][2] == "0") && (jogo [0][2] == "")) {
                    jogo[0][2] = "0";
                } else
            // jogadas diagonal 1
                if((jogo [0][0] == "0") && (jogo [1][1] == "0") && (jogo [2][2] == "")) {
                    jogo[2][2] = "0";
                } else if((jogo [0][0] == "0") && (jogo [2][2] == "0") && (jogo [1][1] == "")) {
                    jogo[1][1] = "0";
                } else if((jogo [1][1] == "0") && (jogo [2][2] == "0") && (jogo [0][0] == "")) {
                    jogo[0][0] = "0";
                } else
            // jogadas diagonal 2
                if((jogo [0][2] == "0") && (jogo [1][1] == "0") && (jogo [2][0] == "")) {
                    jogo[2][0] = "0";
                } else if((jogo [0][2] == "0") && (jogo [2][0] == "0") && (jogo [1][1] == "")) {
                    jogo[1][1] = "0";
                } else if((jogo [2][0] == "0") && (jogo [1][1] == "0") && (jogo [0][2] == "")) {
                    jogo[0][2] = "0";
                } else
            // DESEFA = cpu se defendendo  - analisa jogadas usuario   
            // jogadas linha 1
                if((jogo [0][0] == "X") && (jogo [0][1] == "X") && (jogo [0][2] == "")) {
                    jogo[0][2] = "0";
                } else if((jogo [0][0] == "X") && (jogo [0][2] == "X") && (jogo [0][1] == "")) {
                    jogo[0][1] = "0";
                } else if((jogo [0][1] == "X") && (jogo [0][2] == "X") && (jogo [0][0] == "")) {
                    jogo[0][0] = "0";
                } else
            // jogadas linha 2
                if((jogo [1][0] == "X") && (jogo [1][1] == "X") && (jogo [1][2] == "")) {
                    jogo[1][2] = "0";
                } else if((jogo [1][0] == "X") && (jogo [1][2] == "X") && (jogo [1][1] == "")) {
                    jogo[1][1] = "0";
                } else if((jogo [1][1] == "X") && (jogo [1][2] == "X") && (jogo [1][0] == "")) {
                    jogo[1][0] = "0";
                } else
            // jogadas linha 3
                if((jogo [2][0] == "X") && (jogo [2][1] == "X") && (jogo [2][2] == "")) {
                    jogo[2][2] = "0";
                } else if((jogo [2][0] == "X") && (jogo [2][2] == "X") && (jogo [2][1] == "")) {
                    jogo[2][1] = "0";
                } else if((jogo [2][1] == "X") && (jogo [2][2] == "X") && (jogo [2][0] == "")) {
                    jogo[2][0] = "0";
                } else
            // jogadas coluna 1 
                if((jogo [0][0] == "X") && (jogo [1][0] == "X") && (jogo [2][0] == "")) {
                    jogo[2][0] = "0";
                } else if((jogo [0][0] == "X") && (jogo [2][0] == "X") && (jogo [1][0] == "")) {
                    jogo[1][0] = "0";
                } else if((jogo [1][0] == "X") && (jogo [2][0] == "X") && (jogo [0][0] == "")) {
                    jogo[0][0] = "0";
                } else
            // jogadas coluna 2
                if((jogo [0][1] == "X") && (jogo [1][1] == "X") && (jogo [2][1] == "")) {
                    jogo[2][1] = "0";
                } else if((jogo [0][1] == "X") && (jogo [2][1] == "X") && (jogo [1][1] == "")) {
                    jogo[1][1] = "0";
                } else if((jogo [1][1] == "X") && (jogo [2][1] == "X") && (jogo [0][1] == "")) {
                    jogo[0][1] = "0";
                } else
            // jogadas coluna 3
                if((jogo [0][2] == "X") && (jogo [1][2] == "X") && (jogo [2][2] == "")) {
                    jogo[2][2] = "0";
                } else if((jogo [0][2] == "X") && (jogo [2][2] == "X") && (jogo [1][2] == "")) {
                    jogo[1][2] = "0";
                } else if((jogo [1][2] == "X") && (jogo [2][2] == "X") && (jogo [0][2] == "")) {
                    jogo[0][2] = "0";
                } else
            // jogadas diagonal 1
                if((jogo [0][0] == "X") && (jogo [1][1] == "X") && (jogo [2][2] == "")) {
                    jogo[2][2] = "0";
                } else if((jogo [0][0] == "X") && (jogo [2][2] == "X") && (jogo [1][1] == "")) {
                    jogo[1][1] = "0";
                } else if((jogo [1][1] == "X") && (jogo [2][2] == "X") && (jogo [0][0] == "")) {
                    jogo[0][0] = "0";
                } else
            // jogadas diagonal 2
                if((jogo [0][2] == "X") && (jogo [1][1] == "X") && (jogo [2][0] == "")) {
                    jogo[2][0] = "0";
                } else if((jogo [0][2] == "X") && (jogo [2][0] == "X") && (jogo [1][1] == "")) {
                    jogo[1][1] = "0";
                } else if((jogo [2][0] == "X") && (jogo [1][1] == "X") && (jogo [0][2] == "")) {
                    jogo[0][2] = "0";
                } else {
                    if(jogada < 8) {
                        do {
                            l=Math.round(Math.random()* 2);
                            c=Math.round(Math.random()* 2);
                        } while(jogo[l][c]!= "");
                        jogo[l][c] = "0";
                    } else {
                        for(var l = 0; l < 3; l++) {
                            for(var c = 0; c < 3; c++) {
                                if(jogo[l][c] == ""){
                                    jogo[l][c] = "0";
                                }
                            }
                        }
                    }
                }
            }        
            verifica = verificaVitoria();
            if(verifica != "") {
                alert(verifica + "\nFoi o Vencedor");
                jogando = false;
            }
            atualizaTabuleiro();
            jogada ++;
            quemJoga = 0;
    }
}