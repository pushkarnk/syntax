package main

import "fmt"

func main() {
    x, y := 10, 42

    p, q := &x, &y
    fmt.Println(p, q)
    fmt.Println(*p, *q)

    *p = *p + 90
    *q = *q + 58
    fmt.Println(x, y)
}
