const readline = require ('readline-sync')

let restricaoDeidade = 18

let maiorDeidade = readline.question("Informe a sua idade")

let diferenca = maiorDeidade - restricaoDeidade

console.log("=====RESULTADO=====")

if(maiorDeidade >= restricaoDeidade){
   console.log("Você pode entrar no evento")
}else{
    console.log("Você não pode entrar no evento")
}