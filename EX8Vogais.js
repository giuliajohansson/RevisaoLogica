function contarVogais(mensagem) {
    var quantidadeVogais = 0
    var listaVogais = "aAeEiIoOuUÁáÀàÂâÃãÉéÈèÊêÍíÌìîîÓóÒòÕõÔôÙùÚúÛû"
    for(var letra in mensagem)  {
        for(var vogal in listaVogais) {
            if(mensagem[letra] == listaVogais[vogal]) {
                quantidadeVogais++
            }
        }
    }
    console.log(`${mensagem} = ${quantidadeVogais}`)
}

contarVogais("maçã")
contarVogais("banana")