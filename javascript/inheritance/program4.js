//Pseudoclassical
//A better inheritance pattern - compare with program3


//This is some cool meta programming!
Function.prototype.method = function(name, func) {
    this.prototype[name] = func
    return this
}

Function.method("inherits", function(Parent) {
    this.prototype = new Parent()
    return this
})

var Mammal = function(name) {
    this.name = name
    return name
}

Mammal.prototype.say = function() {
    return this.saying || "<mute> ... <mute>"
}

var Cat = function(name, saying) {
    this.name = name
    this.saying = saying
}.inherits(Mammal)
 .method("say", function() {
     return this.saying + " " + this.name + " " + this.saying
 })
 .method("jump", function() {
     return "on the cupboard now!"
 })

var dog = new Mammal("Jim")
console.log(dog.say())

var cat = new Cat("Tom", "meow meow")
console.log(cat.say())
console.log(cat.jump())     
