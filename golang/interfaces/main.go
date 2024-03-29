package main

import "fmt"

type bot interface { 
	getGreeting() string
}

type englishBot struct {}
type spanishBot struct {}

func main() {
	eb := englishBot{}
	sb := spanishBot{}

	printGreeting(eb)
	printGreeting(sb)
}

func (englishBot) getGreeting() string {
	//VERY custom logic for generating an english greeting. Just for pretending
	return "Hi there!"
}

func (spanishBot) getGreeting() string {
	//VERY custom logic for generating a spanish greeting. Just for pretending
	return "Hola!"
}

func printGreeting(b bot) {
	fmt.Println(b.getGreeting())
}