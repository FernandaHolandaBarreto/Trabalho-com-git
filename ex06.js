const readline = require('readline-sync')

let objetivo = 40

let metaDeestudo = readline.questionFloat("Informe a quantidade de horas")

let diferenca = objetivo - metaDeestudo

console.log("====== RESULTADO ======")

if(metaDeestudo >= objetivo){
  console.log("Parabéns!! Vocẽ atingiu a meta")
} else{
    console.log(`Faltaram ${diferenca}Para atingir o objetivo`)
}


