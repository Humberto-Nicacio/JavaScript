function tabuada(){
    var numero = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if (numero.value.length == 0) {
        window.alert(`Por favor, digite um número!`)
    } else {
        var i = Number(numero.value)
        tab.innerHTML = ``
        for(var c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `${i} x ${c} = ${i*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}