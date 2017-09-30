function foo(a, b) {
    var bar = function(x) {  // functions can be defined inside functions
        return x + a         // inner functions have access to variables of outer functions
    }
    
   return a + b + bar(b)
}

console.log(foo(10, 12) == 44)
