package main

import "fmt"

func QuotientAndRemainder(x, y int) (q, r int) {
    q = x / y
    r = x % y
    return //naked return!
    //this affects readability, must be used only in short functions
}

func main() {
    fmt.Println(QuotientAndRemainder(97, 13))
    fmt.Println(QuotientAndRemainder(19232, 121))
}
