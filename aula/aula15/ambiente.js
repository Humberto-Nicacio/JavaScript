var num = [5, 8, 2, 9, 3]
num.sort() // organiza o conteudo dos elementos em ordem crescente
num.push(1) //Adiciona um elemento a última posição e o conteudo
console.log(num) // mostra o conteúdo dos elementos
console.log(`O vetor tem ${num.length} posições`) // mostra o tamanho do vetor
console.log(`O primeiro valor do vetor é ${num[0]}`) // mostra o primeiro elemento do vetor, a posição dos índices SEMPRE vai começar no número 0
var pos = num.indexOf(2)
if (pos == -1) {
    console.log(`Valor não encontrado!`)
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}