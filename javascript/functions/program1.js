//the arguments array - `this` and `arguments` are bonus parameters

function add(a, b) {
    return arguments[0] + arguments[1]
}

console.log(add(10, 10) == 20) //true
console.log(add(10,  9) == 20)  //false
