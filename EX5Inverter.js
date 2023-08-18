function inverter(mensagem) {
    separado = mensagem.split("")
    inverso = separado.reverse()
    mensagemFinal = inverso.join("")
    console.log(mensagemFinal)
}

inverter("Javascript")