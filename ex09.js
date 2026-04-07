const readline = require('readline-sync')

let valorDacompra = 100

let freteGratis = readline.questionInt("Informe o valor da compra")

if(freteGratis > valorDacompra){
   console.log("Você tem direito ao freteGratis")
}else{
    console.log("Você precisa adicionar mais produtos")
}
