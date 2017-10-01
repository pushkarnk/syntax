//Building an object in parts, by composition

//Hypothetical object

var Foo = function(name) {
    this.name = name
    return this
}

var IDGenerator = function(object) {

    var idCounter = 0
   
    return function(object) {
        idCounter += 1
        object.id = idCounter
    }
}()

var Hasher = function(object) {
    object.hash = function() {
        return object.name + object.id
    }
}

var o1 = new Foo("tree")
IDGenerator(o1)
Hasher(o1)

var o2 = new Foo("red-black")
IDGenerator(o2)
Hasher(o2)

var o3 = new Foo("hash-tables")
IDGenerator(o3)
Hasher(o3)

console.log(o1.hash())
console.log(o2.hash())
console.log(o3.hash())
