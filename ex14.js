const readline = require('readline-sync')

let meta = 5000

let faturado = readline.question("Digite o valor total faturado no dia: ")

let percentual = (faturado / meta) * 100

console.log("==========Resultado==========")
console.log(`A loja atingiu ${percentual.toFixed(2)}% da meta`)

if (faturado < meta) {
    let faltou = meta - faturado
    console.log(`Não atingiu a meta. Faltaram R$ ${faltou}`)
} else {
    let excedeu = faturado - meta
    console.log(`Meta atingida! Excedeu R$ ${excedeu}`)
}