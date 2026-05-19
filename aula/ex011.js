var idade = 15
if (idade < 16 ) {
      console.log(`Não vota`)
} else if(idade < 18){ // essa condição eu poderia ter juntado com a de baixo (idade < 18 || idade > 65) também funciona
      console.log(`Voto opcional`) 
} else if(idade < 65){ //essa condição criei pra estudo
      console.log(`Voto obrigatório`)
} else {
      console.log(`Voto opcional`)
}