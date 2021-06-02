# Criando um **Jogo da Velha** com Javascript #

### Utilizado: ###
* HTML5
* CSS3
* Javascript - fundamentos de lógica de programação
***
#### Criado 2 níveis do jogo ####
* nivel 1 = modo facil sem muita interação com cpu
* nivel 2 = com logica para cpu atacar e defender 
* nota: _o nivel do jogo é trocado pela variavel ```var nivel= 2 ```_

    **Posição: matriz 3x3** 
            | coluna 0 | coluna 1 | coluna 2  
    linha 0 | p1= 0,0  | p2= 0,1  | p3= 0,2
    linha 1 | p4= 1,0  | p5= 1,1  | p6= 1,2
    linha 2 | p7= 2,0  | p8= 2,1  | p9= 2,2

    **Significados:** 
    *Linhas*
        p1 = -[0,0] (linha 0, posição 0)
        p2 = -[0,0] (linha 0, posição 1)
        p3 = -[0,2] (linha 0, posição 2)

        p4 = -[1,0] (linha 1, posição 0)
        p5 = -[1,1] (linha 1, posição 1)
        p6 = -[0,2] (linha 1, posição 2)

        p7 = -[2,0] (linha 2, posição 0)
        p8 = -[2,1] (linha 0, posição 1)
        p9 = -[2,2] (linha 0, posição 2)
    ***
    *Colunas*

        p1 = -[0,0] (linha 0, posição 0)
        p2 = -[1,0] (coluna 1, posição 0)
        p3 = -[2,0] (linha 2, posição 0)

        p4 = -[0,1] (coluna 0, posição 1)
        p5 = -[1,1] (coluna 1, posição 1)
        p6 = -[2,1] (coluna 2, posição 1)

        p7 = -[0,2] (coluna 0, posição 2)
        p8 = -[1,2] (coluna 1, posição 2)
        p9 = -[2,2] (coluna 2, posição 2)
    
    _@DarcisioAlmeida :+1:_
