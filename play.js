var Deck = require('./deck')
//Configurable options
var players = 3, //set fewer players and suits than ranks, otherwise many games will go unresolved
    suits = 4,
    ranks = 6 

var table = [], //the 'winnings' of each round
    rounds = 0
var deck = Deck.Shuffle(Deck.MakeDeck(suits,ranks))
var playerDeckArray = new Array(players)
var CardCount = suits * ranks //your deck has to have all the cards for the game to be over
Deal()
while (CheckForGameOver() == false){
    StartRound()
}


function Deal(){
    for (var i = players-1; i>=0; i--){
        playerDeckArray[i]=[]
    }
    for (var i = deck.length; i > 0; i--){
        var playerSelection = (i%players)
        playerDeckArray[playerSelection].push(deck.pop())
    }
}

function StartRound(){
    rounds ++
    var cardRanksInPlay = []
    for (var i = players - 1 ; i>=0; i--){
        if (playerDeckArray[i].length > 0){
            var playedCard = playerDeckArray[i].shift()
            cardRanksInPlay.push(playedCard.rank)
            table.push(playedCard)
        } else {
            cardRanksInPlay.push(0)//if you haven't got cards to play we pretend you played a zero
        }
    }
    ResolveRound(cardRanksInPlay)
}

function ResolveRound(cardRanksInPlay){
    var winnersCircle = RoundWinners(cardRanksInPlay)
    if (winnersCircle.length == 1){
        table = Deck.Shuffle(table)//shuffle before adding to deck, prevents infinite loop games
        playerDeckArray[winnersCircle[0]].push(...table)
        table = []
    } else {
        War(winnersCircle)
    }
}

function RoundWinners(cardArray){
    console.log("cards played: "+cardArray)
    var topCard = Math.max(...cardArray)
    var winnersIdArray = []
    var winner = 0
    cardArray.forEach(function(card){
        if (card == topCard){
            winnersIdArray.push(winner)
        }
        winner ++
    })
    return winnersIdArray
}

//kinda seems like we could generalize War and StartRound into a general case, but....
//Rules vary significantly for wars, not so for normal rounds, left seperate to allow changes to 'war' rules.
function War(playerSubsetIds){
    console.log('WAR! Players '+playerSubsetIds+' square off...')
    cardRanksInPlay = []
    playerSubsetIds.forEach(function(player_id){
        if (playerDeckArray[player_id].length > 1){
            var faceDownCard = playerDeckArray[player_id].shift()//each player 'risks' a facedown card
            table.push(faceDownCard)
            var playedCard = playerDeckArray[player_id].shift()
            cardRanksInPlay.push(playedCard.rank)
            table.push(playedCard)
        } else {
            cardRanksInPlay.push(0)
        }
    })
    ResolveRound(cardRanksInPlay)
}

function CheckForGameOver(){
    for (var i = players - 1 ; i>=0; i--){
        if (playerDeckArray[i].length == CardCount){
            console.log('after '+rounds+' rounds...')
            console.log('game over! Winner was player number '+(i+1))
            return true
        } 
        else {
        }
    }
    return false
}