package main

import (
    "fmt"
    "math/cmplx"
)

var (
    truth bool = true
    i int = 1<<63 - 1 
    i8 int8 = 1 << 7 - 1
    i16 int16 = 1 << 15 - 1
    i32 int32 = 1 << 31 - 1
    i64 int64 = 1 << 63 - 1
    ui uint = 1 << 64 - 1
    ui8 uint8 = 1 << 8 - 1
    ui16 uint16 = 1 << 16 - 1
    ui32 uint32 = 1 << 32 - 1
    ui64 uint64 = 1 << 64 - 1
)

var (
    b byte = 1 << 8 - 1
    r rune = 1 << 31 - 1
    f32 float32 = 1.0009
    f64 float64 = 89989.67765342545767552335657
    z1 complex128 = cmplx.Sqrt(-5 + 12i)
)

var str = "Hello, World!"

func main() {
    var iptr *int = &i
    fmt.Println(truth)
    fmt.Println(i, i8, i16, i32, i64)
    fmt.Println(ui, ui8, ui16, ui32, ui64)
    fmt.Println(b, r)
    fmt.Println(f32, f64)
    fmt.Println(z1)
    fmt.Println(str)
    fmt.Println(iptr)
}
    
    
