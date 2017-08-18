package main

import "fmt"

func main() {
    value := 0
    defer fmt.Println("value = ", value) //the arguments are evaluated now, but invocation happens in the end
    value = 1
    fmt.Println("Exiting main after setting value = 1")
}
