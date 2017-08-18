package main

//We've seen factored imports
//An alternative is multiple imports
//factored imports are preferred

import "fmt"
import "math"

func main() {
    fmt.Println("The square root of 10 is", math.Sqrt(10))
}
