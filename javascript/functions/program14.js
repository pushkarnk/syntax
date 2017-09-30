//Currying

Function.prototype.curry = function() {
    var slice = Array.prototype.slice
    var args = slice.apply(arguments)
    var that = this
    return function() {
        return that.apply(null, args.concat(slice.apply(arguments)))
    }
}

function add(a, b) {
    return a + b
}

let add2017 = add.curry(2017)
console.log(add2017(3))
