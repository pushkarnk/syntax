package main

import "fmt"

const (
    Big = float64(1 << 100)
    Small = 1000
)

func main() {
    fmt.Printf("Big has type %T and value %f\n", Big, Big)
    fmt.Printf("Small has type %T and value %d\n", Small, Small)
}
