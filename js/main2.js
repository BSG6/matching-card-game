// get card elements
const cardElements = document.querySelectorAll(".card");

// store card numbers
const cardNumbers = [1,1,2,2,3,3,4,4,5,5];
// randomize number order
const randomNumbers = [];

while (cardNumbers.length > 0) {
    const randomIndex = Math.floor(Math.random() * cardNumbers.length);
    const randomNumber = cardNumbers.splice(randomIndex, 1);

    randomNumbers.push(randomNumber);
}

// set up click event listeners for cards
for (let i = 0; i < cardElements.length; i++) {
    cardElements[i].addEventListener("click", event => clickCard(event, randomNumbers[i]));
}

// keep track of cards that are currently being clicked
let firstCardElement = null;
let secondCardElement = null;

// keep track of number of matches
let currentMatches = 0;
const totalMatches = 5;

// create function for when card is clicked
function clickCard(event, cardNumber) {
    const cardElement = event.target;

    if (cardElement.innerText !== "") {
        return;
    }

    cardElement.innerText = cardNumber;

    if (firstCardElement === null) {
        firstCardElement = cardElement;
    }
    else if (secondCardElement === null) {
        secondCardElement = cardElement;
    }

    checkForMatch();
}

// create function to see if firstCard and secondCard match
function checkForMatch() {
    if (firstCardElement === null || secondCardElement === null) {
        return;
    }

    if (firstCardElement.innerText === secondCardElement.innerText) {
        firstCardElement = null;
        secondCardElement = null;

        currentMatches++;
        console.log(currentMatches);
        if (currentMatches >= totalMatches) {
            // check if all matches have been found
            alert("yay you win!");
        }
    }
    else {
        setTimeout(() => {
            firstCardElement.innerText = "";
            secondCardElement.innerText = "";
        
            firstCardElement = null;
            secondCardElement = null;
        }, 500);
    }
}