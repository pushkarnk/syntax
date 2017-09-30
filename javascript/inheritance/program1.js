var Shape = function(name, length) {
    this.name = name
    this.length = length
}

console.log(Shape.prototype.constructor)   //function.prototype.constructor == function

