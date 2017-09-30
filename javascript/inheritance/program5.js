//Functional inheritance, better than pseudoclassical

Function.prototype.method = function(name, func) {
    this.prototype[name] = func
    return this
}


var mammal = function(mammalSpec) {
    var that = { }
    that.get_name = function() {
        return mammalSpec.name
    }
    that.say = function() {
        return mammalSpec.says
    }

    return that
}

var cat = function(spec) {
    var that = mammal(spec) 
    that.jump = function() {
        return "on to the bed!"
    }
    return that
}


var myMammal = mammal({name: "Neo", says: "bhau bhau"})
console.log(myMammal.get_name())
console.log(myMammal.say())

var c = cat({name: "manee", says: "meeeeeyaowwwww"})
console.log(c.get_name())
console.log(c.say())
console.log(c.jump())
