let lista = []

function adicionar() {
    let txtnum = document.getElementById("txtnum");
    let selecao = document.getElementById("selecao");
    var num = Number(txtnum.value);
    if (txtnum.value.length == 0 || verificar(num, lista) || num > 100 || num < 1) {
        window.alert("Valor inválido ou já encontrado na lista.")
    }
    else {
        lista.push(Number(txtnum.value))
        var opcao = document.createElement("option")
        opcao.text = `Valor ${num} adicionado.`
        selecao.appendChild(opcao)
    }
    txtnum.value = ''
    txtnum.focus()
}

function verificar(num, lista) {
    let verificacao = false
    for (var c = 0; c < lista.length; c++) {
        if (num == lista[c]) {
            verificacao = true
            break
        }
    }
    return verificacao
}

function finalizar() {
    if (lista == '') {
        window.alert("Adicione valores antes de finalizar.")
        return
    }
    var res = document.getElementById("res")
    var maior, menor, soma = 0
    res.innerHTML = `<p>Ao todo, temos ${lista.length} números cadastrados.</p>`
    for (var c = 0; c < lista.length; c++) {
        soma += Number(lista[c])
        if (c == 0) {
            maior = lista[c]
            menor = lista[c]
        }
        else if (lista[c] > maior) {
            maior = lista[c]
        }
        else if (lista[c] < menor) {
            menor = lista[c]
        }
    }
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${soma / lista.length}.</p>`

}
