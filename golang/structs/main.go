package main

import "fmt"

type contactInfo struct {
	email string
	zipCode int
}

type person struct {
	firstName string
	lastName string
	// contact contactInfo
	contactInfo
}

func main() {
	// alex := person{"Alex", "Anderson"}
	// alex := person{firstName: "Alex", lastName: "Anderson"}
	// var alex person
	// alex.firstName = "Alex"
	// alex.lastName = "Anderson"

	// fmt.Println(alex)
	// fmt.Printf("%+v", alex)

	jim := person {
		firstName: "Jim",
		lastName: "Party",
		contactInfo: contactInfo{
			email: "jimparty@gmail.com",
			zipCode: 777,
		},
	}

	// jimPointer := &jim // <--- This is not necesary. GO makes a shortcut for it when the receiver is a *type (pointer to type)
	jim.updateName("Jimmy")
	jim.print()
}

func (p person) print() {
	fmt.Printf("%+v", p)
}

func (pointerToPerson *person) updateName(newFirstName string) {
	(*pointerToPerson).firstName = newFirstName
}