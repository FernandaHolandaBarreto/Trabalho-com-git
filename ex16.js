const readline = require(`readline-sync`)

let limite = 4

let horas = readline.question("Digite quantas horas você usou o celular hoje: ")

let percentual = (horas / limite) * 100

console.log("==========Resultado==========")
console.log(`Você utilizou ${percentual.toFixed(2)}% do limite diário`)

if (horas <= limite) {
    console.log("Você respeitou o limite de uso")
} else {
    let excedeu = horas - limite
    console.log(`Você ultrapassou o limite em ${excedeu} horas`)
}