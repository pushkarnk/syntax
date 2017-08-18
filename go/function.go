package main

import "fmt"

func add(x int, y int) int {
    return x + y
}

func main() {
    fmt.Println("101 + 123 =", add(101, 123))
}
