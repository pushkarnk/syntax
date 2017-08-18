package main

import "fmt"

func main() {
    sum := 1
    //for is go's while!
    for sum < 10000 {
        sum += sum
    }
    fmt.Println(sum)
}
