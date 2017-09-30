//A primitive is similar to a class. It may be user defined.
//A primitive has no fields.
//Only one instance of a primitive can exist.

//Three main uses
//None - no value
//Enumeration - thread-safe union of primitives. Each value in an enumeration is a complete type.
//Collection of functions

//Primitives can have _init and _final methods that are called before and after any actor starts and all actors terminate, respectively

//Built-in primitives: machine-word types
actor Main
    new create(env: Env) =>
        //Bool
        let t: Bool = true 
        let f: Bool = false 
        env.out.print(t.string())
        env.out.print(f.string())
     
        //Integers
        let i8: I8 = I8.max_value()
        let u8: U8 = U8.max_value()
        let i16: I16 = I16.max_value()
        let u16: U16 = U16.max_value()
        let i32: I32 = I32.max_value()
        let u32: U32 = U32.max_value()
        let i64: I64 = I64.max_value()
        let u64: U64 = U64.max_value()
        let i128: I128 = I128.max_value()
        let u128: U128 = U128.max_value()

        env.out.print(i8.string() + "\n" +  u8.string())
        env.out.print(i16.string() + "\n" +  u16.string())
        env.out.print(i32.string() + "\n" +  u32.string())
        env.out.print(i64.string() + "\n" +  u64.string())
        env.out.print(i128.string() + "\n" +  u128.string())

        let f32: F32 = F32.max_value()
        let f64: F64 = F64.max_value()
        env.out.print(f32.string() + "\n" +  f64.string())

     
        let isize: ISize = ISize.max_value()
        let usize: USize = USize.max_value()
        let ilong: ILong = ILong.max_value()
        let ulong: ULong = ULong.max_value()
        env.out.print(isize.string() + "\n" + usize.string())
        env.out.print(ilong.string() + "\n" + ulong.string())
