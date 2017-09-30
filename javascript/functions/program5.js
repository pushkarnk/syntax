//The Constructor Invocation Pattern

var Complex = function(r, i) {
    this.real = r
    this.imaginary =i
}

Complex.prototype.add = function(other) {
    this.real += other.real
    this.imaginary += other.imaginary
}

Complex.prototype.print = function() {
    console.log(this.real + " + i" + this.imaginary)
}

var c1 = new Complex(10, 12)
var c2 = new Complex(20, 21)
c1.add(c2)
c1.print()
