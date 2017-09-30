//The Apply Invocation Pattern

var add = function (x, y) {
    return x + y
}

console.log(add.apply(null, [3, 4]))
console.log(add.apply(null, ["Hello ", "World"]))

var Complex = function(r, i) {
    this.real = r
    this.imaginary = i
}

Complex.prototype.add = function(other) {
    this.real += other.real
    this.imaginary += other.imaginary
}

var c1 = new Complex(10, 12)
var c2 = new Complex(12, 10)

console.log(c1)

Complex.prototype.add.apply(c1, [c2])   //wtf!

console.log(c1)
