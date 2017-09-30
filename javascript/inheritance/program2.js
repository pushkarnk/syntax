var Mammal = function(name) {
    this.name = name
    return this
}

Mammal.prototype.get_name = function() {
    return this.name
}

var cat0 = new Mammal("Stacy")  //the new keyword binds the "this" to a new object
var cat1 = Mammal("Stacy")      //not using `new` will lead to the `name` property being added to the global object

//the outputs of the following explain the above facts 
console.log(cat0)
console.log(cat1)
