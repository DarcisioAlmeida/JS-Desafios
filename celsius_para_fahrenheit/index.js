/* 
    Calculo de Celsius e Fahrenheit

    C = (F - 32) * 5/9

    F = C * 9/5 + 32

*/

// transformDegree('50F')
function transformDegree (degree) {
    const celsiusExists = degree.toUpperCase().includes('C');
    const fahrenheitExists = degree.toUpperCase().includes('F')
    
    // fluxo erro
    if(!celsiusExists && !fahrenheitExists) {
        throw new Error ('Grau não identificado')
    }

    // um dos fluxos possiveis F -> C
    let updateDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    // um fluxo alternativo C -> 
    if(celsiusExists){
        updateDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = celsius => celsius * 9/5 + 32
        degreeSign = 'F'
    }
    
    return formula(updateDegree) + degreeSign
}

try {
    console.log(transformDegree('50F')) // ou console.log(transformDegree('50C')) - fluxo alternativo
    
} catch (error) {
    console.log(error)
}

/* // pegando todos os fluxos juntos
    try { 
        console.log(transformDegree('50F'))
        console.log(transformDegree('10C'))
        transformDegree('50Z')
        
    } catch (error) {
    console.log(error)
    }
        
*/


