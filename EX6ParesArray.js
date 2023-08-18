function paresArray(array) {
    arrayPares = []
    for (var c = 0; c <= array.length; c++) {
        if(array[c]%2==0) {
            arrayPares.push(array[c])
        }
    }
    console.log(`[${array}] = [${arrayPares}]`)
}

paresArray([1,2,3,4,5,6,7,8])