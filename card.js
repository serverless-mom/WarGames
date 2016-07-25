// Constructor
function Card(suit, rank) {
  this.suit = suit;//suit is ignored in War but will matter for GUI implementation
  this.rank = rank;
}
// class methods
Card.prototype.printOut = function() {
  console.log(this.bar)
};
// export the class
module.exports = Card;
