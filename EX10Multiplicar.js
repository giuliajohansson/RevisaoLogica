function multiplicar(numero1, numero2) {
    var resultado = 0
    for(var i = 0; i < numero2; i++) {
        resultado += numero1
    }
    console.log(`${numero1} x ${numero2} = ${resultado}`)
}

multiplicar(5,5)