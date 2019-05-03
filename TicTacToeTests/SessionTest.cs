using System;
using Xunit;
using TicTacToe;

namespace TicTacToe.Tests
{
    public class SessionTest
    {
        [Fact]
        public void TestRegistration()
        {
            Session session = new Session();
            
            session.ConfigureBoard(3);
            
            Player playerA = session.CreatePlayer<Player>();
            Player playerB = session.CreatePlayer<Player>();
            
            Assert.Throws<SessionAlreadyFullException>(() => 
            {
                Player playerC = session.CreatePlayer<Player>();
            });
        }
        
        [Fact]
        public void TestMoving()
        {
            Session session = new Session();
            
            session.ConfigureBoard(3);
            
            Player playerA = session.CreatePlayer<Player>();
            Player playerB = session.CreatePlayer<Player>();
            
            Assert.NotEqual(0, playerA.Value);
            
            int movedY = 0;
            int movedX = 0;
            
            session.MovementMade += (object sender, (int, int) location) => 
            {
                movedY = location.Item1;
                movedX = location.Item2;
            };
            
            playerA.MakeMove(2, 1);
            
            Assert.Equal(playerA.Value, session[2, 1]);
            Assert.Equal(2, movedY);
            Assert.Equal(1, movedX);
            
            Assert.Throws<SessionInvalidMoveException>(() => 
            {
                playerB.MakeMove(2, 1);
            });
        }
        
        [Fact]
        public void TestWinning()
        {
            Session session = new Session();
            
            session.ConfigureBoard(3);
            
            Player playerA = session.CreatePlayer<Player>();
            Player playerB = session.CreatePlayer<Player>();
            
            Player winner = null;
            session.HasWinner += (object sender, Player player) => 
            {
                winner = player;
            };
            
            // -1 1 -1
            // 1 -1 1
            // -1 -1 -1
            
            playerA.MakeMove(0, 0);
            playerA.MakeMove(0, 2);
            playerA.MakeMove(1, 1);
            
            playerA.MakeMove(2, 0);
            playerA.MakeMove(2, 1);
            playerA.MakeMove(2, 2);
            
            playerB.MakeMove(0, 1);
            playerB.MakeMove(1, 0);
            playerB.MakeMove(1, 2);
            
            Assert.Equal(playerA, winner);
        }
    }
}