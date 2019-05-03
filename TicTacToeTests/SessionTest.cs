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
            
            playerA.MakeMove(0, 0);
            
            Assert.NotEqual(0, playerA.Value);
            Assert.Equal(playerA.Value, session[0, 0]);
            
            Assert.Throws<SessionInvalidMoveException>(() => 
            {
                playerB.MakeMove(0, 0);
            });
        }
    }
}