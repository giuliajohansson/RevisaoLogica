function fatorial(numero) {
    original = numero
    for(var i = numero-1; i>1; i--) {
        numero *= i
    }
    if(original==0) {
        console.log('0 = 1')
    } else {
        console.log(`${original} = ${numero}`)
    }
}

fatorial(5)
fatorial(0)