//A primitive can have associated functions, no fields though

//Grouping related types
primitive Semicolon
    fun string(): String => ";"

primitive Newline
    fun string(): String => "/n"

type EndOfLine is (Semicolon | Newline)

//Grouping functions
primitive Calculator
    fun add(x: U32, y: U32): U32 => x + y
    fun sub(x: U32, y: U32): U32 => x - y
    fun mul(x: U32, y: U32): U32 => x * y
    fun div(x: U32, y: U32): U32 => x / y

actor Main
    new create(env: Env) =>
        var s: EndOfLine = Semicolon
        env.out.print(s.string())
        env.out.print(Calculator.mul(312, 819).string())
        env.out.print(Calculator.div(22, 7).string())

