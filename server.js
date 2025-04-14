const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())
app.use(express.static(__dirname));



class Cards {
    constructor(id,value,image){
        this.id = id,
        this.value = value,
        this.image = image
        this.isFlipped = false
    }
    //method when card isnt flipped, says the card CAN be flipped over
    flip(){ 
        this.isFlipped = !this.isFlipped
    }

    randomCard(){
        //create 5 cards
        const backCard = [
            {value : 'steve', image : 'stevealex.png'},
            {value : 'pig', image : 'pig.png'},
            {value : 'sword', image : 'sword.png'},
            {value : 'zombie', image : 'zombie.png'},
            {value : 'enderman', image : 'enderman.png'}
        ]
        //duplicate the cards
        //empty array for 10 cards to be stored
        const backCardTwo = []
        let id = 1
        backCard.forEach((card) => {
            //creating another card but adding an id to it
            backCardTwo.push({
                id : id,
                value : card.value,
                image : card.image
            });
            id++;
            backCardTwo.push({
                id : id,
                value : card.value,
                image : card.image
            });
            id++;
            
        }    
        );return backCardTwo;
        //shuffle the cards
        //return the shuffled cards(array)
    }

}


app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})
app.get('/css/style.css',(request,response)=> {
    response.sendFile(__dirname + '/css/style.css')
})
app.get('/js/main.js', (request, response)=>{
    response.sendFile(__dirname + 'js/main.js')
})

app.get('/api',(request,response)=>{
    const newDeck = new Cards();
    const shuffledCards = newDeck.randomCard()
    console.log(shuffledCards)
    console.log('anyone out there')
    response.json({shuffledCards})
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Can you keep up?!`)
})

