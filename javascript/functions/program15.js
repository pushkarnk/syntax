//Memoization

var fibonacci = function() {
    var memory = [0, 1]
    var fib = function(n) { 
        var value = memory[n]
        if (typeof value !== 'number') {
            value = fib(n-1) + fib(n-2)
            memory[n] = value
        }
        return value
    }
    return fib
}()

var start = new Date().getTime()/1000
console.log(fibonacci(45))
var end = new Date().getTime()/1000
console.log("Calculated in " + (end-start) + " seconds") 
