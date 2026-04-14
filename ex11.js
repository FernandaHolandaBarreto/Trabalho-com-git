const readline = require('readline-sync')

let tamanhoTotal = 20

let qtdBaixados= readline.question("Quantos GB foram baixados?: ")

let percentual = (qtdBaixados / tamanhoTotal)*100

console.log("==========Resultado==========")
console.log(`O usuário baixou ${percentual}%de GB`)
