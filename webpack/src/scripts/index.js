let card1 = "Ace of Spades";
let card2 = "Ten of Hearts";

let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
let values = ['Ace', 'King', 'Queen', 'Jack',
    'Ten', 'Nine', 'Eight', 'Seven', 'Six',
    'Five', 'Four', 'Three', 'Two', 'One'];

function CreateDeck(){
    let deck = [];
    for(let suitIdx = 0; suitIdx < suits.length; suitIdx++){
        for(let valueIdx = 0; valueIdx < values.length; valueIdx++){
            deck.push(values[valueIdx] + ' '+'Of' + ' ' + suits[suitIdx]);
        }
    }
    return deck;
}

function GetNextCard(){
    return deck.shift();
}

let deck = CreateDeck();


for(let i = 0; i < deck.length; i++){
    console.log(deck[i]);
}

let playersCards = [GetNextCard(), GetNextCard()];

console.log("Welcome to Blackjack!");    
console.log(" " + playersCards[0]);
console.log(" " + playersCards[1]);