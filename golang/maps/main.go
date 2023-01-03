package main

import "fmt"

type colors map[string]string

func main() {
	// var colors map[string]string

	// colors := make(map[int]string) // This is the same as above ^^^^
	// colors[10] = "#ffffff"
	// delete(colors, 10)

	colors := colors{
		"red": "#ff0000",
		"green": "#GREEN",
		"white": "#ffffff",
 	}

	colors.print()
}

func (c colors) print() {
	for color, hex := range c {
		fmt.Println("Hex code for", color, "is", hex)
	}
}