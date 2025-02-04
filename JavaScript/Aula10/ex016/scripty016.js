function contar(){
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var pas = document.getElementById('passo')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    } else {
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        if (p <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        res.innerHTML = `Contando: <br>`
        if (i < f){
            for (var c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            for (var c = i; i >= f; i -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}