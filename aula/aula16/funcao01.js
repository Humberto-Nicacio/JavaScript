function parimp(n){
    if (n % 2 == 0){
        return `par`
    } else {
        return `ímpar`
    }
}

var calculo = parimp(80)
console.log(calculo)