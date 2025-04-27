// array that holds all images
    const imageList = [
        { name: 'steve', src: 'stevealex.png' },
        { name: 'pig', src: 'pig.png' },
        { name: 'sword', src: 'sword.png' },
        { name: 'zombie', src: 'zombie.png' },
        { name: 'enderman', src: 'enderman.png' }
    ]
//variables for cards
    const startButton = document.querySelector('.start')
    const cards = document.querySelectorAll('.card')
    let deck = []
    let firstCard = null
    let secondCard = null
    let matches = 0

//event listener for play now button 
startButton.addEventListener('click', startGame)



function startGame(){
    deck = []
    // creates a  deck with two copies of each card
    for(let i = 0; i < imageList.length; i++){
        deck.push(imageList[i])
        deck.push(imageList[i])

    }
}
//shuffle the deck
    let shuffleDeck = []

    // Im not sure if should use a while loop (but a for loop isnt working) for this and a hope i doesnt crash out on me lol
    //but fr
    while (deck.length > 0){
        // returns a whole Number that will pull from the index of deck
        const randomIndex = Math.floor(Math.random() * deck.length)
        //pulls the randomCard out of the deck array and puts it at 0 index in randomCard array
        const randomCard = deck.splice(randomIndex,1)[0]
        shuffleDeck.push(randomCard)
    }

    // gives the cards images 
    for (let i = 0; i < cards.length; i++){
        let img = cards[i].querySelector('.back img')
        if (shuffleDeck[i]) {
            img.src = shuffleDeck[i].src;
            img.alt = shuffleDeck[i].name;
        }
        cards[i].classList.remove('flipped');
    }

    // reset variables
    firstCard = null
    secondCard = null
    matches = 0

    // conditional for clicking a card 
    cards.forEach(function(card){
        card.addEventListener('click', function(){
            if (card.classList.contains('flipped') || secondCard !== null){
                return
            }
                card.classList.add('flipped')

                if(firstCard === null){
                    firstCard = card 
                } else{
                        secondCard = card
                        checkMatch()
                    }
                
        })
    })

// Check if two flipped cards match
function checkMatch() {
    const firstImg = firstCard.querySelector('.back img');
    const secondImg = secondCard.querySelector('.back img');

    if (firstImg.alt === secondImg.alt) {
      // It's a match
        firstCard = null;
        secondCard = null;
        matches++;

        if (matches === 5) {
        setTimeout(function() {
            alert('🎉 You found all matches!');
            createResetButton();
        }, 300);
    }
    } else {
      // Not a match
        setTimeout(function() {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        firstCard = null;
        secondCard = null;
        }, 800);
    }
}

  // reset logic function
    function createResetButton() {
    const resetButton = document.createElement('button');
    resetButton.innerText = "Reset Game";
    resetButton.classList.add('reset');
    document.body.appendChild(resetButton);

    resetButton.addEventListener('click', function() {
        startGame();
        resetButton.remove();
    });
}