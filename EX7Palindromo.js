function isPalindromo(mensagem) {
    mensagem = mensagem.toLowerCase()
    mensagemSeparada = mensagem.split("")
    mensagemReversa = mensagemSeparada.reverse()
    mensagemReversa = mensagemReversa.join("")
    console.log(`${mensagem} ${mensagem==mensagemReversa}`)
}

isPalindromo("Ovo")
isPalindromo("Uva")