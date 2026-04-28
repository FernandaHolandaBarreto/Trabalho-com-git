const readline = require(`readline-sync`)

let pontuacao = 150
let pontuacaoalcancada = readline.question("Digite a pontuação do jogador")

let percentual = (pontuacaoalcancada / pontuacao) * 100

console.log("=======RESULTADO======")
console.log(`Você conseguiu ${percentual.toFixed(2)}% de pontuação alcançada`)

if (percentual < 50) {
    console.log("Ruim")
} else if (percentual <= 100){
    console.log("Médio")
} 
else {
    (percentual > 100)
    console.log("Pro")
}
