const readline = require('readline-sync')

let meta = 10000

let passos = readline.questionInt("quantos passos vocẽ de hoje?")

let diferenca = meta - passos 

console.log("======== RESULTADO ========")

if(passos >= meta){
    console.log("Parabéns!! Vocẽ atingiu a meta")

    console.log(`Vocẽ passou ${Math.abs(diferenca)} passos da meta`)
}else{
    console.log(`Faltaram ${diferenca} passos`)
}
