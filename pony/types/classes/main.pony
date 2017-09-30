//Pony's type system makes it novel
//Pony is statically typed
//Types are guarantees - the stronger the type system, the more things it can prove about your program at compile time


//Pony's guarantees
//If a program compiles, it will never crash! - wow
//There will never be an unhandled exception
//There's no such thing as a null. So no null dereferencing
//There will be no data race
//There will be no deadlock
//Code is capabilities-secure
//Message passing is causal


//Classes
//A class name always starts with an uppercase letter
//A class is constructed with constructors, fields and functions

class Complex
    let id: String
    var _real: U64          //Fields with names starting with _ are private
    var _imaginary: U64     //Fields with names starting with _ are private

    //Constructors have to initialize each and every field, there is no null/nil in Pony!
    new create(real': U64, imaginary': U64) =>   //A constructor can have multiple names 
      id = "complex"  //A `let` field HAS to be initialized in the constructor
      _real = real'
      _imaginary = imaginary'

    new realNum(a: U64 = 0) =>
      id = "real"    //A `let` field HAS to be initialized in the constructor
      _real = a
      _imaginary = 0

    //A function that returns nothing, returns None
    //A function that modifies fields must have a ref specifier, this defines the `reference capability` meaning the object is mutable 
    //By default, the reference capability is `box` which means no writes will be made to the object
    fun ref add(other: Complex) => 
      _real = _real + other._real
      _imaginary = _imaginary + other._imaginary

    fun plus(other: Complex): Complex =>
        Complex(_real + other._real, _imaginary + other._imaginary) //the return value is the value of the last expression in a function
        //the return keyword is used only for an early return

    fun ref setReal(newReal: U64): U64 =>
        _real = newReal  //this returns the old value of _real, destructive read

    fun _final() => true //finalizer, keeping it an empty function ;-)
        
actor Main
  new create(env: Env) =>
    var c1 = Complex(10, 12)
    var c2 = Complex(92, 23)          //call the default constructor which is named `create`
    c1.add(c2)

    var c3 = Complex.realNum(100)     //call the constructor with the respective name, `realNum` where
    var c3' = Complex.realNum(110)    //parameters and variable names can end with single quote(')
    var c4 = Complex.realNum()        //uses default parameter = 0
    let old = c4.setReal(10)
    env.out.print((old == 0).string())
   
    //swapping two values is simple, thanks to destructive read 
    var a: U8 = 10
    var b: U8 = 9 
    a = b = a
    env.out.print(a.string())
    env.out.print(b.string())
