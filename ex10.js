const readline = require('readline-sync')

let totalDePaginas = 300

let paginasLidas = readline.questionInt("Informe a quantidade de páginas lidas")

let percentual = (paginasLidas / totalDePaginas) * 100

console.log("========RESULTADO========")
console.log(`O usuário leu ${percentual}% do livro`)

