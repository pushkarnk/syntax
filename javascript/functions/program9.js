//Extending basic types

String.prototype.reverse = function() {
    return this.split("").reverse().join("")
}

Function.prototype.method = function(name, func) {
    this.prototype[name] = func
    return this
}

console.log("pushkar".reverse())

String.method("isPalindrome", function() { return this == this.reverse() })

console.log("malayalam".isPalindrome())
console.log("tamil".isPalindrome())
