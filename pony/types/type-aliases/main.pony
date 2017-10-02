//A primitive can have associated functions, no fields though

//Grouping related types
primitive Semicolon
    fun string(): String => ";"

primitive Newline
    fun string(): String => "/n"

type EndOfLine is (Semicolon | Newline)  //type-alias

//Grouping functions
primitive Calculator
    fun add(x: U32, y: U32): U32 => x + y
    fun sub(x: U32, y: U32): U32 => x - y
    fun mul(x: U32, y: U32): U32 => x * y
    fun div(x: U32, y: U32): U32 => x / y

//Composing a complex type out of interfaces
interface HasName
    fun name(): String

interface HasAge
    fun age(): U32

interface HasAddress
    fun address(): String

trait Ageing
    fun ageing(age: U32): String =>
        if age < 40 then
            "Young"
        elseif (age > 40) and (age < 60) then
            "Middle aged"
        else
            "Old"
        end

class Person is (HasName & HasAge & HasAddress & Ageing)  //type-alias

    let _name: String
    let _age: U32
    let _address: String

    new create(name': String, age': U32, address': String) =>
        _name = name'
        _age = age'
        _address = address'

    fun name(): String => _name
 
    fun age(): U32 => _age
   
    fun address(): String => _address

    fun describeAge(): String => _name + " is " + ageing(_age)
    
actor Main
    new create(env: Env) =>
        var s: EndOfLine = Semicolon
        env.out.print(s.string())
        env.out.print(Calculator.mul(312, 819).string())
        env.out.print(Calculator.div(22, 7).string())
        var mohan = Person("Mohan", 98, "Porbandard, Gujarat")
        env.out.print(mohan.describeAge())

