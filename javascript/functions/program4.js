var value = 0

var myObject = {
    value : 0,
    increment: function(inc) { this.value += inc }, 
    increment0: function(inc) {
                   var incr = function(inc) { value += inc }
                   incr(inc)
                }
}

myObject.increment(10)
console.log(myObject.value)
console.log(value)

myObject.increment0(10)
console.log(myObject.value)
console.log(value)
