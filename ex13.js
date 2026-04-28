const readline = require('readline-sync')

//Operadora de Internet//

let total = readline.question("Digite o total de dados disponíveis (GB): ")
let usado = readline.question("Digite quantos GB já foram utilizados: ")

let percentual = (usado / total) * 100

console.log("==========Resultado==========")
console.log(`O usuário utilizou ${percentual.toFixed(2)}% da franquia`)

if (percentual < 80) {
    console.log("Uso dentro do limite")
} else if (percentual <= 100) {
    console.log("Atenção: você está próximo do limite")
} else {
    console.log("Limite excedido")
}