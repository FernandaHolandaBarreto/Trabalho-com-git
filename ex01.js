// const readline = require('readline-sync')

// let nome = readline.question("Digite seu nome : ")

// console.log(`SEu nome é ${nome}`)

//Importa a biblioteca readline-sync//
const readline = require("readline-sync")


//Importa a biblioteca readline-sync//

let nome = readline.question("Informe seu nome: ")
let curso  = readline.question("Informe o curso")
let idade  =  readline.questionInt("Informe a idade")

console.log("======== SISTEMA DE CADASTRO========")
console.log(`Nome do usuário: ${nome}`)
console.log(`Curso de usuário: ${curso}`)
console.log(`Idade do usuário: ${idade}`)
