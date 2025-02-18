const primeiro = 10
const segundo = 2
const terceiro = 5

function soma(){
    printtext()
    return "Resultado: " + (segundo + terceiro)
}

function printtext(){
    console.log("printando algo")
}

// function somarComparametros(n1,n2,n3){
//     return n1 + n2 + n3
// }

const somarComparametros = (n1,n2,n3) => n1 + n2 + n3

console.log(somarComparametros(2, 2, 3))