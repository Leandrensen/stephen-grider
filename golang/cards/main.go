package main

func main() {
	// var card string = "Ace of Spades"
	// This is the same of above
	// The compiler infers the var type because we are asigning it a string value
	
	// card := "Ace of Spades" 
	// card = "Five of Diamonds"
	// card := newCard()
	// fmt.Println(cards)

	cards := newDeck()

	// cards.print()

	// hand, remainingDeck := deal(cards, 5)
	// hand.print()
	// remainingDeck.print()

	// fmt.Println(cards.toString())

	// cards.saveToFile("my_cards")

	// cardsFromFile := newDeckFromFile("my_cards")
	// cardsFromFile.print()

	// cards.shuffle()
	cards.print()
}

func newCard() string {
	return "Five of Diamonds"
}