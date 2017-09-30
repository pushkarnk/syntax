var add = function(a, b) {
    return a + b
}

//If number arguments are more than the number of parameters, the extras are ignored
console.log(add("Hello, ", "World!", 12, 12))

//If the number of arguments is lesser than the number of parameters, the missing params are `undefined`
console.log(add(12)) //NaN -> 12 + undefined
