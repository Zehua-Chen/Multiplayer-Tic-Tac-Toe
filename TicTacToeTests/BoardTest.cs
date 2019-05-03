using System;
using Xunit;

namespace TicTacToe.Tests
{
    public class BoardTest
    {
        [Fact]
        public void GetSet()
        {
            Board board = new Board(3);
            
            for (int y = 0; y < 3; y++)
            {
                for (int x = 0; x < 3; x++)
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
        
        [Fact]
        public void FindWinnerHorizontal()
        {
            Board board = new Board(3);
            
            // -1 -1 1
            // 1 1 -1
            // -1 -1 -1
            
            board[0, 0] = -1;
            board[0, 1] = -1;
            board[0, 2] = 1;
            
            board[1, 0] = 1;
            board[1, 1] = 1;
            board[1, 2] = -1;
            
            board[2, 0] = -1;
            board[2, 1] = -1;
            board[2, 2] = -1;
            
            Assert.Equal(-1, board.Winner);
        }
        
        [Fact]
        public void FindWinnerVertical()
        {
            Board board = new Board(3);
            
            // -1 -1 1
            // 1 -1 -1
            // -1 -1 1
            
            board[0, 0] = -1;
            board[0, 1] = -1;
            board[0, 2] = 1;
            
            board[1, 0] = 1;
            board[1, 1] = -1;
            board[1, 2] = -1;
            
            board[2, 0] = -1;
            board[2, 1] = -1;
            board[2, 2] = 1;
            
            Assert.Equal(-1, board.Winner);
        }
        
        [Fact]
        public void FindWinnerDiagnol()
        {
            Board board = new Board(3);
            
            // -1 -1 1
            // 1 -1 -1
            // -1 1 -1
            
            board[0, 0] = -1;
            board[0, 1] = -1;
            board[0, 2] = 1;
            
            board[1, 0] = 1;
            board[1, 1] = -1;
            board[1, 2] = -1;
            
            board[2, 0] = -1;
            board[2, 1] = 1;
            board[2, 2] = -1;
            
            Assert.Equal(-1, board.Winner);
        }
    }
}
