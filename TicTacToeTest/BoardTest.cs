using System;
using Xunit;

using TicTacToe;

namespace TicTacToeTest
{
    public class BoardTest
    {
        [Fact]
        public void GetSet()
        {
            Board board = new Board(3);
            
            for (uint y = 0; y < 3; y++)
            {
                for (uint x = 0; x < 3; x++)
                {
                    Assert.Equal(0, board[y, x]);
                }
            }
            
            board[0, 0] = 1;
            board[0, 0] = -1;
            
            Assert.Equal(-1, board[0, 0]);
            
            board[2, 2] = 1;
            Assert.Equal(1, board[2, 2]);
        }
    }
}
