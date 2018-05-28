/**
 * @author Zehua Chen
 * Testing for tic-tac-toe game itself
 */

var assert = require('assert');
var game = require('../bin/Game');

var player = { character: "X" };
var otherPlayer = { character: "Y" };


describe("Setting and Set Position", function () {

    describe("#constructor()", function () {

        it("Create 2 x 2 game", function () {
            var temp = new game.Board(2);

            assert.equal(temp.board.length, 2);
            assert.equal(temp.board[0].length, 2);
        });
    });

    describe("#setAt()", function () {

        it("setAt(0,0, { character: 'X' })", function () {

            var temp = new game.Board(3);
            temp.setAt(0, 0, { character: "X" });

            assert.equal(temp.board[0][0], "X")
        });

    });

});

describe("Finding Winner", function () {

    describe("Horizontal", function () {

        it("3 x 3", function () {
            var temp = new game.Board(3);

            temp.setAt(0, 0, player);
            temp.setAt(0, 1, player);
            temp.setAt(0, 2, otherPlayer);
            
            assert.equal(temp.findWinner(), null);

            temp.setAt(1, 0, player);
            temp.setAt(1, 1, otherPlayer);
            temp.setAt(1, 2, player);
            
            assert.equal(temp.findWinner(), null);
            
            temp.setAt(2, 0, player);
            temp.setAt(2, 1, player);
            temp.setAt(2, 2, player);
            
            assert.equal(temp.findWinner(), player, "Winner should be X");
        });
    });

    describe("Vertical", function () {

        it("3 x 3", function () {
            var temp = new game.Board(3);
            
            temp.setAt(0, 0, player);
            temp.setAt(1, 0, player);
            temp.setAt(2, 0, otherPlayer);
            
            temp.setAt(0, 1, player);
            temp.setAt(1, 1, otherPlayer);
            temp.setAt(2, 1, otherPlayer);
            
            temp.setAt(0, 2, player);
            temp.setAt(1, 2, player);
            temp.setAt(2, 2, player);
            
            assert.equal(temp.findWinner(), player, "Winner should be X");
        });
    });

    describe("Diagonal", function () {

        it("3 x 3", function () { 
            
            var temp = new game.Board(3);
            
            temp.setAt(0, 0, player);
            temp.setAt(1, 0, otherPlayer);
            temp.setAt(2, 0, otherPlayer);
            
            temp.setAt(0, 1, player);
            temp.setAt(1, 1, player);
            temp.setAt(2, 1, otherPlayer);
            
            temp.setAt(0, 2, otherPlayer);
            temp.setAt(1, 2, otherPlayer);
            temp.setAt(2, 2, player);
            
            assert.equal(temp.findWinner(), player, "Winner should be X");
            
        });
    });
});