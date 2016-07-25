var Card = require('./card')

function MakeDeck (suits, ranks){
    newDeck = []
    for (var s = suits; s > 0; s--){
        for (var r = ranks; r > 0; r--){
            var currentCard = new Card(s,r)
            newDeck.push(currentCard)
        }
    }
    return newDeck
}

function Shuffle(array){ //Fisher–Yates
    var temp = array[0] 
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1))
        temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array
}

module.exports.MakeDeck = MakeDeck
module.exports.Shuffle = Shuffle

