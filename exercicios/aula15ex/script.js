function contador(){
    var inic = document.getElementById('inic')
    var fim = document.getElementById('fim')
    var pass = document.getElementById('pass')
    var resultado = document.querySelector('div#resultado')

    if (inic.value.length == 0 || fim.value.length == 0 || pass.value.length == 0) {
        /* alert(`[ERRO] Faltam dados!`) */
        resultado.innerHTML = `Impossivel contar!`
    } else {
        resultado.innerHTML = `Contando: <br>`
        let i = Number(inic.value)
        let f = Number(fim.value)
        let p = Number(pass.value)
        if (p <= 0) {
            window.alert(`Passo inválido! Considerando PASSO 1`)
            p = 1
        }
        if (i < f ) {
            // Contagem crescente
            for (var c = i; c <= f; c += p) {
            resultado.innerHTML += ` ${c} \u{1F449}`
        }         
        } else {
            // Contagem regressiva
            for (var c = i; c >= f; c -= p){
            resultado.innerHTML += `${c} \u{1F449}`
            }
        }
        resultado.innerHTML += `\u{1F3C1}`
    }
}