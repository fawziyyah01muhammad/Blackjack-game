// 2. Create the player object. Give it two keys, name and chips, and set their values
// let player = {
//     name: "Points",
//     chips: 
// }

// function(){
//         if(sum === 21){
//             message = "Wohoo! You've got Blackjack! 🥳"
//             hasBlackJack = true
//             for(i = 10; i < 10; i ++){
//          console.log(player.chips)
//             }
            
//     }
// }
// 2. Use getRandomCard() to set the values of firstCard and secondCard


// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 1. Create a new array - cards - that contains firstCard and secondCard
let cards = []
// 2. Create a variable, sum, and set it to the sum of the two cards
let sum = 0

// 1. Create a variable called isAlive and assign it to true
let hasBlackJack = true
let isAlive = false
let message = ""
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardEl = document.getElementById('card-el')
let totalPoints = 0

// 3. Grab ahold of the player-el paragraph and store it in a variable called playerEl

// 4. Render the player's name and chips in playerEl
let playerEl = document.getElementById('player-el')
// playerEl.textContent = player.name + " : $" + player.chips
// Make this function return a random number between 1 and 13



function getRandomCard(){
     // if 1     -> return 11
    // if 11-13 -> return 10
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
let secondCard = getRandomCard()
cards = [firstCard, secondCard]
sum = firstCard + secondCard 
    renderGame()
}

function renderGame(){
    // 2. Refer to the cards array when rendering out the cards
        cardEl.textContent = "Cards: " 
        for(let i = 0; i < cards.length; i++){
            cardEl.textContent +=  cards[i] + " "
        }
    
    // cardEl.textContent = "Card:" + "rer" + firstCard  + " " + secondCard
    sumEl.textContent = "Sum:" + " " + sum
if(sum <= 20){
    message = "Do you want to draw a new card?"
}else if(sum === 21){
    message = "Wohoo! You've got Blackjack!"
    hasBlackJack = true
    playerEl.textContent = "Points:" + (totalPoints += 10)
   
}else{
  message = "You're out of the game! 😭"
  isAlive = false
}
messageEl.textContent = message
}


function newCard(){
     // 3. Use the getRandomCard() to set the value of card
// Only allow the player to get a new card if she IS alive and does NOT have Blackjack
if(isAlive === true && hasBlackJack === true){
    console.log("Drawing a new card from the deck!")
    let card = getRandomCard()
    sum += card
    // Push the card to the cards array
    cards.push(card)
    renderGame()
    
}
   
 }
