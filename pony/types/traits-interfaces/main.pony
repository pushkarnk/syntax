//Pony has subtyping. Some types serve as `categories` that others can be a part of.
//Subtyping in programming languages is of two types - nominal and structural
//Nominal subtyping in Pony - traits
//Structural subtyping in Pony - interfaces

//Nominal subtyping
trait Named
    fun name(): String => "Unknown" 

//Structural subtyping
interface HasName
    fun theName(): String => "Not known!"

class Man is Named
    let _name: String 

    new create(name': String) =>
        _name = name'

    fun name(): String => _name 

    fun theName(): String => _name    //That's it. Man now belongs to the HasName category. Naming not needed.

class Woman
    let _name: String
    
    new create(name': String) =>
        _name = name'
    
    fun name(): String => _name

    fun theName(): String => _name    //Woman now belongs to the HasName category.

actor Main
    new create(env: Env) =>
        let person: Named = Man("Bob") 
        let man: HasName = Man("Anil")
        env.out.print(person.name())
        env.out.print(man.theName())

        //let woman: Named = Woman("Lakshmi") -- this is not allowed, Woman is not Named!
        let woman: HasName = Woman("Preeti")
        env.out.print(woman.theName())
   
