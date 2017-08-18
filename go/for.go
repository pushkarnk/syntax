package main

import "fmt"

func sumOfArray(count int, array []int) int {
    sum := 0
    for i := 0; i <count; i++ {
        sum += array[i]
    } 
    return sum
}

func main() {
    arr := []int {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
    fmt.Println(sumOfArray(10, arr))
}
