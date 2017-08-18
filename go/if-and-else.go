package main

import "fmt"

func weird(a, b int) int {
   if x := a*a + b*b; x % 2 == 0 {    //x is visible in the else block too!
       return x * x
   } else {
       return (x+1) * (x+1)
   }
}

func main() {
    fmt.Println(weird(11, 10))
    fmt.Println(weird(112, 1212))
} 
