//Simulating encapsulation using closures

//Simple counter
var counter = function() {
    var value = 0 

    return {
        increment: function() { value += 1 },   //the inner functions will always have access to `value`
        getValue: function() { return value }
    }
}()


//initialisable counter
var Counter = function(value) {
    return {
        increment: function() { value += 1 },
        getValue: function() { return value }
    }
}

console.log(counter.getValue())
counter.increment()
counter.increment()
console.log(counter.getValue())

//
var icounter = new Counter(10)
console.log(icounter.getValue())
icounter.increment()
icounter.increment()
console.log(icounter.getValue()) 


