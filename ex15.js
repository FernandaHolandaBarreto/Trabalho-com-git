const readline = require('readline-sync')

let limite = 2000

let consumidas = readline.question("Digite quantas calorias foram consumidas no dia: ")

let percentual = (consumidas / limite) * 100

console.log("==========Resultado==========")
console.log(`Você consumiu ${percentual.toFixed(2)}% do limite diário`)

if (consumidas <= limite) {
    console.log("Dentro do limite de calorias")
} else {
    let excedeu = consumidas - limite
    console.log(`Você ultrapassou o limite em ${excedeu} calorias`)
}