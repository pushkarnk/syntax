//Modules

var id_generator = function() {
    var prefix = "def"
    var number = 1

    return {
        set_prefix: function(p) { prefix = p },
        set_number: function(n) { number = n },
        gen_id: function() { number += 1; return prefix + number }
    }
}()

id_generator.set_number(1979)
console.log(id_generator.gen_id())

id_generator.set_prefix("push")
console.log(id_generator.gen_id())
console.log(id_generator.gen_id()) 
