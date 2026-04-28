const readline = require(`readline-sync`)

let nivelDeBateria 
let atualDaBateria = readline.question("Digite a bateria atual")

let percentual = (atualDaBateria / nivelDeBateria) * 100


console.log("=======RESULTADO======")
console.log(`Você utilizou ${percentual.toFixed(2)}% do nivel de bateria`)

if (atualDaBateria <= nivelDeBateria) {
    console.log("Você não gastou muita bateria")
} else {
    console.log(`Você ultrapassou o ${percentual} bateria`)
}


