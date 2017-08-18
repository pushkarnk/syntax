package main

import "fmt"


func main() {
    var sum int = 1
    //init and post statements are optional
    for ; sum < 1000; {
        sum += sum
    } 
    fmt.Println(sum)
}
