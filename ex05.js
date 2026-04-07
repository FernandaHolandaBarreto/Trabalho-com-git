const readine = require('readline-sync')

let objetivo = 500

let dinheiroGuardado = readline.questionFlot("Informe o valor guardado: ")

let diferenca = objetivo - dinheiroGuardado

console.log("===== RESULTADO =====")

if(dinheiroGuardado >= objetivo){
    console.log("Parabéns!! Vocẽ atingiu a meta")
} else{
    console.log(`Faltaram ${diferenca} para atingir o objetivo `)
}