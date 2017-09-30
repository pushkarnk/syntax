//Pseudoclassical

var Mammal = function(name) {
    this.name = name
    return this
}

Mammal.prototype.get_name = function() {
    return this.name
}

Mammal.prototype.say = function () {
    return this.saying || "<mute><mute>" 
}

//Cat, kind of inherits from Mammal
var Cat = function(name) {
    this.name = "June"
    this.saying = "meow meow"
}

//This is how Cat gets methods from the Mammal's prototype
Cat.prototype = new Mammal()

//then we can provide an alternate impl for one of the inherited methods
Cat.prototype.say = function() {
    return this.saying + " " + this.name + " " + this.saying
}

let pony = new Mammal("Pony")
console.log(pony.get_name())
console.log(pony.say())

let cat = new Cat("Stacy")
console.log(cat.get_name())
console.log(cat.say())
