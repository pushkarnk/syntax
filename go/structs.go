package main

import "fmt"

type Vertex struct {
    x int
    y int
}

func main() {
    p := Vertex{1,2}
    fmt.Println(p)
    p.x = 10
    fmt.Println(p.x, p.y)
}
