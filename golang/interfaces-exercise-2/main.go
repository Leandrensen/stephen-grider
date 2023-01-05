package main

import (
	"fmt"
	"io"
	"os"
)

func main() {
	if len(os.Args) < 2 {
		fmt.Println("File name argument is missing")
		return
	}

	myfile, err := os.Open(os.Args[1])

	if err != nil {
		fmt.Println("There has been an error when trying to open:", os.Args[1], "file")
		return
	}

	io.Copy(os.Stdout, myfile)
}