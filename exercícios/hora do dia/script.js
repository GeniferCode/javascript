function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora < 12) {
        img.src = 'imagens/manha.png'
        document.body.style.backgroundColor = '#d0af85'
    }
    else if (hora < 18) {
        img.src = 'imagens/tarde.png'
        document.body.style.backgroundColor = '#d27d60'
    }
    else {
        img.src = 'imagens/noite.png'
        document.body.style.backgroundColor = '#171714'
    }
}