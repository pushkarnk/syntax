package main

import "fmt"

func main() {
    var i, j = 1, "Hello"
    k := "World!" //this construct is available only inside functions
    fmt.Println(i, j, k)
}
