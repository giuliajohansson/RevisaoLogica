function fibonacci(numero) {
    nums = [0, 1]
    for(var i = 0; i<numero-2; i++) {
        nums.push(nums[i]+nums[i+1])
    }
    console.log(nums)
}

fibonacci(10)