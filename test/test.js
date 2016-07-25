var assert = require('chai').assert
var Deck = require('../deck')
var Card = require('../card')

describe('Deck', function() {
  describe('MakeDeck()', function() {
    it('should make a deck with a size equal to suits * values', function() {
      assert.equal(Deck.MakeDeck(2,3).length, 6);
      assert.equal(Deck.MakeDeck(2,4).length, 8);
    });
  });
});


describe('Card', function() {
  describe('Constructor', function() {
    it('should make a new card with predicted suit and rank.', function() {
      var newCard = new Card(1,2)
      assert.equal(newCard.suit, 1);
      assert.equal(newCard.rank, 2);
    });
  });
});