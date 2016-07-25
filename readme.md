# Shuffler - the War game simulator

## requirements
* Node v4.4.1

## installation
* clone this repo 
* `node --harmony play.js`

## configuration

* define the number of players, suits, and ranks at the top of play.js

# known issues

1. the process currently errors when you make wars unavoidable (e.g. by setting 9 players, with 9 suits, and only 1 rank of card) with "RangeError: Maximum call stack size exceeded". A good solution would be to identify these situations on first run, but I couldn't come up with a good formula to predict that, so I'd have to just force them to be in a 'sane' range and that felt inelegant. 

2. comments are significantly more chatty than I'd want in production code, but this an attempt to show my process!

3. Players are not instantly removed from the game if they have no card to play, instead playing an automatically losing rank-0 card. As a result, a player without the two cards necessary for a 'war' can come back and win the game in later rounds. The rules are unclear on what *should* happen here, so, this seemed okay.

