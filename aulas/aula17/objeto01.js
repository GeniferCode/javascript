let amigo = {
    nome: "Genifer",
    sexo: "F",
    peso: 40.0,
    engordar(p=0) {
        this.peso += p
    }
}

amigo.engordar(2)
console.log(`${amigo.nome} engordou 2Kg, e agora pesa ${amigo.peso}`)