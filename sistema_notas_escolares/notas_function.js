/* 
    ### Transformar Notas escolares

    Crie um algoritmo que transforme as notas do sistema de ensino numerico para sistema de notas em caracteres tipo A B C

    * de 90 para cima - A 
    * entre (80 - 89) - B 
    * entre (70 - 79) - C 
    * entre (60 - 69) - D 
    * entre (50 - 59) - E 
    * menor que 50    - F 
*/

    // Mais facil colocar tudo dentro de uma função
    
    function getScore(score) {

    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreE = score >= 50 && score <= 59
    let scoreF = score < 50 && score >= 0

    let scoreFinal;

    if (scoreA) {
        scoreFinal = "A"
    } else if (scoreB) {
        scoreFinal = "B"
    } else if (scoreC) {
        scoreFinal = "C"
    } else if (scoreD) {
        scoreFinal = "D"
    } else if (scoreE) {
        scoreFinal = "E"
    } else if (scoreF) {
        scoreFinal = "F"
    } else {
        scoreFinal = "Nota invalida"
    }
    
    return scoreFinal

    }

    console.log(getScore (101))
    console.log(getScore (30))
    console.log(getScore (88))
    console.log(getScore (62))
    console.log(getScore (-2))
    console.log(getScore (50))
    console.log(getScore (92))
    console.log(getScore (55))
    console.log(getScore (73))
    
