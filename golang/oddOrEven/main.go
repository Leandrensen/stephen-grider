package main

import (
	"fmt"
	"strconv"
)

func main() {
	numbers := []int{1,2,3,4,5,6,7,8,9,10}

	for _, number := range numbers {
 		parity := "even"
		if number%2 == 1 {
			parity = "odd"
		}

		fmt.Println(strconv.Itoa(number)+" is "+parity)
	}
}
