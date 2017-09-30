var myObject = {
    value : 0, 
    increment: function(inc) { this.value += typeof inc == 'number' ? inc : 1 }
}

myObject.increment(10)      //method invocation
console.log(myObject.value)

myObject['increment'](20)   //method invocation
console.log(myObject.value)
