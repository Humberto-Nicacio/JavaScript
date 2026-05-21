function carregar (){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var titulo = document.getElementById('titulo')
    var hora = data.getHours()
    /* var hora = 13 */
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 6 && hora <= 12) {
        // BOM DIA!
        img.src = 'manha.png'
        document.body.style.background = '#f3f2cb'
        titulo.style.color = '#000000'
    } else if ( hora >= 13 && hora <= 18) {
        //  BOA TARDE!
        img.src = 'tarde.png'
        document.body.style.background = '#8fa3a4'
    } else {
        // BOA NOITE!
        img.src = 'noite.png'
        document.body.style.background = '#1b1b19'
    }
}