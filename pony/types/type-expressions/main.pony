//Type expressions - 3 kinds
//Tuples - (String, U32)
//Union - (String | None)
//Intersection - (U8 & U16 & U32 & U64 & U128)

interface JobDescription
    fun isManager(): Bool
    fun manager(): String 
    fun description(): String
    fun designation(): String

interface SalaryDescription
    fun basic(): U32
    fun allowances(): U32
    fun retirals(): U32

class Position is (JobDescription & SalaryDescription)
    new role() => None
    fun isManager(): Bool => false
    fun manager(): String => "Bob"
    fun description(): String => "Interface with customers"
    fun designation(): String => "Sales Executive"
    fun basic(): U32 => 120000
    fun allowances(): U32 => 300000
    fun retirals(): U32 => 50000
 
class Employee
    var _promoted: Bool
    
    new create(promoted: Bool) =>
        _promoted = promoted

    fun promotion(): (((Position), U32) | None) =>   //This is the most important line in this file
                                                     //The return type is a mixture of product type, sum type and intersection type
        if _promoted == false then
            return
        else
            //get from database
            (Position.role(), 10)
        end
                   
actor Main
    new create(env: Env) =>
        //Two ways of deconstructing tuples
        var x: (String, U32) = ("Hello", 123)
        env.out.print(x._1)
        env.out.print(x._2.string())
        (var y, var z) = x
        env.out.print(y)
        env.out.print(z.string())
