function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fano.value.length == 0 || fano.value > ano ){
        window.alert('ERRO: Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade < 13) {
                img.setAttribute('src', 'imagens/bebe-menino.png')
            } else if (idade < 22) {
                img.setAttribute('src', 'imagens/jovem-menino.png')
            } else if (idade < 51) {
                img.setAttribute('src', 'imagens/homem-adulto.png')
            } else {
                img.setAttribute('src', 'imagens/idoso.png')
            }
        } else {
            genero = 'Mulher'
            if (idade < 13) {
                img.setAttribute('src', 'imagens/bebe-menina.png')
            } else if (idade < 22) {
                img.setAttribute('src', 'imagens/jovem-menina.png')
            } else if (idade < 51) {
                img.setAttribute('src', 'imagens/mulher-adulto.png')
            } else {
                img.setAttribute('src', 'imagens/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}