const readline = require('readline-sync')

let notaFinal= 10

let notaDoaluno = readline.questionInt("Informe a nota do aluno")

let diferenca = notaFinal - notaDoaluno

console.log("=====RESULTADO=====")

if(notaDoaluno >= notaFinal){
   console.log("Aprovado")
} else {
    console.log("Reprovado")
}