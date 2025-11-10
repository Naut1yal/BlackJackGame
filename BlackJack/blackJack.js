let cards=[]
let sum= 0
let hasBlackJack=false
let isAlive=false
let message=" "
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardEl=document.getElementById("card-el")
let playerEl=document.getElementById("player-el")
let player={
    name:"Arun",
    chips:150
}

function getRandomCard()
{
    let RanN=Math.floor(Math.random()*13)+1
    if (RanN===1)
    {
        return 11
    }
    else if (RanN>10)
    {
        return 10
    }
    else
    {
        return RanN
    }
    
}

function startGame()
{
    
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards=[firstCard,secondCard]
    sum= firstCard + secondCard 
    playerEl.textContent=player.name+ ": $" +player.chips

    renderGame()
}

function renderGame()
{
    cardEl.textContent="Cards: "
    for(let i=0;i<cards.length;i++)
    {
        cardEl.textContent+=" "+cards[i]
    }
    sumEl.textContent="Sum: "+sum
    
if (sum <=20)
{
    message="Do you want to draw a new card?🤞"
    isAlive=true
}
else if (sum === 21)
{
    message="Wohoo! You've got Blackjack!😂"
    hasBlackJack=true
}
else
{
    message="You're out of the game!😭"
    isAlive=false
}
messageEl.textContent=message + " isAlive " + isAlive +" hasBlackJack " + hasBlackJack
}

function Alive()
{
    
    let thirdCard=getRandomCard()
    sum+=thirdCard
    cards.push(thirdCard)
    

    renderGame()

    
    
}

function newCard()
{
    if(isAlive===true && hasBlackJack===false)
    {
        Alive()
    }
}



 
