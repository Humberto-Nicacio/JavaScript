function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade === 0) {
                img.setAttribute('src', './images/zeroanos.png')
            } else if (idade < 5) {
                img.setAttribute('src', './images/nenem.png')
            } else if (idade < 14) {
                img.setAttribute('src', './images/criancam.png')
            } else if (idade < 18) {
                img.setAttribute('src', './images/adolescentem.png')
            } else if (idade < 50) {
                img.setAttribute('src', './images/adulto.png')
            } else {
                img.setAttribute('src', './images/velho.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade == 0) {
                img.setAttribute('src', './images/zeroanos.png')
            } else if (idade < 5) {
                img.setAttribute('src', './images/nenef.png')
            } else if (idade < 14) {
                img.setAttribute('src', './images/criancaf.png')
            } else if (idade < 18) {
                img.setAttribute('src', './images/adolescentef.png')
            } else if (idade < 50) {
                img.setAttribute('src', './images/adulta.png')
            } else {
                img.setAttribute('src', './images/velha.png')
            }
        }
        res.style.textAlign ='center'
        img.style.paddingTop = '10px'
        res.innerHTML = `Detectamos que você é ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}

function tecla(event) {
    if (event.key === "Enter") {
        verificar()
    }
}