function startGAme(){
    deck = []
    // creates a  deck with two copies of each card
    for(let i = 0; i < ImageTrackList.length; i++){
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