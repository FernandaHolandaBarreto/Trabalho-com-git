//Importa a biblioteca readline-sync//

const readline = require('readline-sync')

//Importa a biblioteca readline-sync//
 
let nome = readline.question("Informe seu nome de jogador: ")
let jogoFavorito = readline.question("Informe seu jogo favorito: ")
let pontuacaoAtual = readline.questionInt("Informe sua portuação atual: ")


console.log("======== SISTEMA DE CADASTRO========")
console.log(`Nome do usuário: ${nome}`)
console.log(`Jogo Favorito: ${jogoFavorito}`)
console.log(`Pontuação Atual: ${pontuacaoAtual}`)