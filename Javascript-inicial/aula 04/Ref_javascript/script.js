function calcular(id1, id2, respId, operador){
    var num1 = parseFloat(document.getElementById(id1).value)
    var num2 = parseFloat(document.getElementById(id2).value)
    
    var resultado

    // console.log(id1, id2, respId, operador,num1,num2)
    switch (operador) {
        case "+":
            resultado = num1 + num2
            break;
            case "-":
                resultado = num1 - num2
            break;
            case "*":
                resultado = num1 * num2
            break;
            case "/":
                if(num2 !== 0){
                    resultado = num1 / num2
                }else{
                    resultado = "Erro: Divisão por 0"
                }
                
            break;
    
        default: "Operador inválido"
            break;
    }
    document.getElementById(respId).textContent = resultado
}

function formatnumber(num){
    if(Number.isInteger(num)){
        return num
    }
    else if(num !== "Erro: divisão por 0"){
            return num.fixed(2)
    }
    else{
        return num
    }
}