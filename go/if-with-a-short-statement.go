package main

import "fmt"

func fun(a, b int) int {
    if t := a*a + b*b; t % 2 == 0 {
        return a + b
    } else {
        return a - b
    }
}

func main() {
    fmt.Println(fun(12, 14))
    fmt.Println(fun(3, 4))
}
