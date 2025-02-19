function somar(){
    var numero1 = parseFloat(document.getElementById("n1").value)
    var numero2 = parseFloat(document.getElementById("n2").value)
    var res = document.getElementById("res")
    res.innerHTML = numero1 + numero2

   }   
   function subtracao(){
    var numero3 = parseFloat(document.getElementById("n3").value)
    var numero4 = parseFloat(document.getElementById("n4").value)
    var res = document.getElementById("res-")
    res.innerHTML = numero3 - numero4

   }
   function mult(){
    var numero5 = parseFloat(document.getElementById("n5").value)
    var numero6 = parseFloat(document.getElementById("n6").value)
    var res = document.getElementById("res*")
    res.innerHTML = (numero5 * numero6).toFixed(1)
   
   }
   function div(){
    var numero7 = parseFloat(document.getElementById("n7").value)
    var numero8 = parseFloat(document.getElementById("n8").value)
    var res = document.getElementById("res/")

    if(numero8 !== 0){
        res.innerHTML = (numero7 / numero8).toFixed(1)
    }
    else{
        res.innerHTML = "Não é permitido divisão por 0"
        document.getElementById("n8").style.border = "2px solid red"
    }
  
  
   }

   function media(){
    var m1 = parseFloat(document.getElementById("m1").value)
    var m2 = parseFloat(document.getElementById("m2").value)
    var m3 = parseFloat(document.getElementById("m3").value)
    var m4 = parseFloat(document.getElementById("m4").value)
    var m5 = parseFloat(document.getElementById("m5").value)
    var media = document.getElementById("respm")
    
    var res = (m1 + m2 + m3 + m4 + m5) / 5
    
    var msg = document.getElementById("msg")

    if(res >= 7){
        media.textContent = res
        msg.textContent = "Passou!!!"
        msg.style.color = "green"
    }
    else{
        media.textContent = res
        msg.textContent = "Reprovou!!!"
        msg.style.color = "red"
    }
}

    function obeso(){
    var Peso = parseFloat(document.getElementById("Peso").value)
    var Altura = parseFloat(document.getElementById("Altura").value)
    var obeso = document.getElementById("respo")

    var res = Peso / (Altura * Altura)
    
    var msg = document.getElementById("msgo")

    if(res >= 40.0){
     obeso.textContent = res.toFixed(1)
     msg.textContent = "Obesidade grau III"
    }
    else if(res >= 35.0 && res <= 39.9){
        obeso.textContent = res.toFixed(1)
        msg.textContent = "Obesidade grau II"
    }
    else if(res >= 30.0 && res <= 34.9){
        obeso.textContent = res.toFixed(1)
        msg.textContent = "Obesidade grau I"
    }
    else if(res >= 25.0 && res <= 29.9){
        obeso.textContent = res.toFixed(1)
        msg.textContent = "Sobrepeso"
    }
    else if(res >= 18.6 && res <= 24.9){
        obeso.textContent = res.toFixed(1)
        msg.textContent = "Normal"
    }
    else if(res <= 18.5){
        obeso.textContent = res.toFixed(1)
        msg.textContent = "Abaixo do normal"
    }
}