package main

import "fmt"
import "math"

func Sqrt(x float64) float64 {
    count := 0
    z := float64(1)
    for count < 10 {
      z = (z+x/z)/2
      count ++
    }
    return z
}

func main() {
    fmt.Println(Sqrt(2))
    fmt.Println(math.Sqrt(2))
}
