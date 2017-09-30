actor Main                               //Type declaration. An actor can have asynchronous methods, called behaviors
  new create(env: Env) =>                //This is a constructor method. The `new` keyword indicates that its a constructor.
    env.out.print("Hello, World!")       //This is the method body. `Env` is the environment, `out` represents stdout. 
    //What's the difference in the outputs of these lines?
    env.out.print("Hello, World!\n")
    env.out.print("""Hellow, World!\n""")      //no escapes here!
