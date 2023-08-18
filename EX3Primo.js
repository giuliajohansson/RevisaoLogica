function primo(numero) {
    var count = 0
    for(var i = numero; i>0; i--) {
        if(numero%i==0) {
            count++
        }
    }
    console.log(`${numero} ${count==2}`)
}

primo(7)
primo(10)