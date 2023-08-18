function somarParIntervalo(inicio, fim) {
    var soma = 0
    for(var i = inicio; i <= fim; i++){
        if(i%2==0) {
            soma += i
        } 
    }
    console.log(`(${inicio}, ${fim}) = ${soma}`)
}

somarParIntervalo(1, 10)