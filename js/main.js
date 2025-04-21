// Goal: Make a 10 card memory game - users must be able to select two cards and check if they are a match. If they are a match, they stay flipped. If not, they flip back over. Game is done when all cards are matched and flipped over. Example: http://www.fruit-burst.co.uk/fun-and-games/pairs-game

//10 cards with 5 matching pairs (Only need 5 icons)nahhh I want them to flip. Now to figure that out...
//cards need to shuffle each time the game loads with reset button
document.querySelector('.start').addEventListener('click', startGame)
//function to check if cards match


let flippedCards = []

    function startGame (){
        console.log('button')
        const url = `/api`
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    let cards = document.querySelectorAll('.card');   
                    let shuffled = data.shuffledCards;
                    console.log(data)
                    //shuffling through each card
                    for (let i = 0; i < cards.length; i++){
                        let img = cards[i].querySelector('img')
                         console.log(shuffled[i], cards[i]);
                            img.src = shuffled[i].image
                        }
                             //flip card logic
                            cards.forEach(function(card) {
                            card.addEventListener('click', function () {
                                card.style.backgroundImage = 'none'
                                card.classList.add('flipped');
                                    console.log(card)
                                
                            });
                            //figuring this out, took me out. just throw the whole computer away..... there has to be another way 
                                matchMe(card)
                    });
                });
                card.addEventListener('click',matchMe)
                                    


    };

function matchMe(card){
    //add class to card once flipped
    card.classList.add('flippedCard')
    //push flipped card into array
    flippedCards.push(card)
    //conditional for cards that dont match
        if (flippedCards.length === 2){
            flippedCards[0].classList.remove('flipped')
            flippedCards[1].classList.remove('flipped')
            flippedCards = []
        }
    //
        if (flippedCrads.length === 2){

        }
}

    






                                            
// user clicks and it flips card
//user can only click 2 cards at a time
//if both cards match: keep them flipped
//if else flip them back over 
// when all five pairs match display you won!!