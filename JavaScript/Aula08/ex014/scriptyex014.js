function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var hora = new Date().getHours()
    var minuto = new Date().getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`
    if (hora >= 0 && hora < 12) {
        // Bom dia!
        img.src = 'Bomdia.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {    
        // Boa tarde!
        img.src = 'BoaTarde.png'
        document.body.style.background = '#b9846f'
    } else {    
        // Boa noite!
        img.src = 'BoaNoite.png'
        document.body.style.background = '#515154'
    }
}