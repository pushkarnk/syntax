//Classes have functions. Actors have behaviors.
//Functions are synchronously invokes. Behaviors are asynchronously invoked.
//Functions are `fun`. Behaviours are `be`.


//Behaviors take parameters
//Behaviors dont have receiver capability
//Behaviors dont have a return type. They return None.

//An actor runs only one behavior at a time: actors are sequential
//A bunch of behaviors can be running in parallel depending on the number of CPUs
//No locks, no context switches. Thread-safe code.
//Actors can have _final

actor Calculator
    let _env: Env 
    
    new create(env: Env) =>
        _env = env

    be add(x: I32, y: I32) =>
        _env.out.print((x + y).string())
 
    be mul(x: I32, y: I32) => 
        _env.out.print((x*y).string())

actor Main
    new create(env: Env) =>
       let calc = Calculator(env)
       calc.add(102, 891)
       calc.mul(82, 71)
       env.out.print("Done!")
